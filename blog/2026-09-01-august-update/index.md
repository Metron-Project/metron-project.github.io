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

## API Improvements

**Collection add/remove endpoints.** `POST /api/collection/add/` adds an issue to a user's collection without marking it as read, and `DELETE /api/collection/{id}/` removes an item — closing the gap where PullList and WishList already had add/remove endpoints but Collection did not.

## Rate Limit Monitoring

**No more duplicate notices for the same spike.** The repeat-offender scan added last month only looked at the trailing lookback window with no memory of what had already been reported, so a single throttling spike could trigger a second notice on a later run purely because the window still overlapped the same day. The notifier now tracks each account's most recent notice date and ignores throttling on or before it, so only new activity after the last notice can trigger another one — a prerequisite for eventually moving this to an unattended daily schedule.

## Bug Fixes

**Duplicate read-date calendar widgets.** Unrelated `htmx` swaps on the collection detail page (e.g. rating an issue) re-scanned the whole document and stacked a new calendar widget onto the read-date input each time, since the vendored calendar library's own "already attached" check doesn't work. Re-initialization is now scoped to just the swapped fragment.

**Empty sort dropdown on secondary issue lists.** Only the main issue, week, next-week, and future list views wired up the sort dropdown; every other view that renders the issue list template — series, arc, creator, character, universe, and team pages — left it unset, so the dropdown appeared empty and sorting silently did nothing. All of them now share the same sort helpers.

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
