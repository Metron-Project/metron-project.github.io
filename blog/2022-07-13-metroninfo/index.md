---
slug: welcome-metroninfo
title: MetronInfo.xml
authors: [bpepple]
tags: [metron, comic, metadata, tagging, comicvine, comic-tagger, anansi-project]
---
So, one of the new projects I've been working on in my spare time is a new comic book xml schema called [MetronInfo](https://github.com/Metron-Project/metroninfo).

Currently, most applications use [ComicInfo](https://github.com/anansi-project/comicinfo) which originated from the [ComicRack](https://comicrack.en.softonic.com/) application, but due to it's history this format has some limitations like:

- **Poor handling of data.** For example, cover date information that is split into separate integer types, instead of just using a date type.
- **Limited types metadata stored.** For example, when tagging a comic book archive with an application like [ComicTagger](https://github.com/comictagger/comictagger) it would be useful to know where the metadata information was retrieved from (i.e. Comic Vine, GCD, Metron, etc.) and the resources identification number.
- **Lack of documentation.** The [Anansi Project](https://anansi-project.github.io/) ***is*** working on improving this, tho.

For now, the Anansi Project is working on documenting and extending (non-breaking changes) the ComicInfo schema, but in my opinion that time spent would be better spent on creating a new format not tied to a dead application. Due to the fairly unstructured nature of comic book archives it's trivial to tag one with the existing ComicInfo format **and** also a new format. That way users who use applications that only support ComicInfo.xml can still use them, but also gives them the option to use applications that could support the MetronInfo format.

My goals for MetronInfo.xml are:

- Fix some of the deficiencies of the ComicInfo format.
- Add information to make it easier for Plex-like application to identify data (series, character, etc/) when importing comics into their application.
- Document the elements clearly so their use is not ambiguous.

Currently I'm working right now on finalizing the new format, and would appreciate any help or feedback from the comic book community in this. Feel free to leave suggestions either at the [Discussions Page](https://github.com/Metron-Project/metroninfo/discussions) or contact use over on [Matrix](https://matrix.to/#/#metrondb:matrix.org).

Once the new format is finalized I plan on writing a tool that will create a MetronInfo.xml file for any existing comic book archive that was tagged with ComicTagger or [Metron-Tagger](https://github.com/Metron-Project/metron-tagger), and also retrieve any missing data from the source of information (Metron or Comic Vine).