---
slug: january-2025-update
title: January 2025 Update
date: 2025-02-01T10:38
authors: [ bpepple ]
tags: [ comic, metadata, comicvine, opencollective, metron, gcd, grandcomicsdatabase ]
---

# January 2025 News

## Monthly Statistics

During January the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **52**
- Issues: **1,038**
- Creators: **326**
- Characters: **326**

Thanks to everyone that contributed!

## Grand Comics Database (GCD) IDs

Recently support for [GCD](https://www.comics.org/) ID support was added and currently about 92% of the issues on the
site has had them added.

## Alternative / Legacy Numbering

Recently, Metron [added](https://github.com/Metron-Project/metron/pull/330) a new field to track alternative / legacy
numbering, which are used primarily with [DC](https://www.dc.com/comics) & [Marvel](https://www.marvel.com/comics)
comics with their long-running characters.

In addition, I've also made changes to the filter so that issue numbers will be *not* case-sensitive when searched,
which will improve matching for issue
like [The Amazing Spider-Man (2022) #65.DEATHS](https://metron.cloud/issue/the-amazing-spider-man-2022-65deaths/).

I'm planning to add a new param to the API that will allow you to search the number *and* alternative number fields at
the same time, but there isn't an ETA when that will be added.

## URL Redirects

Recently, support for [ID URL Redirects](https://github.com/Metron-Project/metron/pull/321) was added, so if you know
the Metron ID number for an issue it will redirect to the correct page. For example, https://metron.cloud/issue/133777/
will redirect you to the detail page for `The Amazing Spider-Man (2022) #66`.

## Digital Releases

Recently a decision was made not to include digital releases that are 5 pages or less, like
the [Marvel Legacy Primer Pages](https://comicvine.gamespot.com/search/?header=1&i=volume&q=legacy%20primer%20page). If
you have questions whether a release should be added or not, you can ask on
the [Discussions Page](https://github.com/Metron-Project/metron/discussions) or
on [Matrix](https://matrix.to/#/#metron-general:matrix.org).

## International Support

In the effort to add support to the site for Non-US publishers, a `country` field has been added to the
Publisher model, though only the United States will be valid. Modifying the `price` field for an issue to handle
different currencies still needs to be done, but with some luck I'll find some time to do it this year.

## OpenCollective

We've recently set up an account at [Open Collective](https://opencollective.com/) if you wish to help defray the server
costs and help with increasing future server capacity.

Anyway, I think that covers most of the changes to the site that were made this month. Take care!