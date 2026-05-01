---
slug: april-2026-updates
title: April 2026 Updates
date: 2026-05-01
authors: [bpepple]
tags: [release, features, performance, security]
---

Here's a summary of everything that landed in Metron since the beginning of April 2026.

<!-- truncate -->

# April 2026 News

## Monthly Statistics

During April the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **180**
- Issues: **4,923**
- Creators: **376**
- Characters: **1,096**

Thanks to everyone that contributed!

## New Features

### Community Governance Polls

Registered users can now participate in site governance through the new **Polls** app. Site admins can create time-bounded polls and users can cast a single vote per poll during the active window. Once the poll closes, results are visible to everyone. A link to active polls appears in the main navigation bar.

### UK Publisher and GBP Currency Support

Publishers based in the United Kingdom can now be added to the database, and issue cover prices can be recorded in **GBP** alongside the existing USD support. The issue detail API response now includes a `price_currency` field so API consumers can distinguish between currencies without parsing the price string.

### Publisher Filter for Reading List API

The Reading List API endpoint now accepts a `publisher` query parameter, matching the filtering already available in the web interface. This makes it easier to fetch reading lists scoped to a specific publisher programmatically.

## Performance Improvements

### Indexes on Hot API Query Paths

Additional database indexes were added to the Issue and Series models based on an analysis of the most frequently executed API queries. Combined with making the `unaccent` function immutable, these indexes give PostgreSQL more opportunities to avoid full-table scans on the busiest code paths. ([Jonas Stendahl](https://github.com/jonasStendahl))

### GIN Trigram Indexes for Search and Autocomplete

All unaccent `icontains` searches — used for the Arc, Character, Creator, Imprint, Publisher, Team, and Universe autocomplete fields — previously relied on standard B-tree indexes that PostgreSQL could not use for partial-string matching. These have been replaced with **GIN trigram indexes** on the unaccented name column, allowing PostgreSQL to use index scans instead of sequential scans for every search and autocomplete lookup. ([Brian Pepple](https://github.com/bpepple))

### HTTP/2 and Gzip Compression

The nginx proxy now serves all responses over **HTTP/2** and compresses them with **gzip**, reducing both page load latency and bandwidth consumption for all users. ([Jonas Stendahl](https://github.com/jonasStendahl))

## Security and Infrastructure

The bulk of the infrastructure work in April was a full server migration from **Ubuntu** to **CentOS**, moving all services into **Podman** containers managed by Quadlet systemd unit files. This migration brought with it a number of security and reliability improvements described below.

### Anubis Bot-Protection Proxy

Browser traffic now passes through [Anubis](https://anubis.techaro.lol/), a proof-of-work challenge proxy that sits between nginx and the application. Visitors solve a lightweight in-browser challenge on their first request; subsequent requests are passed through automatically using a signed cookie backed by persistent BBolt storage. The `/api/` path is fully exempted so API consumers are unaffected, and HTMX partial requests are allowed through once the initial challenge has been passed.

Alongside Anubis, a set of targeted nginx deny rules blocks common bad actors: PHP exploit scanners, bots spoofing Chrome with fake version strings, Facebook and Apple crawlers, and clients sending requests with no User-Agent header at all.

### fail2ban Integration

[fail2ban](https://github.com/fail2ban/fail2ban) jails now automatically ban IPs that generate excessive **401**, **403**, **404**, **429**, or **499** responses, as well as IPs that send requests with no User-Agent. Bans are enforced via the firewalld drop zone so they take effect at the network layer before nginx processes the connection.

### Migration to Podman

The production deployment has been migrated from a bare-metal installation to **[Podman](https://podman.io/)** with Quadlet systemd unit files. Each service (nginx, gunicorn, Anubis, PostgreSQL, Redis) is now managed as a native systemd service, improving process supervision and startup ordering.

As part of this migration, **[Jonas Stendahl](https://github.com/jonasStendahl)** joined the project as a system administrator and contributed to the infrastructure work.

### PostgreSQL Backups to DigitalOcean Spaces

Automated off-droplet database backups are now shipped to **DigitalOcean Spaces** on a nightly schedule, providing an off-site recovery point independent of the primary VPS.

### S3 Reliability Improvements

The S3 client used for cover image storage received several reliability fixes: configurable socket timeouts and TCP keepalive settings to handle intermittent connectivity issues, an increase in retry attempts to 3, and a short-circuit that skips the S3 download in `pre_save_cover_hash` when the image field has not changed.

## Developer Experience

### GitHub Actions CI

A GitHub Actions workflow now runs on every push and pull request, executing the full **ruff** linter and **pytest** test suite in parallel. This gives contributors fast feedback without needing to set up a local environment.

## OpenCollective

A huge thank you to everyone who has contributed to our [Open Collective](https://opencollective.com/metron)! Your support makes a real difference in keeping the Metron Project running and growing.

### What Your Contributions Support

Funds from Open Collective go directly toward:

- **Server hosting costs** - Keeping the Metron website and API available
- **Domain registration** - Annual domain name renewals
- **Future capacity increases** - Scaling resources as the database and user base grows

All expenses are transparent and publicly viewable on our [Open Collective page](https://opencollective.com/metron), so you can see exactly where every dollar goes.

### Support the Project

If you'd like to help keep the lights on and support continued development, contributions of any size are appreciated and help ensure Metron remains a free resource for the comic book community.

Anyway, that's everything for this month! Take care.
