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
There are optional dependencies which can be installed by specifying one or more
of them in braces e.g. metron-tagger[7zip]

The optional dependencies are:

- 7zip: Provides support for reading/writing to CB7 files.
- pdf: Provides support for reading/writing to PDF files.

## Documentation

```
usage: metron-tagger [-h] [-r] [-o] [-m] [-c] [--id ID] [-d] [--ignore-existing] [--accept-only] [--missing] [-s] [-z] [--validate] [--remove-non-valid] [--delete-original] [--duplicates] [--migrate] [--version]
                   path [path ...]

Read in a file or set of files, and return the result.

positional arguments:
  path                 Path of a file or a folder of files.

options:
  -h, --help           show this help message and exit
  -r, --rename         Rename comic archive from the files metadata. (default: False)
  -o, --online         Search online and attempt to identify comic archive. (default: False)
  -m, --metroninfo     Write, delete, or validate MetronInfo.xml. (default: False)
  -c, --comicinfo      Write, delete, or validate ComicInfo.xml. (default: False)
  --id ID              Identify file for tagging with the Metron Issue Id, or restrict directory matches to issues from a specific Metron Series Id. (default: None)
  -d, --delete         Delete the metadata tags from the file. (default: False)
  --ignore-existing    Ignore files that have existing metadata tag. (default: False)
  --accept-only        Automatically accept the match when exactly one valid match is found. (default: False)
  --skip-multiple      Skip files that have multiple matches instead of prompting for selection. (default: False)
  --missing            List files without metadata. (default: False)
  -s, --sort           Sort files that contain metadata tags. (default: False)
  -z, --export-to-cbz  Export a CBR (rar) archive to a CBZ (zip) archive. (default: False)
  --validate           Verify that comic archive has a valid metadata xml. (default: False)
  --remove-non-valid   Remove metadata xml from comic if not valid. Used with --validate option (default: False)
  --delete-original    Delete the original archive after successful export to another format. (default: False)
  --duplicates         Identify and give the option to delete duplicate pages in a directory of comics. (Experimental) (default: False)
  --migrate            Migrate information from a ComicInfo.xml into a *new* MetronInfo.xml (default: False)
  --version            Show the version number and exit
```

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/metron-tagger).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/metron-tagger/issues).