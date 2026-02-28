---
title: February 2026 News
slug: february-2026-update
date: 2026-03-01T12:26
authors: [ bpepple ]
tags: [ comic, metron, opencollective, api ]
---

# February 2026 News

## Monthly Statistics

During February the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**

Thanks to everyone that contributed!

## API Usage

Over the last 6 months, API usage has seen a significant increase — which is great! However, we are now at a point where our current server capacity is being strained.

<img
  src={require('./server_load.png').default}
  alt="Screenshot of a CPU load"
  style={{maxWidth: '100%', height: 'auto'}}
/>

[Jonas Stendahl](https://github.com/jyggen) and I have landed [some](https://github.com/Metron-Project/metron/commit/e3178e3b2a267ad5d3643c08bfd0e4922c0d570f) [optimizations](https://github.com/Metron-Project/metron/commit/a9b90b7f112385c40b866df7aa93163b826cce45) in the site's code, but they only go so far in relieving the pressure.

That leaves us with two options:

1. **Upgrade our server capacity** — an additional $27–$43/month depending on the CPU tier selected.
2. **Reduce the daily rate-limit** from 10,000 requests to something like 5,000.

Option #1 is clearly preferable, but we currently don't receive enough [donations](https://opencollective.com/metron) to cover the extra cost. That means we will likely need to reduce the daily rate-limit in the **very** near future, and we'll post an announcement here when that happens.

If you have other ideas or suggestions, please reach out!

## Website Updates

### Performance Improvements

Several changes were made to improve API and database query performance.

- **API query optimization**: Refactored multiple API endpoint viewsets to reduce unnecessary
  database queries through better use of `select_related` and `prefetch_related`.
- **Additional database indexes**: Added missing indexes on several models (Publisher, Series,
  Team, Universe) and their related issue querysets, which should speed up common lookups. ([jyggen](https://github.com/jyggen))
- **Fixed paginated Series queryset warning**: Added explicit `order_by()` to `SeriesViewSet` and the
  publisher series-list action to resolve a `UnorderedObjectListWarning` that could surface during
  pagination.

### API Enhancements

- **Conditional request support**: The API now supports HTTP conditional requests using `ETag`
  and `Last-Modified` headers. Clients can send `If-None-Match` or `If-Modified-Since` headers to
  avoid re-downloading unchanged data, saving bandwidth. ([jyggen](https://github.com/jyggen))
- **Read dates in collection API**: The collection list endpoint now includes `read_dates` data,
  giving API consumers access to reading history information directly from the list view.

### Collection & Reading History

- **Reading history charts**: The Collection Statistics page now includes daily (last 30 days)
  and monthly (last 12 months) column charts showing reading activity over time. Days with no reading
  activity are included in the daily chart.
- **Refined badge display logic**: The read-count badge is now only shown when an issue has been read
  multiple times on the same calendar day, avoiding misleading counts from reads on different days.

### User Interface Fixes

- **ESC key closes cover modal**: On issue detail pages, pressing the Escape key now closes the
  cover image modal, matching standard UX conventions.
- **Variant formset display tweaks**: Minor layout improvements to the variant issue formset to better
  display its fields.
- **User template improvements for editors**: The user profile template now shows additional
  information for editors.
- **Series form validation fix**: Handled a case where a missing series type would cause an unhandled
  error during form validation.

### Other

- **Django 5.2.11** (#454): Updated to the latest Django 5.2 patch release.
