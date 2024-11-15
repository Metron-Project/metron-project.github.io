---
sidebar_position: 10
title: Schema documentation
---

This page aims at clarifying the various elements of the schema, as well as their intended use and observed usage.

### IDS

The identification numbers from sources of information.

It has the following child element:

- #### ID

  The sources of information used for the metadata.

  The `primary` attribute is used to identify the primary source of information used in the xml document. Only one
  element can have this attribute be `true`.

  The `source` attribute is required and has to be one of the following:

    - AniList
    - Comic Vine
    - Grand Comics Database
    - Metron
    - MyAnimeList
    - League of Comic Geeks

### Publisher

A person or organization responsible for publishing, releasing, or issuing a book. It can also have an `id` attribute
that can be used to add the identification number from the source of information.

It also has the following children elements:

- #### Name

  The name of the Publisher.

- #### Imprint

  Optional. The brand name used to publish a series. For example, **Vertigo** is an imprint of **DC Comics**.

  It can also have an `id` attribute.

### Series

Contains information about the series the book is part of. It can have a `lang` attribute, which is defined as a
2-letter language code (ISO 639-3), and an `id` attribute that can be used to add the identification number from the
source of information.

It also has the following children elements:

- #### Name

  The name of the series.

- #### SortName

  The name of the series that should be used for sorting purposes. Normally this is the same as the `Name` element, but
  without any leading articles like ***the***.

- #### Volume

  Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple
  volumes.

  Volumes can be referenced by number (1, 2, 3…) or by year (2018, 2020…).

- #### IssueCount

  The total number of issues for the series. For example, Black Lightning v1 (1997) ran for 11 issues, so the value of
  the `IssueCount` would be 11. This can change between issues of a series, if it was still being published when the xml
  document was written.

  This element is primarily used by comic server software like Kavita or Codex.

- #### VolumeCount

  The total number of volumes for a series. For example, Black Lightning has the following v1 (1977), v2 (1995), and
  v3 (2025), so the value in the `VolumeCount` sub-element would be 3.

  This can be used to distinguish total volumes published, like [Bleach](https://anilist.co/manga/30012/BLEACH/), which
  has 74 volumes or 706 issues.

  This element is primarily used by comic server software like Kavita or Codex.


- #### Format

  The type of series. It must be one of the following values:

    - Annual
    - Graphic Novel
    - Limited Series (which covers mini/maxi series)
    - One-Shot
    - Series (which covers ongoing/cancelled series)
    - Trade Paperback
    - Hardcover

- #### StartYear

  The year that the series started in. This must be a 4 digit value.

- #### AlternativeNames

  Any other names the series is named as. It has `AlternativeName` children name for the individual alternative series
  name.

  They have the following children element:

    - ##### Name

      The alternative name of the series. It can have an `id` and `lang` (defined as a 2-letter language code (ISO
      639-3)) attribute.

### Volume

Used to store the `Volume` for **Manga**. This is a string element.

### CollectionTitle

Trade Paperback and other collections can sometimes have a name for individual Trade Paperback in a series.

### Number

Number of the book in the series which can accept alphanumeric values like `1MU`.

### Stories

Contains information about the stories contained within an issues.

It has `Story` children elements for the individual story names. It can also have an `id` attribute that can be used to
add the identification number from the source of information.

### Summary

A description or summary of the book.

### Prices

The cost of the book when published.

It has `Price` children elements which **must** have an `country` attribute (2-letter country code defined in ISO 3166).

### CoverDate

The cover date of a periodical publication is the date displayed on the cover, which is not necessarily the true date of
publication.

For most publishers, it would be a value like `2022-07-01` if it was released to the stores on July 6, 2022. Due to
legacy industry practices both Marvel and DC
Comics have a cover date two months in the future, so if was release on July 6, 2022 it would have a cover date
of `2022-09-01`.

### StoreDate

Contains the release date of the book.

### PageCount

The number of pages in the book.

### Notes

A free text field for additional information.

### Genres

The genres of the book.

It has `Genre` children elements for the individual genres. For example, _Horror_ or _Fantasy_.

The `Genre` element can also have an `id` attribute that can be used to add the identification number from the source of
information.

### Tags

Any tags associated with the book.

It has `Tag` children elements for the individual tag values. For example, _ninja_ or _school life_.

The `Tag` element can also have an `id` attribute that can be used to add the identification number from the source of
information

### Arcs

Any story arcs the book is a part of.

It has a `Arc` element that can also have an `id` attribute that can be used to add the identification number from the
source of information.

The `Arc` element has children elements that contain the following elements:

- `Name`

  The name of the story arc.

  The `Name` element can also have an `id` attribute that can be used to add the identification number from the source
  of information

- `Number`

  An optional story arc number for the book.

### Characters

Any characters in the book.

It has `Character` children elements for the individual character names.

The `Character` element can also have an `id` attribute that can be used to add the identification number from the
source of information

### Teams

Any teams in the book.

It has `Team` children elements for the individual team names.

The `Team` element can also have an `id` attribute that can be used to add the identification number from the source of
information

### Universes

Any universes in the book.

It has a `Universe` element that can also have an `id` attribute that can be used to add the identification number from
the source of information.

The `Universe` element has children elements that contain the following elements:

- `Name`

  The name of the universe.

- `Designation`

  An optional designation for the universe.

### Locations

Any locations in the book.

It has `Location` children element for the individual location names.

The `Location` element can also have an `id` attribute that can be used to add the identification number from the source
of information

### Reprints

Any books that are reprint in the book.

It has `Reprint` children elements that contain the following element:

- `Name`

  The name of the book reprinted, for example `Strange Academy (2020) #1`

  The `Name` element can also have an `id` attribute that can be used to add the identification number from the source
  of information

### GTIN

The Global Trade Item Numbers for the book.

It has the following children elements:

- `ISBN`

The International Standard Book Number is used for books & magazine. It can be
ten or thirteen digits.

- `UPC`

The Uniform Product Code which is usually twelve digits.

### AgeRating

The age rating for the book which is usually determined by the book publisher.

Currently, there is no governing body to determine the age rating choices so each publisher has created their own.
So, for simplicity's sake we've settled on the following values (with ages given as a guideline):

- **Unknown**
- **Everyone** - Appropriate for readers of all ages.
- **Teen** - Appropriate for readers age 12 and older.
- **Teen Plus** - Appropriate for readers age 15 and older.
- **Mature** - Appropriate for readers age 17 and older.
- **Explicit** - Contains material that is more extreme than material found in R rating movies.
- **Adult** - Likely pornographic in nature

### URLs

URLs pointing to reference websites for the book.

It has the following child element:

- #### URL

  The `primary` attribute is used to identify the primary source of information used in the xml document. There can only
  be one element that can have this attribute be `true`.

### LastModified

A datetime value that is when the metadata was last written to. This most likely will be used with tagging software
which will help determine if the information source (Comic Vine, Metron, etc.) is more recent than information contained
in the XML file.

### Credits

The schema specifies each creator element can only be present once.

It has `Credit` children elements that contains the following elements:

- `Creator`

  The name of the creator. It can also have an `id` attribute that can be used to add the identification number from the
  source of information.

- `Roles` which has `Role` children elements that can have the following values:

    - Writer
    - Script
    - Story
    - Plot
    - Interviewer
    - Artist
    - Penciller
    - Breakdowns
    - Illustrator
    - Layouts
    - Inker
    - Embellisher
    - Finishes
    - Ink Assists
    - Colorist
    - Color Separations
    - Color Assists
    - Color Flats
    - Digital Art Technician
    - Gray Tone
    - Letterer
    - Cover
    - Editor
    - Consulting Editor
    - Assistant Editor
    - Associate Editor
    - Group Editor
    - Senior Editor
    - Managing Editor
    - Collection Editor
    - Production
    - Designer
    - Logo Design
    - Translator
    - Supervising Editor
    - Executive Editor
    - Editor In Chief
    - President
    - Publisher
    - Chief Creative Officer
    - Executive Producer
    - Other

  The `Role` element can also have an `id` attribute that can be used to add the identification number from the source
  of information.