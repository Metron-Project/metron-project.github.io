---
title: November 2025 News
slug: november-2025-update
date: 2025-12-04T15:06
authors: [ bpepple ]
tags: [ comic, metron, opencollective ]
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

So... the last post I made introducing Reading List, unfortunately caused a bit of drama, since I forgot to attribute that the 13 initial readings lists were created from cbl files from the [CBL-ReadingLists group](https://github.com/DieselTech/CBL-ReadingLists). I'm sorry for the is oversight and it wasn't my intention to give the impression they were created by me. I've since made a note on those reading lists attributing them to this group, and removed the import CLB functionality from the site.

One side-effect of my mistake is that it spurred on one of our community members to write a tool to retrieve the data directly from the reading lists source and checks them against the site, and then produces a json file or if issues are missing generates a report that can be acted upon.

### Adding Series to Reading List

I've added the option to add a series to a reading list, which should be easier than just adding individual issues.

### API

I've spent the last week or so, and it's finally been pushed to production. There is a fairly detail [README](https://github.com/Metron-Project/metron/blob/d2a93b081630b210c436155bb8b6ad11ffab73df/reading_lists/API_README.md) that gives a good overview and as with the rest of the API, there are [Swagger API Documents](https://metron.cloud/docs/).

## Mokkari


A new version of [Mokkari](https://github.com/Metron-Project/mokkari) has been released that adds support the new Reading List API, and also reworked the rate limiting code so that it produces more feeedback to the user If you have written an application that uses Mokkari, you'll want to modify your API calls to Metron to sleep when receiving `RateLimitError`. For example:

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

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at [Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future server capacity.

Anyway, I think that everything for this month! Take care.