---
slug: november-2023-update
title: November 2023 Update
date: 2023-12-03T13:29
authors: [ bpepple ]
tags: [ comic, database, metron, metrontagger, comictagger ]
---

# November 2023 News

## Issues Indexed

Not much user-facing development was done in November, but 10,612 issues were added to the database bringing the total
number of issues to **88,244**. I wish to give big thanks to everyone who has helped with the project. Thanks!

## 2024 Tasks

I've started working on a list of items that I'm planning to work on in 2024. Here's a partial list:

- Upgrade Server

  Currently, the server is fairly underpowered (1 GiB Memory, 1 CPU, 25 GiB SSD, 1,000 GiB Transfer) but is able to
  handle the current load without any particular issues. Based on the current user growth rate, I'm guessing I'll
  finally need to upgrade sometime in 2024, I'm thinking a fairly minor bump should be sufficient (2 GiB Memory,
  1CPU, 50 GiB SSD, 2,000 GiB Transfer)

- Container Deployment

  Before upgrading the server it makes sense to *finally* set up the project to use containers (preferably
  [Podman](https://podman.io/)) when deploying the website. If anyone wants to help
  with [this](https://github.com/bpepple/metron/issues/69), that would be awesome.

- Look into Open Collective for Future Funding

  Eventually it will make sense to look at setting up something like
  [Open Collective](https://opencollective.com/opensource) to help with future server costs. Right now the server costs
  around $14 a month (not including annual domain name & email hosting costs) so it's not really an issue, but down the
  road I probably won't want to cover all the costs of the project myself.

  Glancing at the criteria needed for acceptance to the Open Source Collective, it looks like Metron meets most of them,
  except having *100 stars* on [Github](https://github.com/). ***So, if you'd like to help the project, one easy
  way would be to star the [repository](https://github.com/bpepple/metron).***

- Manga / International Support

  It would be nice to make a final decision on whether to support Manga and Non-U.S. issues, right now I'm inclined not
  to but *if* we do add support it will necessitate some changes to the database for things like currencies, languages,
  and such.

I'm sure there will be other smaller items (like tweaking the site's css and such), but these are most items I'll be
looking at in 2024. 🎉