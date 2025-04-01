---
slug: march-2025-update
title: March 2025 Update
date: 2025-04-01T08:38
authors: [ bpepple ]
tags: [ comic, metadata, metron, opencollective ]
---

# March 2025 News

## Monthly Statistics

During March the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **55**
- Issues: **4,564**
- Creators: **1,686**
- Characters: **1,470**

Thanks to everyone that contributed!

## Rate Limiting

On March 10th, the [API](https://en.wikipedia.org/wiki/API) rate limit for the site was modified by adding another limit
of 10,000 requests per day to the existing limit of 30 requests per minute. Most users shouldn't see any change, but
this will allow the site to better manage a sudden influx of new users like what happened when Comic Vine went down last
fall.

## Recent Work

Finished working on an [internal tool](https://codeberg.org/bpepple/barda) that uses Metron's POST API to add series to
the database, and have chosen a handful of users to give the appropriate permissions needed to run it. With any luck,
this should free up some of my time so that I can spend more time working on the site's code.

One side effect of allowing some users to use the POST API is that I needed to _disable_ the ability to create creators
from the issue form. This is something I had already been thinking about doing, since it had created a fairly annoying 
amount of extra work on my end to remove the duplicate entries that had been created in error.

## OpenCollective

We've recently set up an account at [Open Collective](https://opencollective.com/metron) if you wish to help defray the
server costs and help with increasing future server capacity. Any help would be greatly appreciated.

Anyway, that's all I got for this month. Take care!