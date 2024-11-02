---
sidebar_position: 70
label: Metron-Tagger
---

# Metron-Tagger

## What is it?

Metron-Tagger is a command line tool to tag comic archives with metadata from Metron Comic Book Database. 

## Installation

```
$ pipx install metron-tagger
```
## Documentation

```
usage: metron-tagger [-h] [-r] [-o] [--id ID] [-d] [--ignore-existing] [-i] [--missing] [-s] [-z] [--validate] [--remove-non-valid] [--delete-original] [--duplicates]
                     [--version]
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
  -i, --interactive    Interactively query the user when there are matches for an online search. (default: False)
  --missing            List files without metadata. (default: False)
  -s, --sort           Sort files that contain metadata tags. (default: False)
  -z, --export-to-cbz  Export a CBR (rar) archive to a CBZ (zip) archive. (default: False)
  --validate           Verify that comic archive has a valid ComicInfo.xml. (default: False)
  --remove-non-valid   Remove ComicInfo.xml from comic if not valid. Used with --validate option (default: False)
  --delete-original    Delete the original archive after successful export to another format. (default: False)
  --duplicates         Identify and give the option to delete duplicate pages in a directory of comics. (Experimental) (default: False)
  --version            Show the version number and exit

```

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/metron-tagger).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/metron-tagger/issues).