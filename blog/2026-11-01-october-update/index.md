---
slug: october-2026-update
title: October 2026 Updates
authors: [bpepple]
tags: [api, features, security, bugfix, opencollective]
date: 2026-11-01
---
October brought a round of security hardening for accounts and reading lists, stricter email checks at signup, fixes for two more causes of stale API cache entries, UPC validation for issues and variants, a new flag for issue descriptions taken from publisher solicitations, attribution data in the API, and a check that catches Open Collective donations that can't be matched to supporters. Mokkari 4.9.0 adds a Redis-backed rate limiter, so several programs using the same Metron account can share one rate limit, Mokkari 5.0.0 reworks caching and drops username and password authentication, and Darkseid 9.0.0 makes reading and writing untrusted or damaged comic archives safer. Here's the full rundown.

<!-- truncate -->

## Monthly Statistics

<!-- TODO: fill in from production at end of month -->

During October the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**
- Reading Lists: **TODO**

## Security Hardening

**Changing your email now requires your password and a confirmation.** Before, the email address on the profile form could be changed without a password, and the change took effect immediately. Anyone with access to a logged-in session could swap in their own address and then use password reset to take over the account. Changing your email now requires your current password, and the new address only takes effect after you open a confirmation link sent to it. The link expires after 3 days and works only once. Your old address also gets a notice about the change. The new address goes through the same checks as signup, so disposable addresses and addresses already in use are rejected.

**Deleting your account now requires your password.**

**Failed logins are rate-limited.** Failed logins on the site, the admin, and the browsable API returned a normal 200 page, so fail2ban never saw them and there was no limit on password guesses. Failed attempts are now counted per username and IP address (5 in 15 minutes) and per IP address (20 in 15 minutes). A username is never locked on its own, so nobody can lock you out of your account from somewhere else. The same limits apply to the password checks for changing your email and deleting your account, and to API Basic auth.

**Private reading lists stay private.** The previous/next reading-order fields on the reading list form searched every reading list on the site, so any logged-in user could see the names of other users' private lists. Linking a list could also change the reverse link on someone else's list. You can now only link lists you're able to manage, and the detail page and the API hide previous/next links to lists you can't see. Separately, staff and reading list editors could assign any user's private list to the Metron account, even lists they couldn't otherwise view. That now returns a 404 for other users' private lists.

**Reading list issue order is validated.** The hidden issue order field on the add-issues page was parsed without checks, so a tampered value caused a 500 error, and a very long value ran several queries per entry. The value is now validated and capped at 5,000 entries, and the reorder is applied with a few bulk queries instead of one or more per issue.

**Other fixes.** Activation and email-change links now use `https` instead of a hard-coded `http://`. The activation URL pattern was also fixed, since it put percent-encoded pattern text into activation links. Links sent before this change still work until they expire. nginx now always sets `X-Forwarded-Host` itself instead of passing along whatever the client sent. The email address in the email-domain check is now URL-encoded, since a valid address can contain characters like `&` or `#`.

## Signup Reliability

**Mail server stalls no longer cause a 500.** Sending the activation email had no timeout, so a stalled mail server tied up a server worker until it was killed, and the signup ended in a 500 error. Sending now times out after 10 seconds. If the email can't be sent, the half-created account is removed and you're asked to try again later. The failed attempt doesn't count against the signup limit for your IP address.

**hCaptcha outages are reported.** The hCaptcha check had no timeout either, and network errors also became a 500 error. It now times out after 10 seconds. If hCaptcha can't be reached, signup shows a "try again" error instead of the usual "activation email sent" page, so you aren't left waiting for an email that's never coming. The email check described below has a shorter 3-second timeout.

**Stricter email checks.** The email check at signup used a third-party service through RapidAPI. It now uses [UserCheck](https://www.usercheck.com/) directly, along with the community-maintained [disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains) list. Addresses are rejected if their domain is disposable, known for spam, an email forwarding service, or has no mail server. Subdomains of a blocked domain are blocked too, and domain matching now ignores case, so `Duck.com` no longer gets past the block on `duck.com`. If UserCheck spots a likely typo in your domain, the error suggests the fix ("Did you mean gmail.com?"). Your email is now checked only after the captcha passes, and on the profile page only after your password is confirmed. A failed captcha now shows "Please complete the captcha and try again." instead of going on to the "activation email sent" page.

## API Response Caching

**Publisher and Imprint edits no longer clear unrelated cache entries.** Cached Issue, Series, Imprint, and Universe detail responses were tied to version counters that changed on every Publisher or Imprint save. Any edit to a publisher's description or logo therefore invalidated every cached detail response on the site. In production, about 65% of cached issue detail entries were stale copies waiting for their TTL to run out, which kept Redis memory growing. Those responses only include the publisher's or imprint's ID and name, so they're now invalidated only when the name changes or the publisher or imprint is deleted.

**Stale responses cached during a save.** Cache versions were bumped as soon as an object was saved, before the database transaction committed. An API request in that short window could still read the old data and cache it under the new version, and that stale response then stayed until its TTL expired, up to 3 days for detail responses. The bump now waits until the transaction commits.

## UPC Validation

Until now, the only UPC check was a digits-only test on the issue form. UPCs added through the API or the admin, and all variant UPCs, weren't checked at all. UPCs on issues and variants are now validated everywhere: on the site, in the admin, and in the API.

- **Length** - A UPC must be a 12-digit UPC-A or 13-digit EAN-13 code, optionally followed by a 2 or 5 digit add-on. It must contain only digits, with no spaces or hyphens.
- **Check digit** - The last digit of the UPC-A or EAN-13 code must be a valid check digit. The add-on has no check digit, so it isn't checked.
- **Pre-1993 barcodes** - Comics from before 1993 often carry a 13-digit barcode printed without a check digit: an 11-digit UPC-A body followed by a 2-digit cover month. For issues with a cover date before 1993, 13-digit UPCs skip the check digit test.

Since the check depends on the cover date, the API also re-checks an issue's variant UPCs when an update changes its cover date. Moving a pre-1993 issue with legacy variant UPCs to 1993 or later is rejected instead of leaving those UPCs invalid.

Existing UPCs were cleaned up right after the update went live. A new command found the invalid UPCs already in the database and repaired common data entry mistakes that could be confirmed against cover images, such as a dropped leading `0` on legacy codes, Marvel UPCs missing the leading `7` and check digit, and UPCs missing only their check digit. Anything else that was invalid was cleared, and the old value is kept in the issue's history.

The command found 1,963 invalid UPCs: 1,897 on issues and 66 on variants. Most of them (1,640) had a bad check digit, 297 were the wrong length, and 26 contained something other than digits. Of those, 1,564 were repaired and the remaining 399 were cleared. If you know the correct UPC for an issue that's now missing one, please add it.

## Solicitation Descriptions

Many issue descriptions are copied from the publisher's solicitation, but nothing recorded that, so there was no way to tell solicitation text apart from a description an editor wrote. The issue form now has a **Description is a solicitation** checkbox under the description. When it's checked, a "Solicitation" tag shows next to the summary on the issue page. The issue list's advanced filters also have a new Description group for finding issues with or without solicitation descriptions.

The flag belongs to the description it was set on, so editing the description unchecks the box. If the new text is still the solicitation (for example, the publisher sent an updated one), check it again before saving. Changes that only affect line endings or leading and trailing spaces don't count as an edit.

In the API, issue detail responses include a new `desc_is_solicitation` field, and `/api/issue/` takes a `desc_is_solicitation` filter. Editors can set it when creating or updating an issue. As on the site, an update that changes `desc` without also sending `desc_is_solicitation` resets the flag to `false`.

## Open Collective Donor Matching

Metron matches Open Collective contributions to accounts by email address to apply the [supporter rate limit](/blog/supporter-rate-limits). If the Open Collective API token is missing the `email` permission, Open Collective returns no email for any donor and gives no error, so the sync quietly matched nothing. The sync now sends me an alert when none of a run's new individual contributions include an email. Contributions from collectives and organizations never include an email, so they're left out of that check. This isn't the same as the [Incognito problem](/blog/september-2026-update#dont-contribute-as-incognito) from last month, which affects one contribution at a time.

## When to Add an Attribution

Many recent edits add an attribution to entries that don't need one. An attribution credits a source whose text you copied, so it only applies when you copy that text.

**Add an attribution** when you copy or closely paraphrase text from Wikipedia or the Grand Comics Database. This is usually a description, an issue summary, or a character or creator bio. Wikipedia and the GCD release their text under CC BY-SA, which requires credit, and Metron's attribution box adds the required notice and link for you. Link the page you actually copied from.

**Don't add an attribution** for plain facts, even if you looked them up on one of those sites. Facts aren't covered by copyright, so there's nothing to credit. That includes:

- Issue numbers, titles, and story titles
- Cover dates, store dates, and FOC dates
- Prices, UPCs, ISBNs, and page counts
- Creator credits, characters, teams, and story arcs
- Series details like publisher, imprint, volume, and years

If you write a summary in your own words, it doesn't need an attribution either, and that's the best option anyway. When an entry has only facts, leave the attribution rows empty.

### Attribution in the API

Attributions were only shown on the site, so API users who reused a description had no way to know where it came from or whether its license required credit. Detail responses for arcs, characters, creators, imprints, issues, publishers, series, teams, and universes now include a read-only `attribution` list. List responses are unchanged.

```json
"attribution": [
  {"source": "Wikipedia", "url": "https://en.wikipedia.org/wiki/Spider-Man"},
  {"source": "Marvel", "url": "https://www.marvel.com/characters/spider-man-peter-parker"}
]
```

`source` is one of `Wikipedia`, `Marvel`, `DC`, or `Grand Comics Database`, and the list is empty when there's nothing to credit. If you reuse a description from the API, please credit the sources listed, since Wikipedia's CC BY-SA license requires it. Adding, editing, or removing an attribution also updates the parent's `modified` date and clears its cached detail response, so the change shows up right away.

## Bug Fixes

**Variant order.** Variants were sorted only by issue, so variants of the same issue came back in no particular order. They're now sorted by name too. A redundant database index on variants was also dropped.

**Lost credits and variants on new issues.** When adding a new issue, an error in the credits, variants, or attribution rows was skipped silently. The issue was created, but those rows were dropped without any error. The form now shows the errors and saves nothing until they're fixed. A notice at the top of the form also says the issue wasn't saved and links to each section with errors, since those sections are near the bottom of the page and the reload otherwise looked like nothing happened.

## Tooling Releases

### Mokkari 5.0.0

- **4.9.0** - Adds `RedisRateLimiter`, which paces requests the same way as 4.8.0's [`HeaderPacedRateLimiter`](/blog/september-2026-update#mokkari-480) but keeps its state in Redis. Every process and machine using the same Metron account then shares one burst window, one daily limit estimate, and one 429 backoff, instead of each process tracking its own limit and together going over Metron's. Redis support is an optional `redis` extra, and you pass in your own Redis client. When Metron reports the burst window is used up, every process on the account waits until it resets. Errors raised inside a rate limiter's own code are no longer misreported as a missing method, and a failing `release()` or `on_rate_limited()` hook no longer hides the request's actual result. Also drops Python 3.10, which has reached end of life, and adds Python 3.15.
- **4.10.0** - Warns about everything 5.0 removes, so you can update your code before upgrading. Username and password authentication, importing `RateLimitStatus`, `RateLimitWindow`, or `format_time` from `mokkari.session`, `SqliteCache(expire=...)`, and custom caches whose `store()` can't take `resource` and `kind` keywords now raise a `DeprecationWarning`. Also fixes a bug where a `metron.cloud` entry in your `~/.netrc` replaced the API token, so requests were sent with those username and password credentials instead. The 4.x line gets bug and security fixes until spring 2027.
- **5.0.0** - A major release that reworks caching and makes API tokens the only way to log in.
  - **Breaking changes:**
    - Username and password authentication is removed. `api_token` is now the first argument of `api()` and `Session`, and it's required. All other arguments are keyword-only, so code that passed `cache` by position needs to pass it by keyword. You can create a token from your Metron account page.
    - `RateLimitStatus` and `RateLimitWindow` must be imported from `mokkari.rate_limit`, and `format_time` from `mokkari.utils`. These paths already work in 4.x.
    - The string enums (`BookFormat`, `GradingCompany`, `AttributionSource`, `ListType`, and `Currency`) are now `StrEnum`s, so `str(BookFormat.PRINT)` returns `"PRINT"` instead of `"BookFormat.PRINT"`. Comparing them to strings and JSON output are unchanged.
    - `import mokkari` no longer imports `mokkari.sqlite_cache`, so import `SqliteCache` from there directly. `SqliteCache.con` is removed.
  - **Reworked `SqliteCache`** - The old cache, in general, was pretty horrible. It let duplicate rows build up, returned entries after they expired, measured expiry in whole days, and kept every resource for the same length of time. It now takes a `default_ttl` (7 days) and a `ttl` map that sets how long each resource is kept, such as 6 hours for issue lists and forever for roles. Per-user data (collections, pull lists, and wish lists) and searches with no results aren't cached unless you opt in. Expired entries are never returned, and one cache file can be shared safely between processes, threads, and API tokens. An existing 4.x cache is emptied the first time 5.0 opens it, so your first requests after upgrading go to Metron. See the [release notes](https://github.com/Metron-Project/mokkari/releases/tag/v5.0.0) for an example.
  - **Smarter cache invalidation** - A write now removes only the cached entries it could have changed. Before, a one-field PATCH like linking a character's Comic Vine ID cleared every cached character, so the cache did almost nothing for our editors. Custom caches implement the new `Cache` protocol, and `Session` checks a custom cache's methods when it's created instead of failing on the first request.
  - **Quieter cache errors** - A locked cache file shared between processes used to log an error with a full traceback on every failed lookup. It now logs a one-line warning and fetches from Metron, with the traceback only at debug level.
  - **New API fields** - Detail responses include the new `attribution` list, and issues include `desc_is_solicitation`, which can also be set when creating or updating an issue. Wish list currencies add `EUR` and `ITL`.

### Darkseid 9.0.0

- **9.0.0** - A major release focused on handling untrusted or damaged comic archives safely. **Breaking changes:** drops Python 3.10, which has reached end of life, and adds Python 3.15. Custom `Archiver` subclasses must now accept a `max_size` argument in `read_file()`. Metadata that declares XML entities, even internal ones, no longer validates.
  - **Decompression bomb limits** - A small crafted archive could expand a single file to gigabytes in memory. A 1 MB `.cbz` with a 1 GB `ComicInfo.xml` pushed peak memory to 3.1 GB. Archivers now check a file's uncompressed size before reading it, capped at 256 MiB by default (10 MiB for `ComicInfo.xml` and `MetronInfo.xml`), and raise the new `ArchiverFileTooLargeError` when it's over.
  - **Safe tar and 7z rewrites** - Writing to a `.cbt` or `.cb7` emptied the original file and wrote the new contents over it, so a crash or full disk partway through destroyed the archive. Worse, if the existing archive couldn't be read, the write silently started a new archive holding only the file being written, so a corrupt archive lost every page and the call still reported success. Rewrites now go to a temporary file that replaces the original only once it's complete, and an unreadable archive raises an error instead. Tar rewrites also stream pages instead of loading the whole archive into memory.
  - **Safe archive exports** - Exporting a hostile CBR with `Comic.export_as_zip()` copied file names like `../evil.jpg` into the new CBZ unchanged, which simpler extractors could write outside their target folder. Absolute paths and names containing `..` are now skipped with a warning.
  - **Hardened schema validation** - Metadata is now always parsed with entity declarations forbidden during schema validation, matching the `ComicInfo.xml` and `MetronInfo.xml` parsers. Invalid XML is reported as `Invalid XML: ...` instead of logging a traceback.
  - **JPEG-XL support** - `.jxl` files are now recognized as comic pages. Pillow can't decode JPEG-XL, so their width and height aren't recorded in `ComicInfo.xml` page info, but their file size is.
  - Also fixes `validate_metadata()` raising `AttributeError` instead of returning `UNKNOWN`, and missing files in CBR archives raising `rarfile.NoRarEntry` instead of `ArchiverReadError`.

### Metron-Tagger 4.17.1

- **4.17.0** - Updates to Mokkari 4.9.0. Set `redis_url` in the `[metron]` section of `settings.ini` and install the `redis` extra (`metron-tagger[redis]`) to share your rate limit with other Mokkari-based programs through Redis. Without Redis, requests are paced by `HeaderPacedRateLimiter`, which spreads them evenly across the burst window instead of sending them back-to-back until it fills, with no change in total time. Drops Python 3.10 and adds Python 3.15.
- **4.17.1** - Keys the shared Redis rate limit by your Metron username instead of your API token. Since each app should have its own token, keying by token meant apps on the same account never shared a limit. **If you already switched to token authentication, add `user` back to the `[metron]` section of `settings.ini` to use the Redis limiter.**

[Barda](https://codeberg.org/Metron-Project/barda) and [Desaad](https://codeberg.org/bpepple/desaad) were also updated to Mokkari 4.9.0 and key their shared rate limit the same way. That lets them all share one limit with Metron-Tagger when they use the same account and Redis server. Barda also now requires an API token, dropping username and password authentication.

If you maintain your own Mokkari-based program and want it to share a limit with these tools, create `RedisRateLimiter(client, username)` with the default key prefix, and use the Metron username exactly as written.

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
