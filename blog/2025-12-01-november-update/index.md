---
title: November 2025 News
slug: november-2025-update
date: 2025-12-04T15:06
authors: [ bpepple ]
tags: [ comic, metron, opencollective, api ]
---

# November 2025 News

## Monthly Statistics

During November the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **30**
- Issues: **1,042**
- Creators: **158**
- Characters: **531**

Thanks to everyone that contributed!

## Reading Lists

### Mea Culpa

So... the last post I made introducing Reading List, unfortunately caused a bit of drama, since I forgot to attribute that the 13 initial reading lists were created from cbl files from the [CBL-ReadingLists group](https://github.com/DieselTech/CBL-ReadingLists). I'm sorry for this oversight and it wasn't my intention to give the impression they were created by me. I've since made a note on those reading lists attributing them to this group, and removed the import CLB functionality from the site.

Due to the aforementioned drama, I've had to call a bit of an audible in regard to the maintaining of the reading lists owned by the `Metron` user. I'm planning to work on adding support for non-admin users to edit these lists over the Holiday break and if you have an interest in helping to maintain them, please contact me.

One side-effect of my mistake is that it spurred on one of our community members to write a tool to retrieve the data directly from the reading lists source and check them against the site, and then produce a json file or if issues are missing generate a report that can be acted upon. Currently, I've got a management command to import these json files, but maybe I'll look at adding POST support to the API in the future.

Down the road, I'll look at adding arc-based bulk additions, other import options, and _maybe_ an associated reading list fields.

### Adding Series to Reading List

I've added the option to add a series to a reading list, which should be easier than just adding individual issues.

### API

I've spent the last week or so working on the Reading List API, and it's finally been pushed to production. There is fairly detailed API documentation on the [wiki](https://metron.cloud/wiki/api/api-documentation/), and there is also the [Swagger API Documents](https://metron.cloud/docs/).

I was originally planning to write a simple tool to generate reading lists from the API, but have held off due to:
- CBL files don't really have a schema.
- [json-cbl-standard](https://github.com/ComicReadingLists/json-cbl-standard) aren't currently designed to handle information from an API that well.

## Mokkari

A new version of [Mokkari](https://github.com/Metron-Project/mokkari) has been released that adds support for the new Reading List API, and also reworked the rate limiting code so that it produces more feedback to the user. If you have written an application that uses Mokkari, you'll want to modify your API calls to Metron to sleep when receiving `RateLimitError`. For example:

```python

>>> import time
>>> from mokkari.exceptions import RateLimitError
>>> session = Session("username", "password")
>>> def fetch_with_rate_limit_handling(issue_id):
...     while True:
...         try:
...             return session.issue(issue_id)
...         except RateLimitError as e:
...             if "per minute" in str(e):
...                 # Minute limit - automatically wait and retry
...                 print(f"{e}")
...                 print(f"Waiting {format_time(e.retry_after)}...")
...                 time.sleep(e.retry_after)
...                 continue
...             elif "per day" in str(e):
...                 # Daily limit - ask user whether to wait or quit
...                 response = input(f"Wait {format_time(e.retry_after)}? (y/n): ")
...                 if response.lower() == 'y':
...                     time.sleep(e.retry_after)
...                     continue
...                 else:
...                     raise
...             else:
...                 raise
>>> issue = fetch_with_rate_limit_handling(1)
```

## Metron-Tagger

A couple of releases of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) were made since my last blog post. The big change was support for writing/reading metadata was added, but implemented differently than other tagging software which have overloaded the PDF metadata. I decided to treat PDFs, like we do with CBZ, by embedding the metadata.

After discussing this with [AJ](https://github.com/ajslater), he has also made a release of [Comicbox](https://github.com/ajslater/comicbox/releases/tag/v2.1.0) supporting this method of writing comic metadata to a PDF.

The latest release has also improved the rate limiting, so that when the daily limit is exceeded, the user is asked whether they want to wait the reported number of minutes or quit processing the remaining files.

## Cloudflare

The site has been dealing with AiBots and scrapers quite a bit lately, and I'm giving serious thought to moving the site DNS over to Cloudflare to take advantage of the bot protection. I'm still working on what the migration plan would entail (name server changes, SSL certs, nginx, etc) and will make a decision once that's finished. If we do make the switch, the site will most likely be down for a while (assuming everything goes as planned), and I will put a notice on the site beforehand.

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at [Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future server capacity.

Anyway, I think that's everything for this month! Take care.