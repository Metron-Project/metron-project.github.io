---
slug: february-2025-update
title: February 2025 Update
date: 2025-03-01T10:38
authors: [ bpepple ]
tags: [ comic, metadata, comicvine, metron, gcd, grandcomicsdatabase, opencollective, readinglist, cbl ]
---

# February 2025 News

## Monthly Statistics

During February the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**

Thanks to everyone that contributed!

## Recent Work

One of my goals for 2025 was to make the project less dependent on me, and for most of this month I've been working on
the tooling to allowing some users to use the POST API to add comics to the database. With luck, I should finish next
month, and I'll start looking at what users to promote.

## Comic Book Reading Lists

Recently, I've been looking at Comic Book Reading Lists since
a [bug report](https://github.com/Metron-Project/metron/issues/302) was opened to add support for generating them.
Currently, users use [CBL's](https://github.com/DieselTech/CBL-ReadingLists) that are imported into their comic server
of choice ([Kavita](https://www.kavitareader.com/), [Codex](https://github.com/ajslater/codex), etc.), which seems
non-optimal primarily since, in essence, it's another database of information. Now, this makes sense, since for a long
time the only source of usable data via an API was [Comic Vine](https://comicvine.gamespot.com/), which hasn't had a
developer presence in _years_, and having a new feature added to their site is __extremely__ unlikely.

I think a better solution would be for the other databases that offer an API ([GCD](https://www.comics.org/api/) &
Metron) to have the option for users to create reading lists (similar to [MovieDB](https://www.themoviedb.org/)) and
have that data available either by generating a file or through an API call. Now, to do this we would need to work with
the comic server developers to determine exactly what data they would need, though it would probably look similar to
this:

```shell
{
  "arc": {
    "name": "Foo Bar Wars"
  }
  "issues": {
    "issue": {
      "id": {
      "cv_id": 9999
      "metron": 5678
      "gcd": 9856
      }
      "index": 0
    }
    "issue": {
      "id": {
      "cv_id": 12345
      "metron": 9999
      "gcd": 123
      }
      "index": 1
    }
  }
}
```

The current standard (CBL) and the recent [json-cbl-standard](https://github.com/ComicReadingLists/json-cbl-standard)
contains a look of information that I can't see a comic server needing, primarily all the series-level info which the
comic servers should already have in their databases. Of course, I'd love to hear from any developer in this space to
verify that.

Once the basic functionality was added, importing any existing CBL into GCD or Metron should be fairly trivial, since
Metron links other sites issue id's (GCD would be able to use Metron's API to link since they don't track this
information).

Anyway, those are some of my quick thoughts on what the future of Comic Book Reading Lists could look like, and if
anyone has interest in working on this potential future project, contact me
on [GitHub](https://github.com/Metron-Project/metron)
or [Matrix](https://matrix.to/#/#metron-general:matrix.org).

## OpenCollective

We've recently set up an account at [Open Collective](https://opencollective.com/metron) if you wish to help defray the
server costs and help with increasing future server capacity.