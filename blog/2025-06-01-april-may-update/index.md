---
slug: april-may-2025-update
title: April / May 2025 Update
date: 2025-06-01T10:52
authors: [ bpepple ]
tags: [ comic, metadata, metron, opencollective ]
---

# April / May 2025 News

## Monthly Statistics

During April the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **49**
- Issues: **3,051**
- Creators: **709**
- Characters: **1,288**

And during May the following were added:

- Users: **46**
- Issues: **3,398**
- Creators: **208**
- Characters: **1,222**

Thanks to everyone that contributed!

## Metron-Tagger

A couple of [new](https://github.com/Metron-Project/metron-tagger/releases/tag/v3.4.0) 
[releases](https://github.com/Metron-Project/metron-tagger/releases/tag/v3.5.0)
of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) were made in April. They primarily consisted
of the following new features from [Adrian Petrescu](https://github.com/apetresc):

- If passing more than one comic when using the `--id` option it is assumed the id number is the Metron Series id. For
  example if you ran the following, it would assume all the issue in that directory where of the same series and improve
  the odds of a match:

  ```metron-tagger -m --id 9513 ~/Comics/DC\ Comics/Metamorpho\ -\ The\ Element\ Man/```

- Added a `--accept-only` option to automatically accept single valid matches, regardless of the
  cover [phash](https://en.wikipedia.org/wiki/Perceptual_hashing) [hamming distance](https://en.wikipedia.org/wiki/Hamming_distance).

## Documentation

Currently, the documentation for Metron is
using [Django's](https://www.djangoproject.com/) [flatpages](https://docs.djangoproject.com/en/5.2/ref/contrib/flatpages/),
which isn't great since it's very bare-bones, and I'd need to muck around with account permissions for regular users
to edit them.

So, I'm planning to add [django-wiki](https://github.com/django-wiki/django-wiki) to the site to handle the
documentation, since it fixes the short-comings of using flatpages. Unfortunately, to have it not stick out like a
sore-thumb compared to the rest of the site, I'll need
to [override the templates](https://docs.djangoproject.com/en/5.2/howto/overriding-templates/) for that app. To make
matters more difficult, [django-simple-bulma](https://github.com/lemonsaurus/django-simple-bulma) still uses v0.9.4
instead of v1.0.*, so that will need to be updated first (since I don't want to override django-wiki's templates 
twice). I've started working on doing [that](https://github.com/lemonsaurus/django-simple-bulma/pull/107), but since 
upstream's (and mine) free time is fairly limited there isn't an ETA when that will happen. 😥

## Trade Paperbacks

Tying into the above topic, one constant source of confusion on the site is the handling of Trade Paperbacks (which
is mainly due to the industries inconsistent handling of them over the last 30+ years). So, until better
documentation on their handling is written, adding new TPB series has been temporarily _disabled_. I don't have
an ETA when they'll be written (truthfully, I don't have much interest in TPB's), so if you'd like to help out
writing them, contact me.

## Miscellaneous

- `Translator` was added as an option for a creator role.

## OpenCollective

If you would like to help the project, we have an account at [Open Collective](https://opencollective.com/metron) to 
defray the servers costs and help with increasing future server capacity.

Anyway, that's all I got for this month. Take care!

