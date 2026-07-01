---
slug: june-2026-update
title: June 2026 Updates
authors: [bpepple]
tags: [release, ui, features, bugfix, opencollective]
date: 2026-06-29
---

June was a busy month for Metron. We shipped a major site UI refresh, a round of reading list improvements, several usability wins across issue and series pages, a new timeline page, account deletion support, and a handful of bug fixes — plus some news from third-party developers building on the Metron API. Here's a rundown of everything that landed.

<!-- truncate -->

## Monthly Statistics

During June the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **221**
- Issues: **1,123**
- Creators: **122**
- Characters: **386**
- Reading Lists: **40**

Thanks to everyone that contributed!

## Site UI Refresh

The biggest change this month is a comprehensive redesign of the site's look and feel.

**New home page.** The home page went through two iterations this month. First, we replaced the old colored card layout with a cleaner card grid, featuring sections for the REST API, Collections, Reading Lists, Wish List, Pull List, and Quick Scrobble. The hero section also received a diagonal clip-path accent and updated CTA buttons. Later in the month we added pull list and wish list information to the home page so returning users can jump straight to their tracked content.

**Navbar reorganization.** Authenticated-only links (My Collection, My Pull List, My Wish List, My Reading Lists) have been moved out of the Browse dropdown into a dedicated **My Library** menu that only appears when you're logged in, reducing clutter for non-authenticated visitors.

**Actions dropdown on detail pages.** Edit, History, and Delete actions across all detail pages (issue, series, arc, character, creator, imprint, publisher, team, universe) are now grouped into a single **Actions** dropdown. Delete is separated by a divider and only shown to users with delete permissions, keeping the page cleaner for read-only visitors.

**HTMX-powered wish list and pull list toggles.** Issue detail pages now have a wish list toggle button, and series detail pages have a pull list toggle button — both powered by [HTMX](https://htmx.org/) so the page doesn't reload when you add or remove items.

**Project timeline page.** A new timeline page documents Metron's project history with milestone entries, user stats, and issue count markers over time.

## Reading List Improvements

Reading lists received significant attention this month, landing two PRs worth of improvements.

**New card design.** Reading list cards on the browse and user list pages were redesigned with a richer layout: a cover image band, list type badge, year span, attribution source, rating, and issue count — all at a glance.

**Richer detail pages.** The reading list detail page now shows a **Featured Creators** section and a **Featured Characters** section. List items were also rewritten to use a consistent flex layout with cover thumbnail, order number, and issue-type badge.

**Active-filter chips.** The same active-filter chip bar used on the issue and series list pages is now available on the reading list browse page, giving you one-click access to remove individual filters without opening the filter panel.

**Template consolidation.** The separate user reading list template was merged into the shared `readinglist_list.html`, driven by an `is_user_view` context flag. This eliminated roughly 400 lines of duplicated markup.

**New Creator list type.** A new `CREATOR` list type has been added to the `ReadingList` model for reading lists focused on a particular creator's run or body of work. The API documentation has been updated to reflect this new option.

## Issue and Series Page Usability

**Issue list sorting.** The issue list, week list, next-week list, and future list now support sorting by Series A–Z, cover date, or recently added.

**Active-filter chips on issue and series lists.** Both list pages now render removable chips below the search panel showing which filters are active, consistent with the reading list page.

**Sticky form navigation.** The issue form and attribution form both received a sticky action bar that keeps Save/Cancel buttons visible while scrolling long forms, along with section anchor navigation to jump between form sections.

**Role autocomplete.** The multi-select role listbox in the credits formset has been replaced with an autocomplete widget, making it much easier to assign roles to creators on the issue form.

**Issue detail improvements.** Breadcrumb navigation and a subtitle were added to the issue detail page. Copy-to-clipboard buttons now appear next to Metron, Comic Vine, and GCD IDs.

## Developer Experience

**Developer setup documentation.** A new `DEVELOPMENT.md` file covers how to run PostgreSQL and Redis locally using Podman, set up the database, and get a development server running. The `.env.example` file was also expanded with comments and grouped sections for each service.

**Django 6.0.6.** The project was updated to Django 6.0.6.

## Bug Fixes

**Store date and FOC date filters fixed.** A long-standing bug where the `store_date` and `foc_date` range filters on the issue list view were silently ignored has been fixed. The filter field names were mismatched with the template's query parameter names, so the filters never applied.

**Reading list item order starting from 0.** Reading list items were displaying their order number starting from 0 instead of 1. This is now fixed.

## User Account Features

**Account deletion.** Users can now permanently delete their own account from their profile page. The flow includes a confirmation page with a warning about irreversible data loss, with proper session teardown on completion.

## Metron-Tagger 4.10.1

[metron-tagger](https://github.com/Metron-Project/metron-tagger) had a minor release.

**Sweet Shop backup support.** This release improves tagging of comic backups (`.pdf`) purchased from [Sweet Shop](https://sweetshop.app/).

This release also bumps the minimum required version of [darkseid](https://github.com/Metron-Project/darkseid) to 8.1.0.

## Apps Using the Metron API

### Comicbox

[Comicbox](https://github.com/ajslater/comicbox) by [AJ Slater](https://github.com/ajslater) is a comic book archive metadata reader and writer that recently added Metron support:

- **Online metadata tagging.** A new `--online` flag enables automated metadata fetching from Metron (and Comic Vine), with matching by series, issue, and year backed by cover-image verification.
- **Confidence-based matching modes.** Users can choose from `ask`, `careful`, `auto`, and `eager` modes to control how aggressively comicbox applies matches.
- **Direct ID tagging.** The `--id` and `--series-id` options allow tagging a file directly against a known Metron record.
- **Credential management.** Metron credentials can be stored via environment variables or the system keyring, with disk-based caching and a configurable TTL to reduce API calls.
- **Sweet Shop filename support.** comicbox now recognizes the kebab-case filename format used by [Sweet Shop](https://sweetshop.app/) comic backups.
- **PDF cover matching.** Online cover matching supports PDFs by rasterizing the cover page before perceptual hashing.

### Metron Comics (iOS)

[Metron Comics](https://apps.apple.com/us/app/metron-comics/id6767698743) is a free, ad-free iPhone and iPad app by [Bryan Deemer](https://www.comicgeekspeak.com/) that brings the Metron database to your iPhone and iPad. It's a great way to browse the Metron database on the go.

<img
  src={require('./metron-ios.webp').default}
  alt="Image of the Metron iOS app"
  style={{maxWidth: '100%', height: 'auto'}}
/>

### List Your Software

If you've built something that uses the Metron API, we'd love to feature it! We maintain a [software wiki page](https://metron.cloud/wiki/software/) where developers can promote their projects to the Metron community.

## OpenCollective

A huge thank you to everyone who has contributed to our [Open Collective](https://opencollective.com/metron)! Your support makes a real difference in keeping the Metron Project running and growing.

### What Your Contributions Support

Funds from Open Collective go directly toward:

- **Server hosting costs** - Keeping the Metron website and API available
- **Domain registration** - Annual domain name renewals
- **Future capacity increases** - Scaling resources as the database and user base grows

All expenses are transparent and publicly viewable on our [Open Collective page](https://opencollective.com/metron), so you can see exactly where every dollar goes.

### Support the Project

We needed to increase our server capabilities this month, so any donations to help maintain our current API rate limits and keep the service free are greatly appreciated. Contributions of any size help ensure Metron remains a free resource for the comic book community.

---

Thanks to everyone who contributed issues, pull requests, and feedback this month. As always, the project is open source and community contributions are welcome.
