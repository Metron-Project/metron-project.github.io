---
slug: may-2024-update
title: May 2024 Update
date: 2024-06-01T10:09
authors: [ bpepple ]
tags: [ comic, database, metron, metrontagger ]
---

# May 2024 News

## Monthly Statistics

During May the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **39**
- Issues: **3,140**
- Creators: **230**
- Characters: **852**

Thanks to everyone that contributed!

## API Change

A new parameter, `rating`, was [added](https://github.com/bpepple/metron/pull/248) to the ***issue*** endpoint and
accepts the follow case-insensitive values:

- Unknown
- Everyone
- Teen
- Mature
- Teen Plus
- CCA

An example of its usage would be: `https://metron.cloud/api/issue/?publisher_name=dynamite&rating=teen`

## Metron-Tagger

Released a new version of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger/releases/tag/v2.3.0), which
contains a couple of new features/changes:

- **Digital Comics Renaming**: When renaming a digital-only comic, `Digital Chapter` will be appended to the filename.
- **Remove Non-Valid Metadata Option**: Using the `--remove-non-valid` option with the `--validate` option will remove
  any `comicinfo.xml` that is not valid.
- **Removed Oddball Rename Tokens**: Removed the *genre*, *story titles*, *language*, *critical rating*, and *story arc*
  tokens from the renaming templates since they are not commonly used.

Well, that's all I got for this month. Take care!
