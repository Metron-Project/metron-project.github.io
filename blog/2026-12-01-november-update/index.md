---
slug: november-2026-update
title: November 2026 Updates
authors: [bpepple]
tags: [api, features, security, bugfix, opencollective]
date: 2026-12-01
---
November started with a new autocomplete widget across the site, built on a new library called Izaya, along with better search results for series, creators, and accented names. Image uploads got a new drag-and-drop widget too, built on another new library called Heggra. Issue UPC and SKU searches now find variant covers too, and a new API filter finds issues from a photo or scan of their cover, which Metron-Tagger now uses to identify comics. Behind the scenes, Metron moved to PostgreSQL 18 and Python 3.15 and got several server hardening fixes. Mokkari 5.2.0, Metron-Tagger 5.4.0, and Darkseid 10.0.0 were also released. Here's the full rundown.

<!-- truncate -->

## Monthly Statistics

<!-- TODO: fill in from production at end of month -->

During November the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**
- Reading Lists: **TODO**

## API Write Access for Applications

We've had a lot of requests lately from developers who want write access to the API (POST and PATCH requests) for software they've written. Unfortunately, the answer is no, and that's unlikely to change.

Metron is a community project run by a small group of volunteers, and we don't have the time to review software we didn't write ourselves. We'd have no visibility into an application's sources, how it cleans and verifies its data, or how it avoids duplicates. Even with a manual review step, an integration that creates series and issues in bulk carries a real risk of flooding the database with bad or duplicate data, and cleaning that up is far more work than adding the data carefully in the first place.

This policy applies to everyone, so please don't read it as a judgment on your project or your credentials. We know it makes data entry slower, and we really do appreciate the work everyone puts into adding and improving Metron's data. Read access to the API isn't affected.

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

## New Image Upload Widget

Every image field on the site, from issue covers and creator photos to reading list and profile images, now uses [Heggra](https://github.com/Metron-Project/heggra), a new htmx-powered file upload widget for Django. Like Izaya, it's a separate project that other Django sites can use, and it works with any CSS framework.

- **Drag and drop** - Drop an image onto the field, or pick one as before.
- **Uploads right away** - The image uploads as soon as you choose it, with a progress bar and a preview, so you can check it's the right image before saving the form.
- **5 MB limit** - Images larger than 5 MB are turned away when you choose them, instead of after you submit the form.

Uploaded images are held privately until the form is saved, and ones from forms that are never saved are deleted after a day.

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
- **Firewall ban fix** - Each IP address banned by fail2ban was added to the firewall as its own entry, and those entries piled up across restarts. With about 140 of them, the firewall used a full CPU core and several GB of memory at startup, and after a reboot the site was unreachable until they were removed by hand. Bans now go into a single IP set, which the firewall handles without trouble.
- **HTTP/2 briefly disabled** - HTTP/2 was turned off to mitigate two nginx vulnerabilities (CVE-2026-123007 and CVE-2026-123633) until a fixed nginx image was available. It's been turned back on now that the site runs nginx 1.31.9.
- **Release week fix** - 2026 has 53 ISO weeks, and the "Next Week" page would have pointed at the wrong week at the end of the year. Release weeks are now worked out from dates instead of week numbers. This came out of a larger cleanup of the codebase that split up some very large modules and removed a lot of duplicated code. The API itself is unchanged.
- **Missing cover fallback** - On pull list pages, an issue whose cover image can't be read now shows the image-not-found placeholder instead of an empty space.

## Tooling Releases

### Mokkari 5.2.0

- **5.1.0** - Fixes `HeaderPacedRateLimiter` getting about one 429 response per burst window under steady load. Metron times a request from when it arrives, not when it was sent, so `HeaderPacedRateLimiter` and `RedisRateLimiter` now hold each request for 2 extra seconds beyond Metron's 60-second burst window. A 20-per-minute limit is now paced at about 19.4 requests per minute. The new `slack` argument changes the extra time. `HeaderPacedRateLimiter` also now waits for the burst window to reset when a response shows it's used up, as `RedisRateLimiter` already did. An invalid `burst_period` or `slack` now raises `ValueError`. Before, `burst_period=0` quietly turned off burst pacing. Also fixes `RedisRateLimiter` processes with different burst windows removing requests another process on the same account was still holding.
- **5.2.0** - Adds `Session.issues_by_cover_hash()`, which uses the new [`cover_hash_near` filter](#find-issues-by-cover-image) and returns each match with its distance from your hash, closest first. `hamming_distance()` and `is_cover_hash()` helpers are in `mokkari.utils`. Cover hash searches aren't cached, so they always reflect Metron's current covers. `Session`'s internals were split into smaller modules without changing the public API, though code that patches its private methods may need updating. Also fixes several edge cases:
  - A malformed `X-RateLimit-*` header, or a 429 whose `Retry-After` is a date, no longer raises `ValueError` and throws away a response that already arrived.
  - `HeaderPacedRateLimiter` no longer re-applies an older response's rate limit state when a response has no rate limit headers.
  - `publisher_patch()` no longer resets a publisher's country to `US` when you don't set one.
  - `pull_list()` and `wish_list()` raise `ApiError` instead of `IndexError` when Metron returns an empty list.

### Metron-Tagger 5.4.0

- **5.1.0** - Matches wraparound covers. When a comic's cover is a two-page spread, Metron-Tagger now also hashes its front and back halves and compares them against Metron's single cover. The back half handles right-to-left books such as manga. Half covers need a closer match (6 bits instead of 10), so a back cover can't match the wrong issue without asking you first.
- **5.2.0** - Adds an optional `jxl` extra (`metron-tagger[jxl]`) for comics with JPEG XL pages. Without it, those comics couldn't be cover-matched or checked for duplicate pages. JPEG XL pages are always decoded at full size, so the duplicate page scan is slower for them. Use `--quick-duplicates` if that's a problem.
- **5.3.0** - Identifies comics by their cover first. For a comic without a Metron ID, Metron-Tagger now hashes its cover and searches with [`cover_hash_near`](#find-issues-by-cover-image), narrowed by the issue number and year from the filename. The closest match is accepted automatically when its series name agrees with the filename and it's clearly closer than the next result. Otherwise you choose from the results, closest first. The filename search is still used when the filename has no issue number or year, or nothing matches. In testing on 633 tagged comics, 632 matched automatically, all to the correct issue, compared with 617 using the filename search alone, and the prompts dropped from 15, some with up to 178 choices, to 1.
  - Updates to [Darkseid 10.0.0](#darkseid-1000), which fixes online tagging missing a Metron ID stored only in `ComicInfo.xml`.
  - Options that need `--comicinfo` and/or `--metroninfo` now stop with a usage error before anything runs, instead of partway through a run.
  - `--migrate` no longer stops at the first invalid comic, and duplicate page removal no longer mixes up comics whose paths contain each other, like `a.cbz` and `ba.cbz`.
  - A 401 error now tells you to check your API token, instead of your username and password.
  - Each comic is opened once during online tagging instead of three times, which helps with CBR, CB7, and PDF files.
- **5.4.0** - Searches on the series and title together. A filename like `Star Wars - The Fall of Kylo Ren 004` is split into the series "Star Wars" and the title "The Fall of Kylo Ren", and the filename search only sent the series, so it matched about 180 Star Wars #4 issues instead of *Star Wars: The Fall of Kylo Ren*. Metron-Tagger now tries the series and title together first, and falls back to the series alone if that finds nothing or none of the results' covers match. When you're asked to choose, the series and title results are listed first. Also updates to Mokkari 5.2.0.

### Darkseid 10.0.0

- **10.0.0** - A major release that fixes a batch of bugs, some of which needed small API changes. Most code that only uses `Comic` won't need changes. See the [migration notes](https://github.com/Metron-Project/darkseid/releases/tag/v10.0.0) for the details.
  - **Per-format metadata cache** - Once one metadata format had been read, reading the other format from the same `Comic` returned the first format's data.
  - **Strict reads** - `read_metadata(fmt, strict=True)` raises `ComicMetadataError` when a metadata file exists but can't be read or parsed. Before, broken XML looked the same as an empty file, and writing that result back could replace the archive's real metadata. The default is unchanged.
  - **`write_metadata()` leaves your `Metadata` alone** - It no longer fills in `page_count` and page sizes on the object you pass in. Read the metadata back if you need them.
  - **Missing list fields are empty lists** - Missing genres, characters, credits, and similar fields now read as `[]` instead of `None`.
  - **Other fixes** - `Metadata.overlay()` no longer drops prices and genres. Page lists no longer return pages in the wrong order after an unsorted call. Writing to an archive that only has `comicinfo.xml` now replaces it instead of leaving a stale copy. Page file sizes are recorded even without Pillow. `Comic` no longer catches every exception, so bugs in your code or a custom archiver aren't hidden.

[Desaad](https://codeberg.org/bpepple/desaad) also gained JPEG XL support. Its page counts now include `.jxl` pages, and they can be opened in the reader.

### Izaya 0.4.1

- **0.1.0** - First release.
- **0.1.1** - Fixes the white dropdown in dark mode.
- **0.2.0** - Adds `rank_fields`, so the closest matches aren't lost past `max_results`, and fixes the placeholder showing next to a single-value widget's selection.
- **0.3.0** - Adds `IZAYA_LOGIN_REQUIRED` to require a login for all lookup searches.
- **0.4.0** - Adds a `clean_query()` hook to `Lookup`, an example project, and [documentation](https://izaya.readthedocs.io/). CI now also tests against MySQL and MariaDB.
- **0.4.1** - Adds an Italian translation. A field with `choices` no longer shows labels for submitted values it rejects.

### Heggra 0.1.0

- **0.1.0** - First release of the [upload widget](#new-image-upload-widget), with drag and drop, upload progress, image previews, a clear checkbox for optional fields, and an Italian translation. A `heggra_cleanup` command deletes uploads from forms that were never saved. See the [documentation](https://heggra.readthedocs.io/) for setup and styling.

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
