---
sidebar_position: 40
label: Shaligo
---
# Shaligo

## What is it?

Shaligo is a zero-dependency JavaScript client for the Metron Comic Book Database API, with automatic handling of Metron's rate limits and full TypeScript types.

## Installation

```bash
npm install shaligo
```

Requires Node.js 18+ (uses the built-in `fetch`) and a Metron API token generated from your account settings at [metron.cloud](https://metron.cloud).

## Example Usage

```js
import { MetronClient } from 'shaligo';

const client = new MetronClient({ token: process.env.METRON_TOKEN });

const page = await client.series.list({ name: 'Batman' });
console.log(page.count, page.results);

const series = await client.series.get(8477);
console.log(series);
```

## Rate Limiting

Metron enforces two independent counters per token: a short burst window and a longer sustained window. `MetronClient` reads the live limits from the `X-RateLimit-*` response headers on every request and, by default, pauses proactively before a request would exceed either counter.

## Documentation

Full API reference can be found at [GitHub Pages](https://metron-project.github.io/shaligo/), generated with TypeDoc and published on each push to `main`.

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/shaligo).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/shaligo/issues).
