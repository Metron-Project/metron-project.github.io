---
sidebar_position: 2
title: Schema documentation
---

This page aims at clarifying the various elements of the schema, as well as their intended use and observed ussage.

### ID

The identification number from the source of information.

The `source` attribute is required and has to be one of the following:

- Comic Vine
- Grand Comics Database
- Metron
- League of Comic Geeks

### Publisher

A person or organization responsible for publishing, releasing, or issuing a book.

### Series

Contains information about the series the book is part of. It has the following children elements:

- #### Name

    The name of the series.

- #### SortName

    The name of the series that should be used for sorting purposes. Normally this is the same as the `Name` element, but
    without any leading articles like `the`.

- #### Type

    The type of series. If must be one of the following values:

    - Annual
    - Graphic Novel
    - Limited (which covers mini/maxi series)
    - One-Shot
    - Series (which covers ongoing/cancelled series)
    - Trade Paperback

### Volume

Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple volumes.

Volumes can be referenced by numer (1, 2, 3…) or by year (2018, 2020…).

### CollectionTitle

Trade Paperback and other collections can sometimes have a name for individual Trade Paperback in a series.

### Number

Number of the book in the series which can accept alphanumeric values like `1MU`.

### Stories

Contains information about the stories contained within an issues.

It has `Story` children elements for the individual story names.

### Summary

A description or summary of the book.

### Price

The cost of the book when published.

The `currency` attribute has to be one of the following:

- pounds
- euros
- dollars

### CoverDate

The cover date of a periodical publication is the date displayed on the cover, which is not necessarily the true date of publication.

For most publishers, it would be a value like `2022-07-01` if it was released to the stores on July 6, 2022. Due to legacy industry practices both Marvel and DC
Comics have a cover date two months in the future, so if was release on July 6, 2022 it would have a cover date of `2022-09-01`.

### StoreDate

Contains the release date of the book.

### PageCount

The number of pages in the book.

### Genres

The genres of the book.

It has `Genre` children elements that can only contain the following values:

- Adult
- Crime
- Espionage
- Fantasy
- Historical
- Horror
- Humor
- Manga
- Parody
- Romance
- Science Fiction
- Sport
- Super-Hero
- War
- Western

### Tags

Any tags asscociated with the book.

It has `Tag` children elements for the individual tag values. For example, _ninja_ or _school life_.

### Arcs

Any story arcs the book is a part of.

It has `Arc` children elements that contain the following elements:

- `Name`

    The name of the story arc.

- `Number`

    An optional story arc number for the book.

### Characters

Any characters in the book.

It has `Character` children elements for the individual character names.

### Teams

Any teams in the book.

It has `Team` children elements for the individual team names.

### Locations

Any locations in the book.

It has `Location` children element for the individual location names.

### Reprints

Any books that are reprint in the book.

It has `Reprint` children elements that contain the following elements:

- `ID`

    The identification number from the source of information.

    The `source` attribute is required and has to be one of the following:

    - Comic Vine
    - Grand Comics Database
    - Metron
    - League of Comic Geeks

- `Name`

    The name of the book reprinted, for example `Strange Academy (2020) #1`

### GTIN

The Global Trade Item Numbers for the book.

It has the following children elements:

- `ISBN`

The International Standard Book Number is used for books & magazine. It can be
ten or thirteen digits.

- `UPC`

The Uniform Product Code which is usually twelve digits.

### BlackAndWhite

An optional boolean element to signify if the book is color or black and white.

### AgeRating

The age rating for the book which is usually determined by the book publisher.

Currently, there is no governing body to determine the age rating choices so each publisher has created their own.
So, for simplicity's sake the following values are currently specified in the schema:

- TODO: Add value list here.

### URL

A URL pointing to a reference website for the book.


### Credits

The schema specifies each creator element can only be present once.

It has `Credit` children elements that contains the following elements:

- `Creator`

    The name of the creator.

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