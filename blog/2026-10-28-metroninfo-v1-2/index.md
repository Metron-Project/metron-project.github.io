---
slug: metroninfo-v1-2
title: MetronInfo V1.2
date: 2026-10-28T12:00
authors: [ bpepple ]
tags: [ metadata, comic, comicvine, metron ]
---

Following up on the [v1.1 release](/blog/metroninfo-v1-1) from July,
[MetronInfo v1.2](https://raw.githubusercontent.com/Metron-Project/metroninfo/refs/heads/master/schema/v1.2/MetronInfo.xsd)
is out. This release is focused on the `Series` element, adding three new optional elements and loosening the
restrictions on language codes.

<!-- truncate -->

## What's New

### Series EndYear

An optional element for the year a series ended, complementing the existing `StartYear` element. Like `StartYear`, it
must be a 4 digit value. The schema checks that `EndYear` isn't earlier than `StartYear`, and that a series with a
`Status` of `Ongoing` doesn't have an `EndYear`.

### Series Status

An optional element for the publication status of the series. It must be one of the following values:

- **Cancelled**
- **Completed**
- **Hiatus**
- **Ongoing**

### Series Summary

An optional description or summary of the series itself. This is separate from the existing top-level `Summary`
element, which describes the individual book.

### Language Codes

The `lang` attribute (used by `Series` and the `Name` element of `AlternativeNames`) previously only accepted a
two-letter lowercase code like `en` or `ja`. It now accepts [BCP 47](https://www.rfc-editor.org/info/bcp47) language
tags, so values like `fil`, `pt-BR`, and `zh-Hant` are now valid. This makes it possible to distinguish things like
Brazilian and European Portuguese, or Traditional and Simplified Chinese.

Here's an example of a `Series` element using the new elements:

```xml
<Series lang="en" id="1234">
    <Name>Black Lightning</Name>
    <SortName>Black Lightning</SortName>
    <Volume>1</Volume>
    <Format>Single Issue</Format>
    <StartYear>1977</StartYear>
    <EndYear>1978</EndYear>
    <Status>Cancelled</Status>
    <IssueCount>11</IssueCount>
    <Summary>Jefferson Pierce returns to his old neighborhood to fight crime as Black Lightning.</Summary>
</Series>
```

All of the changes are documented in full on the [MetronInfo documentation](/docs/metroninfo/documentation) page, and
the raw schema is up on the [schema page](/docs/metroninfo/schemas/v1.2).

## What Software Currently Supports It?

The following software already supports MetronInfo v1.2:

- [Darkseid](https://github.com/Metron-Project/darkseid) as of
  [v9.1.0](https://github.com/Metron-Project/darkseid/releases/tag/v9.1.0)
- [Comicbox](https://github.com/ajslater/comicbox) as of
  [v5.5.0](https://github.com/ajslater/comicbox/releases/tag/v5.5.0)
- [Codex](https://github.com/ajslater/codex) as of [v2.5.7](https://github.com/ajslater/codex/releases/tag/v2.5.7)

If you maintain other software that reads or writes MetronInfo.xml, feel free to create a PR to update the
README or [contact me](mailto:bpepple@metron.cloud?subject=MetronInfo%20Support&body=Please%20add%20the%20following%20software%20to%20the%20README:%20)
to get it added to the list.

## Upgrading

This is a backwards-compatible change. The new elements are optional, and the new language code rules accept every
value the old ones did, so any existing v1.0 or v1.1 documents remain valid. If you're validating against the schema in
your own tooling, just point it at the [v1.2 schema](https://github.com/Metron-Project/metroninfo/tree/master/schema/v1.2)
instead of v1.1.

As with v1.1, the `EndYear` checks are written as XSD 1.1 assertions, so they're only enforced by a validator that
supports XSD 1.1 (for example, Saxon or Xerces-J with XSD 1.1 enabled).

## Future

As always, if you have suggestions for the schema, please file a
[feature request](https://github.com/Metron-Project/metroninfo/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=),
[bug report](https://github.com/Metron-Project/metroninfo/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=),
or start a [discussion](https://github.com/Metron-Project/metroninfo/discussions).

Thanks again to everyone who's contributed feedback and pull requests to the schema.
