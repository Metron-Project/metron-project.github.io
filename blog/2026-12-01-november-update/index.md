---
slug: november-2026-update
title: November 2026 Updates
authors: [bpepple]
tags: [api, features, security, opencollective]
date: 2026-12-01
---
November started with a new autocomplete widget across the site, built on a new library called Izaya, along with better search results for series, creators, and accented names. Issue UPC and SKU searches now find variant covers too. Here's the full rundown.

<!-- truncate -->

## Monthly Statistics

<!-- TODO: fill in from production at end of month -->

During November the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**
- Reading Lists: **TODO**

## New Autocomplete Widget

Every autocomplete field on the site, from issue credits to pull lists and reading lists, now uses [Izaya](https://github.com/Metron-Project/izaya), a new htmx-powered autocomplete library for Django that replaces django-htmx-autocomplete. Izaya is a separate project, so other Django sites can use it too. It ships no required styles, so it works with any CSS framework.

For editors, the widget should look and work much like before, with a few improvements:

- **Ranked results** - The closest matches by name come first, so a short search no longer loses the best match past the result limit.
- **Selected items are chips** - Each selection has its own remove button. On reading lists, this replaces the separate "Clear selection" button.
- **Expired sessions** - Searches now require a login. If your session has expired, the results show a message instead of staying empty.

### Easier-to-Tell-Apart Results

Series, universe, and imprint names often repeat across publishers, such as the many "Batman" series or the various Earth 2 universes. Their results now include more detail:

- Series: `Batman · v3 · DC Comics`
- Universes: `Earth 2 · DC Comics`
- Imprints: `<imprint> · <publisher>`

### Creator Surname Search

Many editors search for a creator by typing a space and then the surname, like ` Cameron`. The old widget kept that space, so the search skipped first names. Izaya stripped it, so ` Cameron` matched "Cameron Stewart" and even ranked first names above surnames. A leading space now searches only for names and aliases where the text comes after a space, with names that end in it listed first. Searches without a leading space are unchanged.

### Accents Ignored

Searches now ignore accents in what you type as well as in the names being searched, so `Pena` and `Peña` both find "Ana Peña" in every lookup. Issue searches without a `#` also ignore accents in series names, so `Spíder` finds Spider-Man issues.

## UPC and SKU Searches Include Variants

Searching issues by an exact UPC or SKU only checked the main cover, so a barcode scanned from a variant cover found nothing. Exact UPC and SKU searches on the site and in the API now also match variant covers and return the parent issue, without listing it twice. UPC prefix searches still check only the main cover.

Thanks to [Eric Kolb](https://github.com/erickolb) for this contribution!

## Tooling Releases

<!-- TODO: Mokkari, Darkseid, Metron-Tagger, Barda, Desaad releases this month -->

### Izaya 0.4.0

- **0.1.0** - First release.
- **0.1.1** - Fixes the white dropdown in dark mode.
- **0.2.0** - Adds `rank_fields`, so the closest matches aren't lost past `max_results`, and fixes the placeholder showing next to a single-value widget's selection.
- **0.3.0** - Adds `IZAYA_LOGIN_REQUIRED` to require a login for all lookup searches.
- **0.4.0** - Adds a `clean_query()` hook to `Lookup`, an example project, and [documentation](https://izaya.readthedocs.io/). CI now also tests against MySQL and MariaDB.

## OpenCollective

A huge thank you to everyone who has contributed to our [Open Collective](https://opencollective.com/metron)! Your support makes a real difference in keeping the Metron Project running and growing.

### What Your Contributions Support

Funds from Open Collective go directly toward:

- **Server hosting costs** - Keeping the Metron website and API available
- **Domain registration** - Annual domain name renewals
- **Future capacity increases** - Scaling resources as the database and user base grows

All expenses are transparent and publicly viewable on our [Open Collective page](https://opencollective.com/metron), so you can see exactly where every dollar goes.

### Support the Project

As covered in our [supporter rate limits post](/blog/supporter-rate-limits), donors now automatically get an elevated daily API rate limit. Any contribution, at any tier, genuinely helps keep Metron free for the whole community. If you're using Metron commercially, see our [commercial use post](/blog/commercial-api-use) as well.

---

Thanks to everyone who contributed issues, pull requests, and feedback this month. As always, the project is open source and community contributions are welcome.
