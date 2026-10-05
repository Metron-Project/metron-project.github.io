---
slug: october-2026-update
title: October 2026 Updates
authors: [bpepple]
tags: [api, security, bugfix, opencollective]
date: 2026-11-01
---
October brought a round of security hardening for accounts and reading lists, fixes for two more causes of stale API cache entries, and a check that catches Open Collective donations that can't be matched to supporters. Mokkari 4.9.0 adds a Redis-backed rate limiter, so several programs using the same Metron account can share one rate limit. Here's the full rundown.

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

**hCaptcha outages are reported.** The hCaptcha check had no timeout either, and network errors also became a 500 error. It now times out after 10 seconds. If hCaptcha can't be reached, signup shows a "try again" error instead of the usual "activation email sent" page, so you aren't left waiting for an email that's never coming. The email-domain check got the same 10-second timeout.

## API Response Caching

**Publisher and Imprint edits no longer clear unrelated cache entries.** Cached Issue, Series, Imprint, and Universe detail responses were tied to version counters that changed on every Publisher or Imprint save. Any edit to a publisher's description or logo therefore invalidated every cached detail response on the site. In production, about 65% of cached issue detail entries were stale copies waiting for their TTL to run out, which kept Redis memory growing. Those responses only include the publisher's or imprint's ID and name, so they're now invalidated only when the name changes or the publisher or imprint is deleted.

**Stale responses cached during a save.** Cache versions were bumped as soon as an object was saved, before the database transaction committed. An API request in that short window could still read the old data and cache it under the new version, and that stale response then stayed until its TTL expired, up to 3 days for detail responses. The bump now waits until the transaction commits.

## Open Collective Donor Matching

Metron matches Open Collective contributions to accounts by email address to apply the [supporter rate limit](/blog/supporter-rate-limits). If the Open Collective API token is missing the `email` permission, Open Collective returns no email for any donor and gives no error, so the sync quietly matched nothing. The sync now sends me an alert when none of a run's new individual contributions include an email. Contributions from collectives and organizations never include an email, so they're left out of that check. This isn't the same as the [Incognito problem](/blog/september-2026-update#dont-contribute-as-incognito) from last month, which affects one contribution at a time.

## Bug Fixes

**Variant order.** Variants were sorted only by issue, so variants of the same issue came back in no particular order. They're now sorted by name too. A redundant database index on variants was also dropped.

## Tooling Releases

### Mokkari 4.9.0

- **4.9.0** - Adds `RedisRateLimiter`, which paces requests the same way as 4.8.0's [`HeaderPacedRateLimiter`](/blog/september-2026-update#mokkari-480) but keeps its state in Redis. Every process and machine using the same Metron account then shares one burst window, one daily limit estimate, and one 429 backoff, instead of each process tracking its own limit and together going over Metron's. Redis support is an optional `redis` extra, and you pass in your own Redis client. When Metron reports the burst window is used up, every process on the account waits until it resets. Errors raised inside a rate limiter's own code are no longer misreported as a missing method, and a failing `release()` or `on_rate_limited()` hook no longer hides the request's actual result. Also drops Python 3.10, which has reached end of life, and adds Python 3.15.

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
