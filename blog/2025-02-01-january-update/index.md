---
slug: january-2025-update
title: January 2025 Update
date: 2025-02-01T15:52
authors: [ bpepple ]
tags: [ comic, metadata, comicvine, opencollective, metron, gcd, grandcomicsdatabase ]
---

# January 2025 News

## Monthly Statistics

During January the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **#**
- Issues: **#**
- Creators: **#**
- Characters: **#**

## Grand Comics Database (GCD) IDs

TODO: Add GCD ID stats

## Alternative / Legacy Numbering

Recently, Metron [added](https://github.com/Metron-Project/metron/pull/330) a new field to track alternative / legacy
numbering, which are used primarily with [DC](https://www.dc.com/comics) & [Marvel](https://www.marvel.com/comics)
comics with their long-running characters. I've added them so far
to [The Amazing Spider-Man v6](https://metron.cloud/series/the-amazing-spider-man-2022/),
[Fantastic Four v7](https://metron.cloud/series/fantastic-four-2018/),
and [Fantastic Four v8](https://metron.cloud/series/fantastic-four-2023/) existing issues and will work on adding them
to other series as time permits.

In addition, I've also made changes to the filter so that issue numbers will be *not* case-sensitive when searched,
which will improve matching for issue
like [The Amazing Spider-Man (2022) #65.DEATHS](https://metron.cloud/issue/the-amazing-spider-man-2022-65deaths/).

## URL Redirects

Recently, support for [ID URL Redirects](https://github.com/Metron-Project/metron/pull/321) was added, so if you know
the Metron ID number for an issue it will redirect to the correct page. For example, https://metron.cloud/issue/133777/
will redirect you to the detail page for `The Amazing Spider-Man (2022) #66`.