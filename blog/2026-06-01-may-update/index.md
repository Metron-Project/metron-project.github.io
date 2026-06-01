---
slug: may-2026-updates
title: May 2026 Updates
authors: [bpepple]
date: 2026-06-01
tags: [release, api, features, infrastructure]
---

Here's a summary of everything that landed in Metron since the beginning of May 2026.

<!-- truncate -->

# May 2026 News

## Monthly Statistics

During May the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **220**
- Issues: **1,809**
- Creators: **196**
- Characters: **506**

Thanks to everyone that contributed!

## New Features

### Wish List and Pull List

The biggest addition this month is the launch of the **Wish List** and **Pull List** apps. Both lists are private to their owner, consistent with the existing User Collection, and are created automatically on first access — no setup required.

#### Pull List

The Pull List is the digital equivalent of a comic shop pull list: a collection of ongoing series you follow. It is accessible under `/pull-list/` on the site and fully supported via the API at `/api/pull_list/`.

**API endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/pull_list/` | Pull list metadata (series count, last modified) |
| `GET` | `/api/pull_list/series/` | Paginated list of series on the pull list |
| `POST` | `/api/pull_list/series/add` | Add a series (`{"series_id": 123}`) |
| `DELETE` | `/api/pull_list/series/{series_id}/remove` | Remove a series |
| `GET` | `/api/pull_list/issues/` | Upcoming issues from pull list series |

The `/api/pull_list/issues/` endpoint is especially useful for building "what's coming out this week" views. It returns issues ordered by store date then series name, and accepts two optional date filters:

| Parameter | Format | Description |
|-----------|--------|-------------|
| `store_date_after` | `YYYY-MM-DD` | Issues on or after this store date |
| `store_date_before` | `YYYY-MM-DD` | Issues on or before this store date |

Each issue in the response includes the series summary, issue number, cover date, store date, and cover image.

Adding a series is idempotent: posting a `series_id` that is already on the list returns `200 OK` with the existing entry rather than an error.

#### Wish List

The Wish List tracks specific issues you want to acquire, with support for priority, condition goals, budget limits, and acquisition status. It lives at `/wish-list/` on the site and is backed by the API at `/api/wish_list/`.

**API endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/wish_list/` | Wish list metadata (item count, last modified) |
| `GET` | `/api/wish_list/items/` | Paginated list of items |
| `POST` | `/api/wish_list/items/add` | Add an issue to the wish list |
| `POST` | `/api/wish_list/items/{item_id}/acquire` | Mark an item as acquired |
| `DELETE` | `/api/wish_list/items/{item_id}/remove` | Remove an item |

When adding an item, only `issue_id` is required. All other fields are optional:

```json
{
  "issue_id": 5001,
  "priority": 1,
  "desired_grade": "6.0",
  "max_price": "500.00",
  "max_price_currency": "GBP",
  "notes": "First appearance of Spider-Man"
}
```

Priority defaults to `3` and `max_price_currency` defaults to `USD` if omitted. Like the pull list, adding an issue that is already on the wish list is idempotent — it returns `200 OK` with the existing item.

Each item carries a **status** that moves through a simple lifecycle:

| Status | Meaning |
|--------|---------|
| `Wanted` | Actively looking for this issue |
| `Found` | Located a copy, not yet purchased |
| `Acquired` | Purchased; a collection item has been created |

The acquire endpoint is the key integration point between the Wish List and the User Collection. Posting to `/api/wish_list/items/{item_id}/acquire` with optional purchase details (date, price, currency, store, notes) marks the wish list item as `Acquired` and creates a corresponding `CollectionItem`. The response tells you whether the collection item was newly created or already existed:

```json
{
  "wish_list_item_id": 42,
  "collection_item_id": 987,
  "created": true,
  "status": "Acquired"
}
```

The operation is idempotent: if the issue is already in the collection, the existing collection item is left untouched and `created` returns `false`.

A new version of [Mokkari](https://github.com/Metron-Project/mokkari/releases/tag/v3.27.0) has been released that adds support for these new endpoints.

## API Improvements

### New Filter Parameters

Several new filter parameters have been added to the Issue and Series list endpoints, making it much easier to build targeted queries:

| Filter | Issue endpoint | Series endpoint |
|--------|---------------|-----------------|
| `creator_id` | ✓ | ✓ |
| `character_id` | ✓ | ✓ |
| `team_id` | ✓ | ✓ |
| `universe_id` | ✓ | ✓ |
| `imprint_id` | | ✓ |
| `role_id` | ✓ | ✓ |

`role_id` supports multiple comma-separated values to filter by several roles at once.

### `year_end` in Series List

The Series list endpoint now includes the `year_end` field, so clients can tell at a glance whether a series is ongoing or has concluded — without needing to fetch the full detail endpoint.

## Dependency and Tooling Upgrades

- **Python 3.14** — the project is now running on Python's latest release.
- **Migrated from pipenv to uv** — dependency management and the container build now use [uv](https://github.com/astral-sh/uv), with a multi-stage Containerfile that keeps the final image lean and CI caching keyed to the lockfile.
- **Django 6.0.5** — upgraded from Django 5.x to the recently released Django 6 series.

## Metron Software Wiki Page

We've added a dedicated [Software page](https://metron.cloud/wiki/software/) to the Metron wiki where developers can showcase projects built on the Metron API.

If you've built a tool, app, or library that uses Metron's data — whether it's a reading tracker, a pull list manager, a CLI tool, or anything else — this is the place to list it. The page is intended to help users discover what the community has built and to give developers a bit of visibility.

To get your project listed, simply edit the wiki page directly and add an entry for it.


## OpenCollective

A huge thank you to everyone who has contributed to our [Open Collective](https://opencollective.com/metron)! Your support makes a real difference in keeping the Metron Project running and growing.

### What Your Contributions Support

Funds from Open Collective go directly toward:

- **Server hosting costs** - Keeping the Metron website and API available
- **Domain registration** - Annual domain name renewals
- **Future capacity increases** - Scaling resources as the database and user base grows

All expenses are transparent and publicly viewable on our [Open Collective page](https://opencollective.com/metron), so you can see exactly where every dollar goes.

### Support the Project

Any donations to help maintain our current API rate limits and keep the service free are greatly appreciated. Contributions of any size help ensure Metron remains a free resource for the comic book community.

Anyway, that's everything for this month! Take care.