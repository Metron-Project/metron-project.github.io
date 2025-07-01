---
title: June 2025 News
slug: june-2025-update
date: 2025-07-01T10:52
authors: [ bpepple ]
tags: [ comic, metadata, metron, opencollective, darkseid, metrontagger ]
---

# June 2025 News

## Monthly Statistics

During June the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **45**
- Issues: **1,786**
- Creators: **228**
- Characters: **448**

Thanks to everyone that contributed!

## Final Order Cutoff (FOC) Dates

With Diamond [announcing](https://www.comicsbeat.com/diamond-announces-print-previews-to-end/) 
they will stop printing their Previews, I had some comic industry people contact me about adding 
the Final Order Cutoff (FOC) dates to upcoming issue releases. With that information, users 
could use our API to create their pull lists. This was a fairly simple request, which won't 
affect most users (since my tools that import upcoming releases will handle it) and was 
[added](https://github.com/Metron-Project/metron/pull/354) to the site on June 17th.

One thing I still need to decide on is, whether to add new releases that don't have there final 
cover dressing released (Marvel, in particular, tends to release them __really__ late) or not. If 
this was done, I would need to modify my tools to make it easier to update the issue covers with the 
final version when it is released, and most likely clean the sites cover cache more frequently.   

## Darkseid / Metron-Tagger Release

I spent a bit of time this month refactoring [Darkseid](https://github.com/Metron-Project/darkseid) 
and [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) which should make it easier 
maintain and give a bit of a performance improvements. If you are interested in the changes, they 
are here: 
[Darkseid Release Notes](https://github.com/Metron-Project/darkseid/releases/tag/v6.0.0) & 
[Metron-Tagger Release Notes](https://github.com/Metron-Project/metron-tagger/releases/tag/v4.0.0)

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at 
[Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future 
server capacity.

Anyway, that's all I got for this month. Take care!