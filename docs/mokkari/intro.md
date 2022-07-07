---
sidebar_position: 2
title: Mokkari
---

## What is it?

Mokkari is a python wrapper for the Metron Comic Book Database API.

## Installation

```
pip3 install --user mokkari
```

## Example Usage

```
import mokkari

# Your own config file to keep your credentials secret
from config import username, password

m = mokkari.api(username, password)

# Get all Marvel comics for the week of 2021-06-07
this_week = m.issues_list({"store_date_range_after": "2021-06-07", "store_date_range_before": "2021-06-13", "publisher_name": "marvel"})

# Print the results
for i in this_week:
    print(f"{i.id} {i.issue_name}")

# Retrieve the detail for an individual issue
asm_68 = m.issue(31660)

# Print the issue Description
print(asm_68.desc)
```

## Documentation

Can be found at [ReadTheDocs](https://mokkari.readthedocs.io/en/latest/).

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/mokkari).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/mokkari/issues).