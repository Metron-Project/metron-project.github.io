---
slug: metroninfo-v1-1
title: MetronInfo V1.1
date: 2026-07-19T15:45
authors: [ bpepple ]
tags: [ metadata, comic, comicvine, metron ]
---

A quick follow-up to the [v1.0 announcement](/blog/metroninfo-v1) from two years ago:
[MetronInfo v1.1](https://raw.githubusercontent.com/Metron-Project/metroninfo/refs/heads/master/schema/v1.1/MetronInfo.xsd)
is out, adding two new optional elements that came out of feedback since the initial release.

<!-- truncate -->

## What's New

### AlternativeNumber

An optional alternative number for the book, stored as a sibling of `Number`. This is handy for issues that carry
both a legacy and a relaunch numbering — for example,
[Captain America #13](https://metron.cloud/issue/captain-america-2025-13/), whose `Number` is `13` within its
current relaunched volume, but which also carries a legacy `AlternativeNumber` of `783`.

### CommunityRating

A new element for tracking the community's average rating for the book. It has two children:

- **AverageRating** - The average rating value, a decimal between `0` and `5.0`.
- **RatingCount** - Optional. The number of ratings used to determine the `AverageRating` value.

Both elements are documented in full on the [MetronInfo documentation](/docs/metroninfo/documentation) page, and the
raw schema is up on the [schema page](/docs/metroninfo/schemas/v1.1).

## What Software Currently Supports It?

An upcoming release of [Darkseid](https://github.com/Metron-Project/darkseid) will add support for these new
elements. If you maintain other software that reads or writes MetronInfo.xml, feel free to create a PR to update the
README or [contact me](mailto:bpepple@metron.cloud?subject=MetronInfo%20Support&body=Please%20add%20the%20following%20software%20to%20the%20README:%20)
to get it added to the list.

## Upgrading

This is a purely additive, backwards-compatible change — both elements are optional, so any existing v1.0 documents
remain valid. If you're validating against the schema in your own tooling, just point it at the
[v1.1 schema](https://github.com/Metron-Project/metroninfo/tree/master/schema/v1.1) instead of v1.0.

## Future

As always, if you have suggestions for the schema, please file a
[feature request](https://github.com/Metron-Project/metroninfo/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=),
[bug report](https://github.com/Metron-Project/metroninfo/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=),
or start a [discussion](https://github.com/Metron-Project/metroninfo/discussions).

Thanks again to everyone who's contributed feedback and pull requests to the schema.
