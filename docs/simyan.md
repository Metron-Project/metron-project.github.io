---
sidebar_position: 50
label: Simyan
---

# Simyan

## What is it?

Simyan is a python wrapper for the [Comic Vine API](https://comicvine.gamespot.com/api/).

## Installation

```
$ pip3 install -U --user simyan
```

## Example Usage

```
from simyan.comicvine import Comicvine
from simyan.sqlite_cache import SQLiteCache

session = Comicvine(api_key="ComicVine API Key", cache=SQLiteCache())

# Search for Publisher
results = session.publisher_list(params={"filter": "name:DC Comics"})
for publisher in results:
    print(f"{publisher.id_} | {publisher.name} - {publisher.site_url}")

# Get details for a Volume
result = session.volume(volume_id=26266)
print(result.summary)
```

## Documentation

Can be found at [ReadTheDocs](https://simyan.readthedocs.io/en/latest/).

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/Simyan).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/Simyan/issues).