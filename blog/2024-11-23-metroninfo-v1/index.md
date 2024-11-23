---
slug: metroninfo-v1
title: MetronInfo V1.0
date: 2024-11-22T12:45
authors: [ bpepple ]
tags: [ metadata, comic, comicvine, metron ]
---

# MetronInfo.xsd v1.0

I'm happy to announce the v1.0 of the
[MetronInfo schema](https://raw.githubusercontent.com/Metron-Project/metroninfo/refs/heads/master/schema/v1.0/MetronInfo.xsd)
has been finalized and is now ready to be used by developers and consumers. So, I'll start off by answering some
questions (most of this will be from the projects README).

## What is it?

MetronInfo is a new xml document type that fixes some deficiencies that exist in the current de facto xml
file, [ComicInfo.xml](https://github.com/anansi-project/comicinfo), to store metadata for a comic. Some of our
improvements include:

- Addition elements to track information that are not included with the current standard.
- Better handling of data types. For instance, instead of using delimited strings we use arrays of elements.
- Elements to track where the data was obtained from.
- `id` attributes for resources (Characters, Creators, etc.), so items with different names can be associated correctly.

## Is the schema only for the Metron Database?

No, the schema only has *Metron* in the name since almost every other format has *Comic* in the name, and the
originating author hates naming projects, so he went with the simplest choice. 😄 It was designed to be used for any of
the comic resources (Comic Vine, AniList, etc.)

## Where can I find the schemas?

Version 1.0 of the schema is located in [schema](https://github.com/Metron-Project/metroninfo/tree/master/schema)
directory

## Is there documentation for it?

Yes, there is [documentation](https://metron-project.github.io/docs/category/metroninfo) describing the elements usage
and also a Matrix to help with age rating mapping.

## How can I validate my XML?

It's recommended that any software that writes the XML make use of the schema to validate, so consumers of the XML
document can be sure of its data. The schema use XSD 1.1, so you need to make sure your validation code uses that
instead of XSD 1.0.

For example to validate the XML in python:

```python
from pathlib import Path
from xmlschema import XMLSchema11, XMLSchemaValidationError

xsd = Path("/home/user/MetronInfo.xsd")
xml = Path("/home/user/MetronInfo.xml")

schema = XMLSchema11(xsd)
try:
    schema.validate(xml)
except XMLSchemaValidationError as e:
    print(f"Failed to validate XML: {e!r}")
    exit(1)

# Code to write / read the xml file
```

## What software currently supports it?

Currently, the following software does:

- [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) - Commandline tool to tag comic with metadata from
  Metron Comic Book Database.

If you are a developer that has added support for MetronInfo.xml to your software, please create a PR to update the
README
or [contact me](mailto:bpepple@metron.cloud?subject=MetronInfo%20Support&body=Please%20add%20the%20following%20software%20to%the%20README:%20).

## Thanks

I'd like to thank everyone that has contributed to the schema, and in
particular [AJ](https://github.com/ajslater), [Buried-In-Code](https://github.com/Buried-In-Code),
and [Joe](https://github.com/majora2007) who have helped out a lot in the last couple of months.