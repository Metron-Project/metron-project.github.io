---
slug: october-2023-update
title: October 2023 Update
date: 2023-10-29T10:04
authors: [ bpepple ]
tags: [ comic, database, metron, metrontagger, comictagger ]
---

# October 2023 News

## New Indexed Issues Milestone

The [Metron Project](https://metron.cloud/) reached a milestone this month by having more than 77,000 issues added to
its database. I wish to give big thanks to everyone who has helped with the project. Thanks!

## Metron-Tagger v1.6.4

### Duplicate Page Removal

Just released a new version of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger), which adds a new
experimental feature of finding / removing duplicate pages in a directory of comics. The feature will get the hashes for
all the pages of the comics in a directory, and then ask the user if the image should be removed from the comics. This
is done by using the user's system image viewer to display the duplicate image. Once the user has reviewed all the
duplicated images it will ask the user whether to write the changes to the comics and then prompt them if they also want
to update the [ComicInfo.xml](https://anansi-project.github.io/docs/comicinfo/intro) (if it exists) for the page
changes.

This feature most likely will work best when running on a weekly basis, instead of on a ***whole*** comic collection,
since it's asking the user to review all the duplicate images *before* writing the changes. I'm planning on reworking
this to make it more feasible to use on a large comic collection, but that is pretty far down on my TODO list (but if
someone wants to work on this I'm more than willing to review a Pull Request).

**Note**: I've been using this for the last month and haven't had any issues, but if you plan on using this I would
suggest backing up any files when using this initially, and verifying it works correctly for you since once the changes
are written they can't be undone! 💣

### Miscellaneous Maintenance

The rest of v1.6.4 changes are primarily developer-side changes updating the toolsets for Metron-Tagger.

## Comic-Tagger

[Comic-Tagger](https://github.com/comictagger/comictagger) recently released
their [Metron-Talker](https://github.com/comictagger/metron_talker) plugin which adds support for tagging any comic with
metadata from [Metron](https://metron.cloud/).

