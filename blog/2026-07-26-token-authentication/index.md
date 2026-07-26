---
slug: token-authentication
title: Introducing Token-Based API Authentication
date: 2026-07-26T15:00
authors: [ bpepple ]
tags: [ metron, api, authentication ]
---

Up to now, the only way to authenticate against the Metron API was HTTP Basic Auth with your account username and password — meaning every script or third-party tool you connected got a copy of your actual login credentials. Today that changes: **you can now generate revocable API tokens** and use them instead, without giving up Basic Auth.

<!-- truncate -->

## What's New

Your account page has a new **API Tokens** section where you can generate one or more tokens, each with an optional label (e.g. "Mokkari script" or "phone app"). Once generated, use it like this:

```bash
curl -X GET https://metron.cloud/api/issue/ \
  -H "Authorization: Bearer <your-token>"
```

A few things worth knowing:

- **Tokens don't expire by default.** These are meant for long-lived integrations, not browser sessions — you revoke a token manually when you're done with it rather than it silently expiring.
- **You can create as many as you want.** Give each application its own token, and if one gets compromised or you retire an integration, revoke just that one without touching the others or changing your password.
- **The raw token is shown exactly once**, right after you generate it. Metron only ever stores a hash of it, so copy it somewhere safe immediately — there's no way to retrieve it again later (you'd need to revoke it and generate a new one).

## Nothing Is Being Removed — Yet

Today, this is purely additive. Basic Auth and Session Auth both continue to work exactly as before — token auth is just a third option, appended alongside them. If you don't want to deal with tokens right now, you don't have to do anything.

That said, you should start planning to migrate. This is Phase 0 of a longer-term plan to retire Basic Auth entirely:

| Phase | What happens |
| --- | --- |
| **0 — Build & ship (we are here)** | Token auth available alongside Basic/Session; nothing removed |
| **1 — Encourage migration** (~6 months) | Basic Auth stays fully functional, but we'll start surfacing deprecation notices and sending reminder emails to accounts still using it |
| **2 — Sunset warning window** (final ~6-8 weeks) | Stronger deprecation headers, Basic Auth throttled more aggressively, final notices before the cutoff |
| **3 — Cutover** | Basic Auth is removed from the API entirely — Token and Session auth only |

The end state is a hard cutover, not a permanently-throttled fallback: once Phase 3 lands, Basic Auth stops working. We're not locking in exact calendar dates yet — Phase 3 in particular is gated on [Mokkari](https://github.com/Metron-Project/mokkari) and [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) shipping releases with token support first, so the community's primary tools aren't broken on day one. Tracking issues for both are being opened now. We'll announce firm dates, and give plenty of notice, once Phase 1 begins.

In the meantime: a token is the better choice for anything other than quick interactive use, since it's scoped to being a credential rather than your actual password, and it's independently revocable. Migrating sooner rather than later means you won't be scrambling later in the year.

## Checking Your Status: `GET /api/whoami/`

We also added a small endpoint for sanity-checking who you're authenticated as and how your token is doing, without spending a request against a real data endpoint:

```bash
curl -X GET https://metron.cloud/api/whoami/ \
  -H "Authorization: Bearer <your-token>"
```

```json
{
  "username": "your-username",
  "token_expiry": null,
  "rate_limit": {
    "limit": 5000,
    "used": 12,
    "remaining": 4988,
    "percent_used": 0.2
  }
}
```

`token_expiry` is `null` if you authenticated with Basic or Session auth, or if your token simply has no expiration set (the default).

In practice, you probably don't need this endpoint. A regular request already tells you whether your token is valid (a `401` means it isn't) and includes the same rate-limit numbers in its `X-RateLimit-*` headers, covered in our [API tips post](/blog/api-best-practices) — `whoami` mainly adds your username to that picture. It's there for the occasional case where you want that confirmation without side effects from a real data request, not as something to poll routinely — and remember it still counts against your rate limit like any other request.

## Getting Started

1. Log in and head to your profile page.
2. Click **API Tokens**.
3. Give it a name (optional, but recommended if you'll have more than one) and hit **Generate Token**.
4. Copy the token immediately — you won't see it again.
5. Swap `Authorization: Basic ...` for `Authorization: Bearer <token>` in your script or app.

Full details, including the `whoami` response shape, are documented in the [API README](https://github.com/Metron-Project/metron/blob/main/api/README.md).

## Thanks

Thanks as always for using Metron — if you run into any issues with token auth or have feedback, [e-mail me](mailto:bpepple@metron.cloud) or find me on [Matrix](https://matrix.to/#/#metron-general:matrix.org).
