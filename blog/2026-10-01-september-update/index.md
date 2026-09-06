---
slug: september-2026-update
title: September 2026 Updates
authors: [bpepple]
tags: [api, bugfix]
date: 2026-10-01
---
<!-- DRAFT: work in progress, being filled in as the month goes on. -->
During September the series list endpoint picked up new fields and a serializer consolidation, the API cache invalidation work from [last month](/blog/august-2026-update#api-response-caching) was extended to close its remaining staleness gaps, and a 500 error on invalid API lookups was fixed. Here's everything that landed so far, plus the usual bug fixes and quality-of-life improvements.

<!-- truncate -->

## Monthly Statistics

<!-- TODO: fill in from production at end of month -->

During September the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TBD**
- Issues: **TBD**
- Creators: **TBD**
- Characters: **TBD**
- Reading Lists: **TBD**

## API Improvements

**Series list endpoint gains `publisher`, `series_type`, `cv_id`, and `gcd_id`.** `/api/series/` now returns all four fields. The publisher's `series_list` action briefly split off its own `PublisherSeriesListSerializer` to keep that response unchanged while `cv_id`/`gcd_id` were scoped to the top-level endpoint, then was consolidated back onto `SeriesListSerializer` once `publisher` made the two payloads equivalent.

## API Response Caching

**Closing remaining staleness gaps.** `Character.creators`/`teams`/`universes`, `Team.creators`/`universes`, and `Series.genres`/`associated` had no `m2m_changed` wiring at all, so adding or removing a relation didn't bump the owning object's own `modified` timestamp — not just cosmetic staleness, the object's own listed relations could be wrong until the cache TTL lapsed. The variant/universe/reprint Issue cascades now also bump the Issue list-cache version, for consistency with the credits/credit-role cascades already covering it.

**Universe and Team rename staleness.** `IssueViewSet` now tracks Universe renames (measured at a low ~180 historical saves site-wide — lower write volume than Publisher, which was already tracked), and `CharacterViewSet`/`TeamViewSet` now track Universe and Team renames too (~3.1k saves for Team). Creator-driven staleness on Character/Team/Issue, and Genre-driven staleness on Series, are accepted as-is — Creator's write volume (~17.8k-18.6k saves) is roughly 100x Universe's and risks reproducing the cache-thrashing regression already fixed for Series, while Genre names are effectively static. Issue rating changes also intentionally continue to skip Issue cache invalidation, since ratings churn far more than any other field on popular issues.

## Bug Fixes

**500 error on invalid API detail lookups.** `get_object_modified()` filtered the queryset directly with the raw URL kwarg for its cheap `(pk, modified)` lookup, bypassing the exception handling DRF's `get_object_or_404()` normally provides. A non-numeric value against an integer lookup field (e.g. `/api/series/does-not-exist-9999/`) raised an uncaught `ValueError` instead of a 404.

## Developer Experience

**Fixed `.env.example` missing required settings.** `settings.py` reads `STATIC_ROOT` and `MEDIA_ROOT` through `config()` with no default whenever `DEBUG` is on, and the example file sets `DEBUG=True` — so copying it as-is raised `UndefinedValueError` on `manage.py` before anything else could run. Both variables are now declared, and `staticfiles/`/`media/` were added to `.gitignore`.

## Tooling Releases

### Mokkari 4.7.0

- Adds `publisher`, `series_type`, `cv_id`, and `gcd_id` to the series schema, and `issue_count` to `PullListSeriesDetail`, matching the [series list endpoint changes](#api-improvements) above.
- Bumps pyright to target Python 3.14.
- Upgrades the ESLint toolchain to v10, removing unused dead dependencies and swapping the unmaintained `eslint-plugin-eslint-comments` for the maintained `@eslint-community` fork.

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
