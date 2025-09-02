---
title: August 2025 News
slug: august-2025-update
date: 2025-09-02T12:51
authors: [ bpepple ]
tags: [ comic, metadata, metron, opencollective, comictagger, metrontagger ]
---

# August 2025 News

## Monthly Statistics

During August the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **52**
- Issues: **1,822**
- Creators: **182**
- Characters: **332**

Thanks to everyone that contributed!

## ComicTagger

Due to some API usage problems support for Metron was removed from [ComicTagger](https://github.com/comictagger/comictagger/issues/783). This was primarily done since ComicTagger was designed with Comic Vine's API in mind and Metron's API differs enough that ComicTagger was using 2-14x the number of API requests compared to other clients for the same data.

For example, someone tagging their [Captain America](https://metron.cloud/series/captain-america-1968/) series would be using around 4,616 API calls with ComicTagger compared to about 355 API calls if they had used [Metron-Tagger](https://github.com/Metron-Project/metron-tagger). Due to trying to keep up with this additional load, we've had to upgrade our server specs twice this summer and came to the conclusion this wasn't sustainable in the long term. 

So, after September 12th you will be unable to useComic Tagger to tag your comics,but if you still wish to use Metron for tagging, you can use Metron-Tagger or [Perdoo](https://github.com/Buried-In-Code/Perdoo). If you have any questions or concerns don't hesitate to reach out on [Matrix](https://matrix.to/#/#metron-general:matrix.org).  

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at
[Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future
server capacity.

Anyway, that's all I got for this month. Take care!