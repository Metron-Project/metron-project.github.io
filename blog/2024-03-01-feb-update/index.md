---
slug: february-2024-update
title: February 2024 Update
date: 2024-03-06T10:22
authors: [ bpepple ]
tags: [ comic, database, metron, metrontagger ]
---

# February 2024 News

## Monthly statistics

During February the [Metron Project](https://metron.cloud/) had a total of **5,635** issues added to its database during
February bring the total number of issues to **112,135**. We also had **65** new users join.

## ComicTagger

Recently [comictagger](https://github.com/comictagger/comictagger) released the [metron_talker](https://github.com/comictagger/metron_talker) plugin, but unfortunately it's got a few design flaws
that is generating 2-4 times the number of API calls compared to other clients, and it's also downloading the cover for
each issue, instead of using the issue's `cover_hash` exposed by the Metron API. The developers are working on
addressing these issues, but if you are planning to tag a large number of comics we would appreciate it if you waited
for a new release or use Metron-Tagger in the interim.

## Server News

With the server load increase due to the comictagger bug, I've gone ahead and increased the CPU and RAM for the server
and with any luck users shouldn't see a decrease in server quality of service.

## Metron-Tagger

[AJ Slater](https://github.com/ajslater) recently released a new library ([comicfn2dict](https://github.com/ajslater/comicfn2dict)) for parsing comic filenames, and since the code
for handling that in [darkseid](https://github.com/Metron-Project/darkseid) was fairly old and crusty it seemed like a good time to do a little work on
[Metron-Tagger](https://github.com/Metron-Project/metron-tagger). Some of the changes are as follows:

- comicfn2dict

  So, I switched over to using `comicfn2dict` for filename parsing, and did some testing on around 1,000 or so comics.
  Overall, it's performed as well as the old code and has the added benefit of being used by multiple projects.

- Improved Matching

  Spent some time improving comic matching by implementing the following changes:

    - Only use the series name and issue number when querying Metron. By doing this we are likely to get a result from
      Metron. Also, we are striping out any special characters (like `,`, `-`, or `&`) from the series name.
    - Use the `cover hash` from Metron to verify the issue is correct, otherwise we'll ask the user for help.
    - Use existing `ComicInfo.xml` for matching. If a comic has already been tagged by comictagger (or Metron-Tagger)
      and has information to help identify the issue (like the [Comic Vine](https://comicvine.gamespot.com/) ID), we'll
      use that before using the filename.

## Miscellaneous

Right now, I'm thinking about making some changes to the API (like adding versioning), and if I do I'll ask the
community for any suggestions of changes they'd like to see.





