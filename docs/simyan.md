---
sidebar_position: 50
label: Simyan
---

# Simyan

## What is it?

Simyan is a python wrapper for the [Comic Vine API](https://comicvine.gamespot.com/api/).

## Installation

```
$ pip3 install simyan
```

## Example Usage

```python
from datetime import timedelta
from pathlib import Path

from simyan.comicvine import Comicvine

session = Comicvine(
    api_key="Comicvine API Key",
    cache_path=Path("cache.sqlite"),  # Optional, defaults to ~/.cache/simyan/cache.sqlite
    cache_expiry=timedelta(days=1),  # Optional, defaults to 14 days
    ratelimit_path=Path(
        "ratelimits.sqlite"
    ),  # Optional, defaults to ~/.cache/simyan/ratelimits.sqlite
)

# Search for Publisher
results = session.list_publishers(params={"filter": "name:DC Comics"})
for publisher in results:
    print(f"{publisher.id} | {publisher.name} - {publisher.site_url}")

# Get details for a Volume
result = session.get_volume(volume_id=26266)
print(result.summary)
```

## Documentation

Can be found at [ReadTheDocs](https://simyan.readthedocs.io/en/latest/).

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/Simyan).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/Simyan/issues).