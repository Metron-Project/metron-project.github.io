---
slug: api-best-practices
title: Metron API Best Practices
authors: bpepple
tags: [api, best-practices, developers]
---

The Metron API gives developers programmatic access to a comprehensive comic book database — publishers, series, issues, characters, creators, story arcs, and more. To keep it fast and available for everyone, a little care in how you use it goes a long way. This post covers the patterns that will make your integration both efficient and a good citizen on the platform.

<!-- truncate -->

## Understand the Rate Limits

The API enforces two independent throttle windows per authenticated user:

| Window | Limit |
|--------|-------|
| Burst | 20 requests / minute |
| Sustained | 5,000 requests / day |

Every response includes headers so you can track your usage in real time:

```
X-RateLimit-Burst-Limit: 20
X-RateLimit-Burst-Remaining: 17
X-RateLimit-Burst-Reset: 1712876543

X-RateLimit-Sustained-Limit: 5000
X-RateLimit-Sustained-Remaining: 4983
X-RateLimit-Sustained-Reset: 1712966400
```

The `*-Reset` value is a Unix timestamp indicating when the window resets. Read these headers before every request and pause if `*-Remaining` reaches zero, rather than sending requests until you receive a `429 Too Many Requests` response.

```python
import time
import requests

def get_with_backoff(url, auth):
    response = requests.get(url, auth=auth)
    if response.status_code == 429:
        # DRF sets Retry-After to the number of seconds to wait
        retry_after = int(response.headers.get("Retry-After", 60))
        time.sleep(retry_after + 1)
        return get_with_backoff(url, auth)  # retry once
    response.raise_for_status()
    return response
```

---

## Use `modified_gt` for Incremental Sync

If you're building a local mirror or keeping a cache in sync, avoid re-fetching the entire database on every run. The `modified_gt` filter returns only records changed after a given timestamp:

```
GET /api/issue/?modified_gt=2025-10-01T00:00:00Z
GET /api/series/?modified_gt=2025-10-01T00:00:00Z
```

Store the timestamp of your last successful sync and pass it on the next run. This turns a potentially expensive full scan into a small delta query.

---

## Use Conditional Requests to Avoid Redundant Work

Detail endpoints (`GET /api/{resource}/{id}/`) support HTTP conditional requests via `If-Modified-Since` / `Last-Modified` headers. If the resource has not changed since you last fetched it, the server returns `304 Not Modified` with an empty body — saving bandwidth and not counting against your quota in any meaningful sense while keeping your data fresh.

```python
import requests
from email.utils import formatdate
from datetime import datetime, timezone

last_fetched = datetime(2025, 6, 1, tzinfo=timezone.utc)

response = requests.get(
    "https://metron.cloud/api/issue/1234/",
    auth=("user", "pass"),
    headers={"If-Modified-Since": formatdate(last_fetched.timestamp(), usegmt=True)},
)

if response.status_code == 304:
    print("Nothing changed, using cached data.")
elif response.status_code == 200:
    print("Updated data:", response.json())
    # Store response.headers["Last-Modified"] for next time
```

This pattern is especially useful for sync jobs that poll for updates on a set of known resources.

---

## Handle Errors Gracefully

| Status code | Meaning | What to do |
|-------------|---------|------------|
| `400` | Validation error | Check request parameters; do not retry unchanged |
| `401` | Authentication required | Verify credentials |
| `403` | Insufficient permissions | Write operations require Editor or Admin role |
| `404` | Resource not found | The ID does not exist; do not retry |
| `429` | Rate limit exceeded | Wait for the `*-Reset` timestamp before retrying |
| `5xx` | Server error | Retry with exponential backoff (start at 1s, cap at 60s) |

Only retry on `429` and `5xx`. Retrying `4xx` errors (other than `429`) wastes requests without any chance of success.

---

## Filter at the Server, Not the Client

Every endpoint exposes server-side filters. Use them instead of fetching large result sets and filtering in your application code. Unnecessary data transfer inflates your daily request count and slows your application down.

**Prefer this:**

```
GET /api/issue/?publisher_name=marvel&store_date_range_after=2025-01-01&store_date_range_before=2025-03-31
```

**Over this:**

```python
# Don't do this — fetches everything, then discards most of it
all_issues = []
page = 1
while True:
    r = requests.get(f"https://metron.cloud/api/issue/?page={page}", auth=auth)
    data = r.json()
    all_issues.extend(data["results"])
    if not data["next"]:
        break
    page += 1

marvel_q1 = [i for i in all_issues if i["publisher"] == "Marvel" and ...]
```

### Commonly useful filters

| Endpoint | Filter | Example |
|----------|--------|---------|
| `/api/issue/` | `series_name`, `publisher_name` | `?series_name=amazing+spider-man` |
| `/api/issue/` | `store_date_range_after` / `_before` | `?store_date_range_after=2025-01-01` |
| `/api/issue/` | `cover_year`, `cover_month` | `?cover_year=2024&cover_month=12` |
| `/api/series/` | `publisher_id` | `?publisher_id=1` |
| Any resource | `modified_gt` | `?modified_gt=2025-06-01T00:00:00Z` |
| Any resource | `cv_id`, `gcd_id` | `?cv_id=12345` |

---

## Prefer List Endpoints for Discovery, Detail Endpoints for Data

List responses return a lightweight subset of fields — just enough to identify and link to a resource. Detail responses include the full nested payload (credits, characters, teams, arcs, variants, etc.) and are considerably heavier.

| Use case | Endpoint to use |
|----------|-----------------|
| Search / browse / enumerate | `GET /api/issue/` (list) |
| Display full issue info | `GET /api/issue/{id}/` (detail) |
| Enumerate a character's appearances | `GET /api/character/{id}/issue_list/` |
| Enumerate a publisher's series | `GET /api/publisher/{id}/series_list/` |

Fetching detail responses for every item in a list is the most common cause of excessive request counts. Use the list to find what you need, then fetch detail only for the specific items your application actually displays.

---

## Page Through Results Responsibly

All list endpoints return paginated responses. Walk pages sequentially rather than spawning parallel requests across all pages — parallel pagination floods the burst window and offers little real-world speed benefit for most use cases.

```python
def iter_pages(url, auth):
    while url:
        r = requests.get(url, auth=auth)
        r.raise_for_status()
        data = r.json()
        yield from data["results"]
        url = data.get("next")

for issue in iter_pages("https://metron.cloud/api/issue/?cover_year=2024", auth):
    process(issue)
```

If you do need to parallelize, limit concurrency to a small number (2–3 workers) and check the `X-RateLimit-Burst-Remaining` header before each request.

---

## Identify Resources by ID, Not by Name

Metron IDs are stable. Names are not — series get renamed, publishers merge, and character aliases change. Once you've resolved a name to an ID, store and use the ID for all future requests.

```python
# Resolve once
r = requests.get("https://metron.cloud/api/series/?name=uncanny+x-men&year_began=1963", auth=auth)
series_id = r.json()["results"][0]["id"]  # store this

# Use the ID from then on
r = requests.get(f"https://metron.cloud/api/series/{series_id}/issue_list/", auth=auth)
```

If you work with Comic Vine or Grand Comics Database data, `cv_id` and `gcd_id` filters let you look up the corresponding Metron record without going through a name search.

---

## Protect Your Credentials

The API uses HTTP Basic Authentication. A few practices to keep credentials safe:

- Never hard-code credentials in source code. Use environment variables or a secrets manager.
- Do not log full request URLs or `Authorization` headers — both can expose your credentials.
- If you suspect a credential has been leaked, change your password immediately.

```python
import os
auth = (os.environ["METRON_USER"], os.environ["METRON_PASS"])
```

---

## Scrobbling Read Issues

The collection scrobble endpoint (`POST /api/collection/scrobble/`) is a convenient way to mark an issue as read from an external reader or automation. It creates a collection entry automatically if one doesn't exist. Because it's a write operation it counts against your rate limit, so batch or debounce calls rather than firing one per page turn.

```json
POST /api/collection/scrobble/
{
  "issue_id": 4567,
  "date_read": "2025-11-01T20:00:00Z",
  "rating": 4
}
```

---

## Summary

| Practice | Why it matters |
|----------|----------------|
| Read rate limit headers | Avoid `429` errors before they happen |
| Use `If-Modified-Since` | Skip unnecessary transfers for unchanged data |
| Apply server-side filters | Reduce response size and request count |
| Use `modified_gt` for sync | Fetch only what changed since last run |
| Use list endpoints for discovery | Avoid heavy detail payloads you don't need |
| Page sequentially | Stay within the burst window |
| Store IDs, not names | Avoid brittle name-based lookups |
| Only retry on `429` / `5xx` | Don't waste quota retrying permanent errors |
| Keep credentials in env vars | Prevent accidental exposure |

Following these patterns will keep your integration fast, your quota healthy, and the API available for the whole community. If you have questions, the OpenAPI schema at `/api/schema/` and the interactive Swagger UI at `/docs/` are good starting points for exploring what's available.
