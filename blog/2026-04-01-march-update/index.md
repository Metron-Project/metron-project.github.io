---
title: March 2026 News
slug: march-2026-update
date: 2026-04-01T12:00
authors: [bpepple]
tags: [release, api, reading-lists, collection, performance, mokkari, features]
---

# March 2026 News

## Monthly Statistics

During March the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TBD**
- Issues: **TBD**
- Creators: **TBD**
- Characters: **TBD**

Thanks to everyone that contributed!

## Metron

Here's a summary of everything that landed in Metron since the start of March 2026, covering API improvements, reading list enhancements, collection stats, and a handful of performance and bug fixes.

<!-- truncate -->

### API Improvements

#### Rate Limit Changes and Visibility

The API rate limit was adjusted to **20 requests/minute** and **5,000 requests/day**. To make this more transparent, the API now returns rate limit response headers on every response, so clients can see exactly how many requests they have remaining. Users can also see their current daily API usage — requests used, remaining, and a color-coded progress bar — directly in their profile's Account Settings section.

#### Conditional Request Support

Two more endpoints now support conditional requests (ETags / `If-None-Match`):

- The **reading list detail** endpoint — item add/remove operations now bump the parent list's `modified` timestamp, so clients can detect item changes without polling `/items/`.
- The **`/issue_list/`** endpoints — thanks to [Jonas Stendahl](https://github.com/Metron-Project/metron/pull/476) for this contribution.

This means clients can avoid re-downloading unchanged data, saving bandwidth for both users and the server.

#### Reading List Enhancements

The `ReadingList` model and API received several new additions:

- **`list_type` field** — exposed in both the list and detail serializers, with human-readable display values.
- **`image` field** — reading lists can now have a cover image. When set, the reading list detail page displays a semi-transparent hero header using the image; it falls back to the plain header when none is present.

#### Bug Fixes

- Fixed a `PATCH` request to `SeriesViewSet` that was silently clearing the `imprint` field when it was omitted from the request body.
- Fixed the `ReadingList` unique constraint to include `attribution_source`, allowing a user to have multiple lists with the same name as long as they come from different sources.

### Reading List Web Views

- Added a **publisher filter** to the reading list view, available in the Advanced Filters panel.
- Fixed an issue count display bug in `ReadingListListView`.
- Fixed a slow query in the publisher filter — the previous JOIN-based approach caused ~30 second response times on live data. We implemented a subquery-based approach is 5.6x faster.

### Collection Stats

- Added **Top Writers** and **Top Artists** horizontal bar charts to the Collection Stats view.
- Fixed chart text readability in dark mode — chart tick labels, grid lines, legend text, and titles now follow Bulma's theme-aware colors rather than Chart.js's hardcoded defaults.

### General UI / Frontend

- Cover images in issue detail pages and card grids now handle **landscape-oriented covers** correctly. Instead of forcing all covers into a portrait `2by3` aspect ratio with a center crop, the template detects the aspect ratio of the generated thumbnail and uses `is-3by2` for landscape images and `is-2by3` for portrait.

### Performance

- Replaced `prefetch_related` with `select_related` in `HomePageView` for recently edited issues, reducing two extra queries to a single JOIN.
- Eliminated unnecessary series type queries in several views — thanks to [Jonas Stendahl](https://github.com/Metron-Project/metron/pull/472) for this contribution.
- Fixed issue count annotations not appearing in `PublisherSeriesList` and `ImprintSeriesList` card grids.

### Bug Fixes

- Fixed an autocomplete widget crash (Internal Server Error) on create/update views when submitting a form without selecting an autocomplete field value. A `SafeAutocompleteWidget` subclass now normalises empty string and empty list values to `None` before the upstream widget tries to filter on them.

### Dependency Updates

- Updated to **Django 5.2.12**.
- Updated **Pillow**.

### Contributors

Thanks to [Jonas Stendahl](https://github.com/jonasStendahl) for his contributions this month.

## Mokkari

Here's a summary of everything that landed in Mokkari during March, covering rate-limiting overhaul, new schema fields, and dependency refreshes.

### Rate Limiting Changes

#### Reduced API limits

The per-session rate limits were updated to match the current Metron website limits:

| Limit | Old | New |
|-------|-----|-----|
| Per minute | 30 | 20 |
| Per day | 10,000 | 5,000 |

#### Pluggable rate-limit buckets

`Session` and the top-level `api()` function now accept an optional `bucket` parameter typed as `AbstractBucket` from `pyrate_limiter`. This lets you plug in any compatible backend — Redis, a database, or a plain in-memory store — to share rate-limit state across multiple workers or processes.

The default behaviour is unchanged: a SQLite-backed bucket is created lazily and shared across all sessions in the same process. A `DEFAULT_RATES` constant is now exported from `mokkari.session` so you can construct custom buckets with the same rate definitions:

```python
from pyrate_limiter import RedisBucket
import redis
import mokkari

pool = redis.ConnectionPool.from_url("redis://localhost:6379")
bucket = RedisBucket.init(mokkari.session.DEFAULT_RATES, redis.Redis(connection_pool=pool), "mokkari")
m = mokkari.api("username", "password", bucket=bucket)
```

### Contributors

Thanks to [Myers Carpenter](https://github.com/myers) for his initial work on the pluggable rate-limit buckets this month.

### Reading List Schema Additions

Two new fields were added to the reading list schemas:

- **`image`** — an image URL field on `ReadingListRead`, surfacing the cover image for a reading list.
- **`list_type`** — a new field on the reading list schemas that exposes the list's type classification.

## Metron-Tagger

Here's a summary of everything that landed in Metron-Tagger during March 2026, covering rate limit improvements, bug fixes, and dependency updates.

### Rate Limit Handling

The tagger's handling of Metron API rate limits was improved:

- **Clock-skew buffer** — A `RATE_LIMIT_RETRY_BUFFER` constant (2 seconds) is now added to every `retry_after` wait to account for small differences between the client clock and the server clock, reducing the chance of hitting the limit again immediately after waking up.
- **Nested rate limit handling** — If a second rate limit error is encountered *during* a retry attempt, the tagger now performs one additional silent wait-and-retry instead of surfacing an error to the user. Only if that second retry also fails is an error reported.

These changes result in fewer spurious rate-limit errors when tagging large batches of comics (#238).

### Bug Fixes

- Fixed a crash that occurred when a MetronInfo file did not include an `info_source` field. Previously, iterating over `md.info_source` without checking for its existence would raise an exception. The fix adds an early `None` guard in `get_id_from_metron_info` so files without a source are silently skipped rather than crashing the tagger.

### Dependency Updates

- Updated the [Mokkari](https://github.com/Metron-Project/mokkari) dependency to pick up its latest improvements.

### Contributors

Thanks to [@bearinfo](https://github.com/bearinfo) for his contributions this month.

## Desaad

During March several new features around content discovery, reading list management, and library gap tracking were made.

### Creator Views

Creators now have their own browsable pages. A new **Creators** section in the navigation gives access to a full creator list and individual detail pages showing a creator's roles across your library. A dedicated **Creator Series/Issues** view lets you drill down into their work by series.

### Bookmarks

You can now bookmark series and issues directly from the list views. A bookmark icon overlays the cover image; clicking it toggles the bookmark state inline via HTMX without a page reload. A new **Bookmarks** page collects all your saved items in one place, with inline unbookmark support.

### Advanced Search for Series and Issues

The Series and Issue list views gained advanced filtering capabilities. You can now filter by multiple criteria simultaneously, making it much easier to navigate large libraries.

### Reading List Refresh with Conditional Requests

Reading lists sourced from Metron can now be refreshed. Desaad stores the `modified` datetime returned by Metron and uses it on subsequent refresh requests via `If-Modified-Since`. If Metron returns 304 Not Modified, you'll see an "already up to date" message. Otherwise, existing items are cleared and a background re-import is enqueued. A **Refresh** button appears on the detail page for any Metron-sourced list with a completed import.

### Series Missing Issues Tracking

Desaad can now check your local library against Metron to identify issues in a series that you don't yet have. A new `MissingSeriesIssue` model tracks these gaps, and a **Check Missing Issues** button on the series detail page triggers the check inline via HTMX. Like reading list refresh, subsequent checks use conditional requests — if nothing has changed on Metron's side, you'll see an "already up to date" response.

A dedicated **Missing Issues** list view provides an overview of all tracked gaps across your library, and a background task automatically cleans up missing issue records when you import a previously absent issue.

### Reading List Improvements

Reading list search results and detail pages now show human-readable attribution source labels. Issue type display and filtering were added to reading list items, and attribution source tags appear on reading list cards for quicker at-a-glance identification.

Anyway, that's everything for this month! Take care.
