---
sidebar_position: 70
label: Metron-Tagger
---

# Metron-Tagger

## What is it?

Metron-Tagger is a command line tool to tag comic archives with metadata from Metron Comic Book Database. 

## Installation

```
$ pip3 install --user metron-tagger
```
## Documentation

```
usage: metron-tagger [-h] [-r] [-o] [--id ID] [-d] [--ignore-existing] [-i] [--missing] [-s]
                     [-e] [-z] [--delete-original] [--version]
                     path [path ...]

Read in a file or set of files, and return the result.

positional arguments:
  path                 Path of a file or a folder of files.

options:
  -h, --help           show this help message and exit
  -r, --rename         Rename comic archive from the files metadata. (default: False)
  -o, --online         Search online and attempt to identify comic archive. (default: False)
  --id ID              Identify file for tagging with the Metron Issue Id. (default: None)
  -d, --delete         Delete the metadata tags from the file. (default: False)
  --ignore-existing    Ignore files that have existing metadata tag. (default: False)
  -i, --interactive    Interactively query the user when there are matches for an online search.
                       (default: False)
  --missing            List files without metadata. (default: False)
  -s, --sort           Sort files that contain metadata tags. (default: False)
  -e, --export-to-cb7  Export a CBZ (zip) or CBR (rar) archive to a CB7 (7zip) archive.
                       (default: False)
  -z, --export-to-cbz  Export a CB7 (7zip) or CBR (rar) archive to a CBZ (zip) archive.
                       (default: False)
  --delete-original    Delete the original archive after successful export to another format.
                       (default: False)
  --version            Show the version number and exit

```

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/metron-tagger).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/metron-tagger/issues).