---
slug: api-rate-limit-reduction
title: API Rate Limit Reduction
date: 2026-03-04T14:55
authors: [ bpepple ]
tags: [ metron, api, mokkari, metron-tagger ]
---

# API Rate Limit Reduction

As mentioned in our [February 2026 update](/blog/february-2026-update), we have been dealing with increased server load due to the growth in API usage. We have made the decision to reduce the API rate limits effective immediately.

The new limits are:

- **20 requests per minute** (down from 30)
- **5,000 requests per day** (down from 10,000)

We know this is not ideal, and we're sorry for any inconvenience this may cause. If we receive enough [donations](https://opencollective.com/metron) in the future to cover the cost of a server upgrade, we would look at restoring the daily limit back to 10,000 requests per day.

## Updated Client Libraries

New releases of our client libraries have been published that reflect these updated rate limits:

- **[Mokkari v3.20.0](https://github.com/Metron-Project/mokkari/releases/tag/v3.20.0)** — the Python wrapper for the Metron API has been updated with the new rate limit configuration.
- **[Metron-Tagger v4.9.0](https://github.com/Metron-Project/metron-tagger/releases/tag/v4.9.0)** — updated to use the latest version of Mokkari, picking up the new rate limits automatically.

If you use either of these tools, we recommend upgrading to the latest version.

## Note for API Consumers

If you have written software that directly consumes the Metron API, please ensure your code correctly handles **HTTP 429 (Too Many Requests)** responses. When this status code is returned, the response will include a `Retry-After` header indicating how many seconds to wait before retrying. Your application should respect this header and delay its next request accordingly, rather than continuing to hammer the server. Failing to handle this gracefully may result in your requests being blocked.

If you have any questions or suggestions, don't hesitate to [e-mail me](mailto:bpepple@metron.cloud) or ping me on [Matrix](https://matrix.to/#/#metron-general:matrix.org).
