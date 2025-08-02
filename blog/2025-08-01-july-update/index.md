---
title: July 2025 News
slug: july-2025-update
date: 2025-08-02T13:52
authors: [ bpepple ]
tags: [ comic, opencollective, codex, comicbox, documentation, comictagger ]
---

# July 2025 News

This is a summary of noticeable happenings during July.

<!-- truncate -->

## Monthly Statistics

During July the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **48**
- Issues: **1,102**
- Creators: **91**
- Characters: **407**

Thanks to everyone that contributed!

## Bulma CSS

The site has been updated to the latest version of [Bulma CSS](https://bulma.io/), so it now 
follows you computer's theme (light/dark). There's a few widgets that still need to be fixed to 
work well with the dark theme, primarily the autocomplete fields in some of the forms (Issue, 
Series. etc.), but for the most part users should be able to use either theme without running 
into any issues.

The upside of being on the most recent version of Bulma is that I can start working on adding a 
better system for [documentation](../2025-06-01-april-may-update/index.md#documentation) to the 
site, which with any luck I can get to before the end of the year. 🤞

## Darkseid / Metron-Tagger

Released new versions of [Darkseid](https://github.com/Metron-Project/darkseid) and 
[Metron-Tagger](https://github.com/Metron-Project/metron-tagger) which added support for .cb7 
and .cbt comics, in addition to some code and documentation improvements.

## MetronInfo.xml

[AJ](https://github.com/ajslater) recently released new versions of 
[ComicBox](https://github.com/ajslater/comicbox) and [Codex](https://github.com/ajslater/codex) 
that added support for [MetronInfo XML](https://github.com/Metron-Project/metroninfo).

If you're looking for a list of software that supports this relatively new format you can find a 
list of software 
[here](https://github.com/Metron-Project/metroninfo?tab=readme-ov-file#what-software-currently-supports-it).

## ComicTagger

Just a heads-up for any [ComicTagger](https://github.com/comictagger/comictagger) user, if you plan 
on tagging comics with data from Metron for an extended time (3+ hours), you may want to refrain 
from doing so, since they [currently](https://github.com/comictagger/metron_talker/issues/52) do not
take into account the site's daily rate limit of 10,000 API requests. Based on what I've been 
seeing the last few months, it's __extremely__ likely your IP address will be banned for 24 
hours or so after you exceed this limit, since you are needlessly just hammering the site.

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at
[Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future
server capacity.

Anyway, that's all I got for this month. Take care!