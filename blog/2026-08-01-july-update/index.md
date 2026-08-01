---
slug: july-2026-update
title: July 2026 Updates
authors: [bpepple]
tags: [release, api, features, security, opencollective]
date: 2026-07-31
---

July brought a new 5-star issue rating system, the ability to chain reading lists into a larger reading order, alternative series names, a name-search performance fix, and a couple of handy API additions. We also shipped three things big enough to get their own posts this month: [supporter-based API rate limit tiers](/blog/supporter-rate-limits), [MetronInfo v1.1](/blog/metroninfo-v1-1), and [token-based API authentication](/blog/token-authentication). Here's everything else that landed.

<!-- truncate -->

## Monthly Statistics

During July the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **283**
- Issues: **1,361**
- Creators: **165**
- Characters: **396**
- Reading Lists: **56**

We also crossed **2,500 registered users** this month. Thanks to everyone that contributed!

## Issue Ratings

**Backed by a community poll.** Before pushing this to the server, we put the idea to a [community poll](https://metron.cloud/polls/1/), which passed **25 votes (74%) in favor** to **9 votes (26%) against**.

**5-star issue ratings.** Issues can now be rated on a 5-star scale directly from the issue detail page. The average community rating and total rating count are shown in the page header and returned on the issue detail API endpoint as `average_rating` and `rating_count` — both are intentionally left off the list endpoint to keep those responses lean.

**Synced with your collection.** Rating an issue from your collection now keeps the community rating in sync automatically, and a one-time backfill populated existing issue ratings from ratings already recorded in user collections.

**Rating-only Collection API endpoint.** A new `PATCH`/`PUT /api/collection/{id}/` endpoint lets you update just a collection item's personal rating without touching its read-tracking data — `is_read` and `date_read` remain writable only through the [scrobble endpoint](https://github.com/Metron-Project/metron/blob/master/api/README.md#scrobble-endpoint).

**No rating pre-release issues.** The star rating widget is now hidden (and blocked server-side) for issues whose `store_date` is still in the future, since there's no legitimate way to have read and rated something that hasn't come out yet.

## Reading List Improvements

**Chained reading orders.** Reading lists can now be linked to a previous and next list in a sequence — for example, "[Batgirl: Mother](https://metron.cloud/reading-lists/batgirl-mother/)" → "[Batgirl: The Book of Shiva](https://metron.cloud/reading-lists/batgirl-the-book-of-shiva/)" — letting curators build multi-list reading orders. Saving a link keeps both sides of the connection in sync automatically.

**Ownership transfer.** Staff and members of the "reading list editor" group can now reassign ownership of any reading list to the Metron account itself, via a confirmation page on the reading list detail view.

## Alternative Series Names

Series can go by more than one name due to indicia inconsistency — think "[Thor](https://metron.cloud/series/thor-2025/)" versus "The Mortal Thor." Series now have an `alt_names` field for tracking these alternates, exposed through the admin, the create/update form, quick search, autocomplete, and list-view filtering, so a search for either name finds the series either way. The field is also included in the Series API response, and on the nested series object returned from the issue detail endpoint.

**New API filter parameters.** The Series endpoint gains `alt_names` (partial match against the alternative names) and `q` (quick search across both `name` and `alt_names`). The Issue endpoint gains the equivalent `series_alt_names` and `series_q` filters, so you can find issues by a series' alternate name without an extra round trip.

## API Improvements

**Series ID in issue list responses.** The issue list/search endpoint now includes the series `id` alongside its name, volume, and year, so consumers no longer need a separate request just to resolve the series for a search result.

**UPC prefix filter.** A new `upc_starts_with` filter on the Issue endpoint matches by UPC prefix. Mobile barcode scanning frameworks like Google ML Kit and AVFoundation only read the 12-digit UPC-A and drop the 5-digit EAN supplemental, so this lets mobile clients look up an issue with just what the camera actually captured.

## Rate Limit Monitoring

**Auth-method and throttle tracking.** Now that [token-based auth](/blog/token-authentication) is live alongside Basic and Session auth, the API tracks which method each request uses and which clients are getting throttled with a 429, so adoption and abuse patterns are visible instead of anecdotal.

**Automated outreach for repeat offenders.** A new management command scans that throttle data for accounts that keep hitting rate limits without backing off. Flagged accounts get up to two e-mails, no more than once a week, asking them to fix their software before API access is revoked. Reporting is the default; nothing is e-mailed unless explicitly enabled, and the trigger thresholds were tuned mid-month to stop a handful of low-volume accounts from being flagged unnecessarily. Right now someone still has to run the command and review the report — fully automating the whole flow (scan, notify, and eventually revoke) on a schedule is coming in the near future.

**New rate limit guide.** [Handling Rate Limits](https://metron.cloud/wiki/api/handling-rate-limits/) is a new wiki page covering the burst/sustained limits, the response headers, how to read a `429`, and example backoff logic in Python, Go, C#, and JavaScript.

## Performance Improvements

**Name search index fix.** The trigram indexes backing name search on Arc, Character, Creator, Imprint, Publisher, Series, Team, and Universe were built against a slightly different expression than the one Django's `icontains` lookup actually generates, so Postgres had been silently falling back to a full sequential scan for every name search since these indexes were introduced. Rebuilding the indexes to match dropped name searches from 31-46ms down to under 3ms in testing.

**Indexable alternative name search.** The new `alt_names` field needed the same fix applied before it even shipped: array-to-string search on a Postgres array field isn't index-friendly by default. Wrapping it in an immutable SQL function and indexing that instead brought alt-names-only search down from 7.7ms to 0.07ms, and combined name/alt-name quick search from 37ms to 1.3ms, in testing against a ~16,000-series dataset.

## Bug Fixes

**Autocomplete crash on empty selection.** The collection, pull list, wish list, and reading list forms crashed with a 500 error when redisplayed with an autocomplete field left empty. A few of these forms were using the upstream autocomplete widget directly instead of the project's null-safe wrapper; they've been switched over.

## Dependency Upgrades

The project was updated to **Django 6.0.7**.

## Tooling Releases

The companion Python projects all shipped multiple releases this month, mostly to keep pace with the API changes above.

### Darkseid 8.4.0

- **8.2.0** - Writes `xmlns:metroninfo`, `xmlns:xsd`, `xmlns:xsi`, and `xsi:schemaLocation` on the `<MetronInfo>` root element to match the upstream schema's expected format.
- **8.3.0** - Fixes duplicate `xmlns:xsi`/`xsi:schemaLocation` attributes that could appear when merging an existing `MetronInfo.xml`, and raises `XmlError` instead of silently swallowing XML parse failures for callers using the metadata handlers directly.
- **8.4.0** - Adds support for the [MetronInfo v1.1 schema](/blog/metroninfo-v1-1), wiring up the new `AlternativeNumber` and `CommunityRating` elements.

### Mokkari 4.4.0

- **3.28.0** - Adds the new series `id` to issue list responses, matching the [Metron API change](#api-improvements) above.
- **3.29.0** - Adds a `collection_patch` method for the rating-only Collection API endpoint.
- **4.0.0** - Replaces the old static rate limiter with reactive `X-RateLimit-*` header tracking, as covered in the [supporter rate limits post](/blog/supporter-rate-limits). This is a breaking change: the `api` method no longer takes a `bucket` param.
- **4.1.0** - Adds previous/next reading order links to `ReadingListRead`, matching the new reading list chaining feature.
- **4.2.0** - Adds `average_rating` and `rating_count` fields to the `Issue` schema for the new community ratings.
- **4.3.0** - Adds `alt_names` to the `Series` and nested `IssueSeries` schemas, matching the new [alternative series names](#alternative-series-names) feature.
- **4.4.0** - Adds an `api_token` parameter to `mokkari.api()`/`Session`, supporting the new [token-based API authentication](/blog/token-authentication). When provided, it takes precedence over username/password.

### Simyan 3.0.0

[Simyan](https://github.com/Metron-Project/Simyan), the project's Comic Vine API wrapper maintained by [Buried-In-Code](https://github.com/Buried-In-Code), also had a major release. The HTTP layer was rewritten from `httpx` to `requests`, with the library's custom caching and rate-limiting code dropped in favor of `requests-cache` and `requests-ratelimiter`. This is a breaking change if you were depending on the old `httpx`-based internals directly.

### New: Shaligo 1.0.0

[Shaligo](https://github.com/Metron-Project/shaligo) is a new zero-dependency JavaScript/TypeScript client for the Metron API, covering the read-only list/retrieve surface: `arc`, `character`, `creator`, `imprint`, `issue`, `publisher`, `role`, `series`, `seriesType`, `team`, and `universe`. It requires Node.js 18+ and, fittingly, authenticates exclusively with an [API token](/blog/token-authentication) rather than username/password. Like Mokkari, it reads the live `X-RateLimit-*` headers on every response and proactively pauses before a request would exceed either the burst or sustained limit. Full API docs are generated with TypeDoc and published to [GitHub Pages](https://metron-project.github.io/shaligo/) on every push to `main`.

```js
import { MetronClient } from 'shaligo';

const client = new MetronClient({ token: process.env.METRON_TOKEN });

const page = await client.series.list({ name: 'Batman' });
console.log(page.count, page.results);
```

### Metron-Tagger 4.14.0

- **4.10.3** - Updates to Mokkari 4.0.0 for the reactive rate-limit tracking described in the [supporter rate limits post](/blog/supporter-rate-limits).
- **4.10.4** - Updates to Darkseid 8.3.0.
- **4.11.0** - Reports the remaining daily API quota after a tagging run finishes, writes community ratings to the `CommunityRating` element when tagging `MetronInfo.xml`, stops a batch outright on an unrecoverable 400/401 API error instead of logging and continuing, and no longer stacks the full rate-limit retry wait on top of the time you spent answering the "wait and retry?" prompt.
- **4.12.0** - Fixes a `MetronInfo.xml` bug, wires the API's `alt_number` field to `Metadata.alternate_number`, and adds an `--ignore-modified` flag to force a fresh API pull when retagging — useful for picking up changes, like an updated community rating, that don't bump the issue's `modified` timestamp.
- **4.13.0** - Wires series `alt_names` through to `Metadata.series.alternative_names` (via Mokkari 4.3.0), and switches to the new `series_q` filter when searching for an issue's series.
- **4.14.0** - Adds [token-based authentication](/blog/token-authentication) support (via Mokkari 4.4.0), with a new `auth_token` setting alongside the existing username/password. Existing username/password users get a one-time prompt to migrate, which is remembered if declined; users with no credentials configured are asked to pick between token auth (recommended) and username/password.

## Desaad

[Desaad](https://codeberg.org/bpepple/desaad), the Metron-powered comic library and reader app that's still under heavy construction, also picked up several changes this month.

**Per-issue star ratings synced to Metron.** You can now rate an issue (1-5 stars) when finishing it in the reader, or edit the rating anytime from the issue detail page. The initial rating rides along with the existing Metron scrobble call, and later edits go through the new Metron collection rating-only endpoint, so re-rating doesn't create duplicate read-date history on Metron.

**Richer reading list sync and UX.** Desaad now syncs additional reading list metadata from Metron — list type, average rating/rating count, cover image, and the new previous/next reading-order links — and surfaces it in the UI: a full-width cover banner and type/rating badges on the detail page, cover thumbnails and badges on the list/search pages, and previous/next navigation between chained lists.

Reading list search also gained minimum-rating, visibility, and curator filters, plus the "Creator" list type. Item ordering now trusts Metron's own per-item `order` value instead of always recomputing it from response order.

This keeps with Desaad's reading list pattern: importing a Metron-curated list should require minimal effort beyond searching with the available filters and clicking import — Desaad brings in as much of the source list's metadata as Metron exposes, and shouldn't require you to manually link a list's issues to items in your library when that mapping is already available from your comics' own metadata. That includes handling missing and newly imported issues automatically: list items are matched against your existing library where possible, and any issues you don't yet own are still imported and tracked rather than silently dropped.

<img
  src={require('./desaad-reading-list-detail.png').default}
  alt="Image of the updated Reading List deatil view."
  style={{maxWidth: '100%', height: 'auto'}}
/>

## Future Projects

July turned out busier than planned, so expect the next few months to be quieter — mostly bug fixes and minor changes.

The biggest project on deck for the rest of the year is planning a migration from our current vertical scaling setup to a horizontal one. For context, the stack today is a Django app served by gunicorn, PostgreSQL, Redis, nginx, and the Anubis bot-protection proxy, all running as rootless Podman/Quadlet containers on a single CentOS droplet (see [DEPLOYMENT.md](https://github.com/Metron-Project/metron/blob/master/DEPLOYMENT.md) for the full picture) — with static and media files already offloaded to DigitalOcean Spaces. Going horizontal means running multiple app droplets behind a load balancer, which is likely to become necessary before too long, but I don't have a firm timeline yet — I still need to pull together pricing metrics to figure out at what point it actually becomes the more economical option. I did some initial groundwork on this a month ago and have a few loose ends to tie up before picking it back up — the current draft plan is up as [SCALING.md](https://github.com/Metron-Project/metron/blob/master/SCALING.md) if you want to see where things stand or have feedback.

As always, we're looking for team members with server admin experience — [reach out](mailto:bpepple@metron.cloud) if that's you.

## OpenCollective

A huge thank you to everyone who has contributed to our [Open Collective](https://opencollective.com/metron)! Your support makes a real difference in keeping the Metron Project running and growing.

### What Your Contributions Support

Funds from Open Collective go directly toward:

- **Server hosting costs** - Keeping the Metron website and API available
- **Domain registration** - Annual domain name renewals
- **Future capacity increases** - Scaling resources as the database and user base grows

All expenses are transparent and publicly viewable on our [Open Collective page](https://opencollective.com/metron), so you can see exactly where every dollar goes.

### Support the Project

As covered in our [supporter rate limits post](/blog/supporter-rate-limits), donors now automatically get an elevated daily API rate limit. Any contribution, at any tier, genuinely helps keep Metron free for the whole community.

---

Thanks to everyone who contributed issues, pull requests, and feedback this month. As always, the project is open source and community contributions are welcome.
