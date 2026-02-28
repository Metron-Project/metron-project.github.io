---
title: February 2026 News
slug: february-2026-update
date: 2026-03-01T12:26
authors: [ bpepple ]
tags: [ comic, metron, opencollective, api ]
---

# February 2026 News

## Monthly Statistics

During February the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**

Thanks to everyone that contributed!

## API

Over the last 6 months, API usage has seen a significant increase — which is great! However, we are now at a point where our current server capacity is being strained.

<img
  src={require('./server_load.png').default}
  alt="Screenshot of a CPU load"
  style={{maxWidth: '100%', height: 'auto'}}
/>

[Jonas Stendahl](https://github.com/jyggen) and I have landed [some](https://github.com/Metron-Project/metron/commit/e3178e3b2a267ad5d3643c08bfd0e4922c0d570f) [optimizations](https://github.com/Metron-Project/metron/commit/a9b90b7f112385c40b866df7aa93163b826cce45) in the site's code, but they only go so far in relieving the pressure.

That leaves us with two options:

1. **Upgrade our server capacity** — an additional $27–$43/month depending on the CPU tier selected.
2. **Reduce the daily rate-limit** from 10,000 requests to something like 5,000.

Option #1 is clearly preferable, but we currently don't receive enough [donations](https://opencollective.com/metron) to cover the extra cost. That means we will likely need to reduce the daily rate-limit in the **very** near future, and we'll post an announcement here when that happens.

If you have other ideas or suggestions, please reach out!