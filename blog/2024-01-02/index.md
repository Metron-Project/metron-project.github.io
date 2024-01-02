---
slug: december-2023-update
title: December 2023 Update
date: 2024-01-02T14:53
authors: [ bpepple ]
tags: [ comic, database, metron, metrontagger, comictagger ]
---

# December 2023 News

## Issues Indexed

The [Metron Project](https://metron.cloud/) had a total of **10,722** issues added to its database during December bring
the total number of issues to **98,684**. I wish to give big thanks to everyone who has helped with the project. Thanks!

## 2023 Database Statistics

We added the following number of entries during 2023:

* Users: **319**
* Publishers: **33**
* Series: **2,430**
* Comics: **44,914**
* Characters: **7,082**
* Creators: **3,118**
* Teams: **691**
* Arcs: **521**

## HTMX and Streaming HTML

I'm playing around with using [HTMX](https://htmx.org/) and [Django's](https://www.djangoproject.com/) ability to stream
[HTML](https://en.wikipedia.org/wiki/HTML) to improve the user experience. Basically, we'll load the static parts (like
the footer, navbar, etc.) of the page templates as soon as possible, and then load the data as it becomes available and
render its fragment of HTML. Not sure if this will be pushed to production or not until I do more testing, but it's
something worth looking into.