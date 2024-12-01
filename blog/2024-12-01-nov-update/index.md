---
slug: november-2024-update
title: Novemer 2024 Update
date: 2024-12-01T15:52
authors: [ bpepple ]
tags: [ comic, metadata, comicvine, opencollective, metron, api ]
---

# November 2024 News

## Monthly Statistics

During November the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **31**
- Issues: **2,210**
- Creators: **104**
- Characters: **426**

Thanks to everyone that contributed!

## Metron-Tagger v3.1.0

I released a new [version](https://github.com/Metron-Project/metron-tagger/releases/tag/v3.1.0)
of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) today that adds the ability to migrate data from a
comic that contains a `ComicInfo.xml`.

The conversion from `ComicInfo.xml` -> `MetronInfo.xml` does have some caveats though:

- Elements containing data with a comma in a delimited ComicInfo element. If for example, the `Title` element contained
  a story call *"Babs: True Blue, I Love You"* and it was originally written with a tool other than Metron-Tagger it
  will split the story into two element items: *Babs: True Blue* and *I Love You* .
- Ratings.
  We [map](https://github.com/Metron-Project/darkseid/blob/2abac78a972a460482cf48be4580295179f45ffe/darkseid/metroninfo.py#L138)
  these to the enums used in MetronInfo, but it's not perfect since the ComicInfo documentation isn't terribly clear how
  it defines it values, so if you feel our mapping is incorrect please notify us and explain what it should be. Also,
  I've seen some users use non-valid values which obviously won't work.
- Series Format. We've also done our best
  to [map](https://github.com/Metron-Project/darkseid/blob/2abac78a972a460482cf48be4580295179f45ffe/darkseid/metroninfo.py#L148)
  the series format, but this is even *less* defined the age rating since this is just a text element in the schema, and
  could be anything. We've used
  the [values](https://github.com/comictagger/comictagger/blob/5df935915140d2dd443efd0ee5a5619726a95e48/comictaggerlib/taggerwindow.py#L1436)
  in Comic-Tagger to handle the conversion, but this isn't perfect.

To migrate your `ComicInfo.xml` to `MetronInfo.xml` without any online lookup would simply run:

```
metron-tagger --migrate /path/to/comics
```

If you wanted to tag you comics with data from the Metron Comic Book Database, and migrate the data from the existing
`ComicInfo.xml` for those comics not on Metron, you would run:

```
metron-tagger -om --migrate /path/to/comics
```

If you run across any bugs or have suggestions for improvements, please file
a [Bug Report or Feature Request](https://github.com/Metron-Project/metron-tagger/issues/new/choose).

## Server Upgrade

Finally got around to [upgrading](https://metron-project.github.io/blog/october-2024-update#server-os-upgrade) the
server, and it was fairly uneventful. Yay! 🎉

## OpenCollective

The main repository has finally reached 100 stars, and so most likely in the next week or two, I'll set up a funding
option at [Open Collective](https://opencollective.com/) to help defray the server costs and help with increasing future
server capacity.

## Future

Now the bulk of the work is done with getting the [MetronInfo](https://github.com/Metron-Project/metroninfo) out the
door and some initial tooling to generate them, I'm planning to work on some low-hanging bugs with the website over the next month
or so, before starting any large scale projects.

Anyway, that's all I've got for this month. Take care!