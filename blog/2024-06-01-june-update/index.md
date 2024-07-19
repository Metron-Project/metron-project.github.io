---
slug: june-2024-update
title: Database Series Type Changes
date: 2024-07-1901T10:09
authors: [ bpepple ]
tags: [ comic, database, metron, series, format ]
---

# Latest News

## Monthly Statistics

During June the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **26**
- Issues: **3,025**
- Creators: **189**
- Characters: **822**

Thanks to everyone that contributed!

## Database Series Type Changes

Was discussing changes to the [MetronInfo](https://github.com/Metron-Project/metroninfo) schema with the developer of 
[Kavita](https://github.com/Kareadita/Kavita), and it got me thinking about the Series Types that Metron uses.

Based on that discussion, we've consolidated `Cancelled` and `Ongoing` types to `Single Issue`, changed `Annual Series` to `Annual`, and also add `Omnibus` which would give us the following values:
* __Annual__: An over-sized special of a comic book that is released in addition to the regular comics in that series.
* __Digital Chapters__: This is where a comic is released in a digital format, but can sometimes be released in print later. 
* __Graphic Novel__: This is a comic book that comes out in the trade paperback/hardcover format without being in the serial single issue format beforehand.
* __Hardcover__: Similar to a Trade Paperback but the cover has a very thick stock just like a hardcover novel.
* __Limited Series__: This is a comic series that has a set number of issues.
* __Omnibus__: These are very large number of single issues collected in one edition.
* __One-Shot__: A story that is contained to a single issue.
* __Single Issue__: This is the serial magazine-style format of a comic. For example, `Action Comics v1 #2`.
* __Trade Paperback__: This is the most common kind of collected edition where it is usually collecting 6-12 single issues.

__Note__: Series Types descriptions are from this excellent article at [How to Love Comics](https://www.howtolovecomics.com/comic-book-glossary-of-terms/) 

In addition to those changes, we've added a new database field `status` to the `Series` model to track a series' status. The values for this field are as follows:
* __Cancelled__: Used when a _Single Issue_ or _Annual_ series is ended. Sometimes can be used when a _Limited_ series is abandoned before completing its story.
* __Complete__: Commonly used when a _Limited_, _One-Shot_, _Graphic Novel_, _Hardcover_, _Omnibus_, or _Digital Chapters_ series is ended.
* __Hiatus__: When a series stops publishing before ending with the expectation that it will be finished at a later date.
* __Ongoing__: Used with the _Single Issue_ or _Annual_ series while it is still being published.

To help users update their existing comics with the new values without having to use Metron's API to re-tag their comics, I've written [Karkas](https://github.com/bpepple/karkas) which will change the _Format_ element of a comics `ComicInfo.xml` to __Single Issue__ if they are currently __Cancelled__ or __Ongoing__, and __Annual__ if the value is __Annual Series__. Since this is a program that most likely will only be used once I've decided to not publish it to [PyPi](https://pypi.org/), but you can grab the wheel from [here](https://static.metron.cloud/misc/karkas-1.0.0-py3-none-any.whl).

To install it you just need to run:
```bash
wget https://static.metron.cloud/misc/karkas-1.0.0-py3-none-any.whl
pipx install karkas-1.0.0-py3-none-any.whl
```

Then just run:
```bash
karkas /path/to/comics
```

In the next day or so, I'll be releasing a new version of Mokkari that will include the new __Series Status__ field.

If you run into any problems, please open a bug report with the appropriate project, i.e. Metron, Karkas, Mokkari, etc.

Anyway, that's all I've got for this month. Take care!

