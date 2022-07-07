---
sidebar_position: 2
title: Esak
---

## What is it?

Esak is a python wrapper for [Marvel's API](https://developer.marvel.com/docs).

## Installation

```
$ pip3 install --user esak
```

## Example Usage

```
import esak

# Your own config file to keep your private key local and secret
from config import public_key, private_key

# Authenticate with Marvel, with keys I got from http://developer.marvel.com/
m = esak.api(public_key, private_key)

# Get all comics from this week, sorted alphabetically by title
pulls = sorted(m.comics_list({
    'format': "comic",
    'formatType': "comic",
    'noVariants': True,
    'dateDescriptor': "thisWeek",
    'limit': 100}),
    key=lambda comic: comic.title)

for comic in pulls:
    # Write a line to the file with the name of the issue, and the
    # id of the series
    print(f'{comic.title} (series #{comic.series.id})')
```
## Documentation

Can be found at [ReadTheDocs](https://esak.readthedocs.io/en/stable/).

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/esak).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/esak/issues).