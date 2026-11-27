---
slug: captain-america-volumes
title: Captain America Volume Numbers Have Changed
date: 2026-11-28T12:00
authors: [ bpepple ]
tags: [ comic, database, metron, series, api, tagging, metrontagger, comicbox ]
---

Metron had the wrong volume numbers for most of the Captain America series. A user [reported it](https://github.com/Metron-Project/metron/issues/678): the 1996 series was listed as volume 3, but its own covers say volume 2. The mistake carried through every Captain America series after it. I've fixed this today. If you've tagged any Captain America digital comics with Metron data, please read this before you re-tag them.

<!-- truncate -->

## What Was Wrong

The problem was the short [1954 Captain America series](https://metron.cloud/series/captain-america-1954/), which ran for three issues. Metron counted it as its own volume, so every series after it was numbered one higher than it should be. The [Grand Comics Database](https://www.comics.org/series/12466/) and the indicia printed in the comics both use the lower numbers.

The 1954 series and the 1968 series both call themselves volume 1, so they can't both be volume 1 in Metron. I've set the 1954 series to **volume 0** and added a note to that series explaining why. The later series move down by one:

| Series | Old Volume | New Volume |
| ------ | :--------: | :--------: |
| [Captain America (1954)](https://metron.cloud/series/captain-america-1954/) | 1 | 0 |
| [Captain America (1968)](https://metron.cloud/series/captain-america-1968/) | 2 | 1 |
| [Captain America (1996)](https://metron.cloud/series/captain-america-1996/) | 3 | 2 |
| [Captain America (1998)](https://metron.cloud/series/captain-america-1998/) | 4 | 3 |
| [Captain America (2002)](https://metron.cloud/series/captain-america-2002/) | 5 | 4 |
| [Captain America (2005)](https://metron.cloud/series/captain-america-2005/) | 6 | 5 |
| [Captain America (2011)](https://metron.cloud/series/captain-america-2011/) | 7 | 6 |
| [Captain America (2013)](https://metron.cloud/series/captain-america-2013/) | 8 | 7 |
| [Captain America (2017)](https://metron.cloud/series/captain-america-2017/) | 9 | 8 |
| [Captain America (2018)](https://metron.cloud/series/captain-america-2018/) | 10 | 9 |
| [Captain America (2022)](https://metron.cloud/series/captain-america-2022/) | 11 | 10 |
| [Captain America (2023)](https://metron.cloud/series/captain-america-2023-1/) | 12 | 11 |
| [Captain America (2023)](https://metron.cloud/series/captain-america-2023-1/) | 13 | 12 |
| [Captain America (2025)](https://metron.cloud/series/captain-america-2025/) | 14 | 13 |


The series names, years, and Metron IDs haven't changed. Only the volume numbers have.

## If You Mirror the Database

You don't need to do anything. Along with the volume change, the `modified` timestamp has been updated on each affected series and on every issue in those series, so the next time you sync with the `modified_gt` filter you'll get the corrected data:

```
GET /api/series/?modified_gt=2026-11-27T00:00:00Z
GET /api/issue/?modified_gt=2026-11-27T00:00:00Z
```

If you haven't set up incremental syncing yet, the [API best practices post](/blog/api-best-practices#use-modified_gt-for-incremental-sync) explains how.

## If You Tag Digital Comics

This is where you need to be careful. Any Captain America comic you tagged before today has the old volume number in its `ComicInfo.xml` or `MetronInfo.xml`. The old numbers now point to different series. For example, a comic from the 1998 series is tagged volume 4, but volume 4 is now the 2002 series.

This matters if your tagger, reader, or library manager uses the series name and volume to match comics. It can match a comic to the wrong series, and if your files are named or sorted by volume, renaming them can **overwrite comics you already have**. `Captain America v3 #1` used to be the 1996 series. Now it's the 1998 series, and the 1996 issue becomes `Captain America v2 #1`.

To stay safe:

1. **Back up your Captain America files** before changing anything.
2. **Fix one series at a time, starting with the oldest.** Do 1954 first, then 1996, then 1998, and so on. Each fix frees the volume number that the next series needs, so no two series have the same volume number at any point.
3. **Preview first.** Check what would be written before writing it.

## Fixing Your Files with Comicbox

If you'd rather just change the volume number without re-tagging, or you use comicbox already, that works too. [Comicbox](https://github.com/ajslater/comicbox) is a command line tool (and the metadata engine behind the [Codex](https://github.com/ajslater/codex) comic reader) that reads and writes ComicInfo.xml, MetronInfo.xml, and other metadata formats. It can change a single field without touching anything else in the comic. Install it with:

```sh
pipx install comicbox
```

Say your Captain America (1996) comics are in their own folder. First, see what comicbox would write without changing anything:

```sh
comicbox --dry-run -p -m "{volume: 2}" -w keep --recurse "Captain America (1996)/"
```

If that looks right, run it without `--dry-run`:

```sh
comicbox -m "{volume: 2}" -w keep --recurse "Captain America (1996)/"
```

`-m "{volume: 2}"` sets the volume to 2, and `-w keep` writes it back in every metadata format the comic already has, so both your ComicInfo.xml and MetronInfo.xml get updated. Repeat this for each series in the table above, from oldest to newest, using the new volume number for each series.

Comicbox can also re-tag comics online from Metron, using an API token from your Metron account page:

```sh
comicbox -o metron --auth metron:YOUR_TOKEN "Captain America (1996)/Captain America #001 (1996).cbz"
```

That re-tags the whole comic, not just the volume, so use the `-m` approach above if you only want to fix the volume number.

Whatever tool you use, only run it on folders you know hold a single series. Comicbox will set the same volume on every file you give it.

## Re-tagging with Metron-Tagger

If you want to pull the corrected data straight from Metron, I'd recommend [Metron-Tagger](https://github.com/Metron-Project/metron-tagger), our own tagging tool. Install it with:

```sh
pipx install metron-tagger
```

Comics that Metron-Tagger has already tagged have their Metron issue ID in their metadata, so it can look them up again without searching. It only re-downloads an issue if the issue has changed since the comic was tagged. Since every issue in these series has been updated, it will pick up the new volume numbers:

```sh
metron-tagger -om "Captain America (1996)/"
```

`-o` re-tags the comics online and `-m` writes MetronInfo.xml. Add `-c` if you also keep ComicInfo.xml in your comics. **Leave out `-r` (rename) and `-s` (sort) for now.** Rename and sort one series at a time once all of your Captain America comics have their new volume numbers, so files from different series don't collide.

If you run into problems or see another series with the same kind of volume problem, please [open an issue](https://github.com/Metron-Project/metron/issues).
