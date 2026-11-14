---
slug: november-2026-update
title: November 2026 Updates
authors: [bpepple]
tags: [api, features, security, opencollective]
date: 2026-12-01
---
November started with a new autocomplete widget across the site, built on a new library called Izaya, along with better search results for series, creators, and accented names. Issue UPC and SKU searches now find variant covers too, and a new API filter finds issues from a photo or scan of their cover. Behind the scenes, Metron moved to PostgreSQL 18 and Python 3.15. Mokkari 5.1.0 and Metron-Tagger 5.2.0 were also released. Here's the full rundown.

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

## Find Issues by Cover Image

Every issue in Metron has a `cover_hash`, a perceptual hash of its main cover. Until now you could only search for an exact hash, but two images of the same cover almost never hash exactly the same. A scan, a photo, or a digital edition's cover will usually be a few bits off.

The issue API has a new `cover_hash_near` filter that returns issues whose main cover hash is close to the one you send, with the closest matches first:

```
GET /api/issue/?cover_hash_near=c585eb18bf1e5423
```

`cover_hash_max_distance` sets how many bits apart a match can be. It defaults to 10 and goes up to 20. In testing with digital comic files, 98.8% of covers were within 8 bits of the correct issue, and at the default of 10 the correct issue was the only result 94.5% of the time. Camera photos are noisier, so if the default finds nothing, try again with a larger distance. `cover_hash_near` works alongside the other issue filters, so you can narrow results by series, date, and so on.

To get a compatible hash, use `imagehash.phash()` from the [ImageHash](https://github.com/JohannesBuchner/imagehash) library. Some digital comics use a wraparound spread as the cover, with the back cover on the left and the front on the right. Most of the time Metron stores only the front cover, so hash each half of a landscape cover separately and search with both. The [API documentation](https://github.com/Metron-Project/metron/blob/master/api/README.md) has an example of this, along with the rest of the details.

A big thank you to [Eric Kolb](https://github.com/erickolb), who drove this feature forward and provided much of the testing data behind these defaults.

## Behind the Scenes

- **PostgreSQL 18** - The database was upgraded from PostgreSQL 16 to 18. [DEPLOYMENT.md](https://github.com/Metron-Project/metron/blob/master/DEPLOYMENT.md) now documents both minor and major PostgreSQL upgrades.
- **Python 3.15** - Metron now runs on Python 3.15.

## Tooling Releases

### Mokkari 5.1.0

- **5.1.0** - Fixes `HeaderPacedRateLimiter` getting about one 429 response per burst window under steady load. Metron times a request from when it arrives, not when it was sent, so `HeaderPacedRateLimiter` and `RedisRateLimiter` now hold each request for 2 extra seconds beyond Metron's 60-second burst window. A 20-per-minute limit is now paced at about 19.4 requests per minute. The new `slack` argument changes the extra time. `HeaderPacedRateLimiter` also now waits for the burst window to reset when a response shows it's used up, as `RedisRateLimiter` already did. An invalid `burst_period` or `slack` now raises `ValueError`. Before, `burst_period=0` quietly turned off burst pacing. Also fixes `RedisRateLimiter` processes with different burst windows removing requests another process on the same account was still holding.

### Metron-Tagger 5.2.0

- **5.1.0** - Matches wraparound covers. When a comic's cover is a two-page spread, Metron-Tagger now also hashes its front and back halves and compares them against Metron's single cover. The back half handles right-to-left books such as manga. Half covers need a closer match (6 bits instead of 10), so a back cover can't match the wrong issue without asking you first.
- **5.2.0** - Adds an optional `jxl` extra (`metron-tagger[jxl]`) for comics with JPEG XL pages. Without it, those comics couldn't be cover-matched or checked for duplicate pages. JPEG XL pages are always decoded at full size, so the duplicate page scan is slower for them. Use `--quick-duplicates` if that's a problem.

[Desaad](https://codeberg.org/bpepple/desaad) also gained JPEG XL support. Its page counts now include `.jxl` pages, and they can be opened in the reader.

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
