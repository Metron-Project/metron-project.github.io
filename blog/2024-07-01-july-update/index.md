---
slug: july-2024-update
title: July 2024 Update
date: 2024-08-01T11:20
authors: [ bpepple ]
tags: [ comic, database, server, metadata]
---

# July 2024 News

## Monthly Statistics

During July the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **47**
- Issues: **1,940**
- Creators: **71**
- Characters: **329**

Thanks to everyone that contributed!

## More Database Series Type Changes

Made a couple of changes to some Series Type names on [Metron](https://metron.cloud/) based on some suggestions from [Buried-In-Code](https://github.com/Buried-In-Code) over on [Matrix](https://matrix.to/#/%23metron-devel:matrix.org). They include:

* Change ___Digital Chapters___ to ___Digital Chapter___
* Change ___Hard Cover___ to ___Hardcover___

If you wish to update your existing `ComicInfo.xml` metadata, I've released a new version of [Karkas](https://github.com/bpepple/karkas) that addresses these changes. You can download this version from [this link](https://github.com/bpepple/karkas/releases/download/v1.2.0/karkas-1.2.0-py3-none-any.whl), and just install it by running:

```bash
pipx install /path/to/karkas-1.2.0-py3-none-any.whl
```

Then just run:
```bash
karkas /path/to/comics
```

## Server OS Upgrade

I'm tentatively planning to upgrade Metron's operating system later this month, so there might be some downtime (most likely a few hours) when I do that. Once I have a better idea what changes this version has (PostgreSQL-16.2, Python-3.12, etc.) I'll have a better idea the work involved. Regardless, I'll post a notification on the site for the week leading to the upgrade, which most likely will occur on a Saturday.

Anyway, that's all I've got for this month. Take care!