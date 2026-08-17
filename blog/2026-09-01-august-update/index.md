---
slug: august-2026-update
title: August 2026 Updates
authors: [bpepple]
tags: [release]
date: 2026-09-01
---

TODO: intro summary paragraph.

<!-- truncate -->

## Monthly Statistics

During August the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**
- Reading Lists: **TODO**

## Internationalization

Metron now has the infrastructure to serve the site in languages other than English, with Italian as the pilot translation.

**i18n infrastructure.** `LANGUAGES`/`LOCALE_PATHS` settings, `LocaleMiddleware`, the i18n template context processor, the `set_language` URL, and a cookie-based language switcher in the navbar lay the groundwork for translating the site.

**Pilot slice, then full markup coverage.** User-facing strings in the base template, navbar/footer/messages partials, and the Issue model/form/view were wrapped in `gettext` calls first, to prove the translation pipeline end-to-end (including generating and translating an Italian catalog) before committing to the rest of the app. With that validated, the remaining apps followed in phases — timeline, api, polls, pull_list, wish_list, user_collection, users (including both formats of the account activation e-mail), and reading_lists — wrapping templates, views, forms, and model verbose names/help texts/choices, and converting f-string messages to `%`-style formatting so they stay translatable. Vote counts and other countable strings use proper `{% blocktrans count %}`/`ngettext` pluralization rather than an informal "(s)" suffix. The Italian catalog now covers several hundred additional strings picked up across the rollout. With the whole app now translatable, additional languages beyond Italian will be added as needed — e.g. alongside future international publisher support — rather than as a blanket rollout.

**Build and CI.** GitHub Actions runners and the `python:3.14-slim` base image don't ship GNU gettext by default, which `compilemessages` needs — CI and the Containerfile build now install it before compiling (and remove it again afterward in the image, to keep the runtime slim). The PR template also gained a checklist reminder for contributors to wrap new user-facing strings and run `makemessages -a` before opening a PR.

## Italian Comics Support

Alongside the UI translation work, the data model picked up support for non-English, non-USD comics.

**New fields.** `Publisher.alt_names` tracks alternate publisher names, the same pattern already used for [series alt names](/blog/july-2026-update#alternative-series-names); `Series.language` records a series' language; and `Issue.price`'s `max_digits` was widened to accommodate cover prices in currencies other than USD.

**EUR/ITL currencies and language filtering.** New `EUR`/`ITL` currency choices and a `COUNTRIES` setting support non-USD pricing, and the series list gained language filter chips. `alt_names` and `language` are exposed through the admin, forms, filters, and the Publisher/Series API serializers and templates, with a GIN trigram index on `Publisher.alt_names` so alternate-name search stays fast, and both web and API search now match against `alt_names` alongside `name`.

## API Improvements

**Collection add/remove endpoints.** `POST /api/collection/add/` adds an issue to a user's collection without marking it as read, and `DELETE /api/collection/{id}/` removes an item — closing the gap where PullList and WishList already had add/remove endpoints but Collection did not.

## Rate Limit Monitoring

**No more duplicate notices for the same spike.** The repeat-offender scan added last month only looked at the trailing lookback window with no memory of what had already been reported, so a single throttling spike could trigger a second notice on a later run purely because the window still overlapped the same day. The notifier now tracks each account's most recent notice date and ignores throttling on or before it, so only new activity after the last notice can trigger another one — a prerequisite for eventually moving this to an unattended daily schedule.

**Clearer notice wording.** The throttle notice and enforcement e-mails (HTML and text) previously read oddly for a single extreme day — "over the past several days" / "across 1 day, including X in a single day" — and now word single-day triggers naturally. The per-candidate summary in `notify_throttled_clients` also now shows how many times an account has already been notified, so admins can see escalation history at a glance instead of inferring it from the enforce/warn verb.

## Account Security

**Client IP logged for signup, activation, and API auth.** Signup and account-activation log lines now include the client IP in the same `(user=, ip=)` format already used for API authentication, and API auth logging now includes the client IP too — making it possible to grep logs and correlate a single IP behind multiple usernames, or against Basic Auth deprecation metrics. [DEPLOYMENT.md](https://github.com/Metron-Project/metron/blob/master/DEPLOYMENT.md) documents the `journalctl` commands for that lookup.

## Bug Fixes

**Duplicate read-date calendar widgets.** Unrelated `htmx` swaps on the collection detail page (e.g. rating an issue) re-scanned the whole document and stacked a new calendar widget onto the read-date input each time, since the vendored calendar library's own "already attached" check doesn't work. Re-initialization is now scoped to just the swapped fragment.

**Empty sort dropdown on secondary issue lists.** Only the main issue, week, next-week, and future list views wired up the sort dropdown; every other view that renders the issue list template — series, arc, creator, character, universe, and team pages — left it unset, so the dropdown appeared empty and sorting silently did nothing. All of them now share the same sort helpers.

**Publisher detail page crash on imprints/universes.** The publisher detail page and its HTMX load-more endpoints raised a `TemplateSyntaxError` on any publisher with imprints or universes, since the `{% blocktrans count %}` tags in the template referenced `series_count`/`issue_count` annotations the view's querysets didn't actually provide. A first fix annotated the querysets, but missed that a correlated subquery returns `NULL` rather than `0` for an imprint with no series or a universe with no issues — which still crashed on publishers with empty imprints/universes, like DC Comics. Both counts are now coalesced to `0`.

## UI Improvements

**Copy-confirmation feedback on the API token page.** The "copy" button on the API token page now shows the same checkmark/"Copied" confirmation already used for the identification number copy buttons on the issue detail page.

## Dependency Upgrades

TODO

## Tooling Releases

### New: Trok 0.1.0

[Trok](https://github.com/Metron-Project/trok) is a new .NET library for reading, writing, and validating `MetronInfo.xml` files, targeting .NET 10 — the [MetronInfo.xsd](/blog/metroninfo-v1-1) counterpart to Darkseid on the Python side. `Read`/`Write` work against POCOs under the `MetronInfo.Xml.Models` namespace that mirror the schema's elements and attributes, and `Validate` checks a document against an embedded copy of the schema, plus separately enforces the "at most one `primary=\"true\"`" rules on `IDS/ID` and `URLs/URL` that the schema expresses as XSD 1.1 `xs:assert` rules .NET's built-in XSD 1.0 validator can't evaluate on its own. Published to [NuGet.org](https://www.nuget.org/packages/MetronInfo.Xml). See the [docs](/docs/trok) for full usage examples.

## Future Projects

TODO

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
