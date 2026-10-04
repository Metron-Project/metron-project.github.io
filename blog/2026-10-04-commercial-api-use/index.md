---
slug: commercial-api-use
title: Using Metron in Commercial Software
date: 2026-10-04T12:00
authors: [ bpepple ]
tags: [ metron, api, licensing, opencollective ]
---

Over the last week I've received quite a few e-mails from app developers, comic shops, and other businesses that want to use the Metron API in their products. Most of them ask the same questions: whether commercial use is allowed, whether one account can serve many users, how to handle attribution, and what the situation is with cover images. Here are the answers in one place.

<!-- truncate -->

## Can I Use Metron Commercially?

Yes. Metron is run by volunteers and isn't a business, but that describes how the project is run. It doesn't limit what you can do with the data. The site's content is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0), which allows commercial use. Using Metron data in a point-of-sale system, an inventory tool, or software that serves many retailers is fine, as long as you follow the license's attribution and ShareAlike terms (covered [below](#attribution-and-sharealike)).

## How Many Accounts Do I Need?

It depends on who is using the data:

- **Apps used by many people** (for example, a mobile app, a desktop tagger, or a self-hosted server) need **each user to have their own Metron account**. Have your users sign in with their own account or API token. Don't ship your app with a single built-in account that all of your users share.
- **A business using the data for itself** (for example, a comic shop updating its online store with data from Metron, or keeping its own stock records accurate) needs **one account**. That account is for the business, and every request it makes counts toward that account's limits.

Rate limits apply per account. The standard limits are:

- **20 requests per minute**
- **5,000 requests per day**

Some things that help you stay within them:

- **Cache what you fetch.** Comic data doesn't change much once an issue has been released, so store what you've already looked up instead of requesting it again.
- **Use API tokens.** [Token authentication](/blog/token-authentication) gives each integration or user its own revocable token instead of an account password. Basic Auth will be retired eventually, so new integrations should start with tokens.
- **Read the rate limit headers.** Use the `X-RateLimit-*` headers and `Retry-After` to pace requests instead of hardcoding a budget. The [API best practices post](/blog/api-best-practices) covers this, along with other ways to cut down on requests.
- **Spread out scheduled jobs.** If your app is installed by many people, don't have every install sync at the same time. See [this section of the September update](/blog/september-2026-update#for-app-developers-dont-run-every-install-at-the-same-time) for why this matters.

If a business account needs more than 5,000 requests a day, a donation through [Open Collective](https://opencollective.com/metron) raises the daily limit for the account it's matched to, up to 25,000 requests a day. The [supporter rate limits post](/blog/supporter-rate-limits) explains how the tiers work. Please don't create extra accounts to get around the limits.

## Attribution and ShareAlike

The CC BY-SA 4.0 license has two main requirements:

**Attribution.** Wherever you show Metron data to people, credit Metron, link to the source and the license, and say if you've changed the data. For example:

> Comic data from [Metron](https://metron.cloud/), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

A line like this on an "about" or credits screen, or in the footer of pages that show the data, is enough. You don't need to credit every individual record.

**ShareAlike.** If you publish or distribute material that is adapted from Metron's data, such as a public catalogue, a dataset you share, or an export you give to other businesses, that material must also be released under CC BY-SA 4.0 (or a [compatible license](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/)). ShareAlike covers what you share with others. Data you keep inside your own system to check your stock against isn't distributed, so it doesn't trigger ShareAlike. This applies only to the data from Metron, not to the rest of your software.

This is my reading of the license, not legal advice. If your use case is unusual, the [license deed](https://creativecommons.org/licenses/by-sa/4.0/) and Creative Commons' [FAQ](https://creativecommons.org/faq/) are good places to check.

## Cover Images

Metron doesn't hold a license for cover images, and they are **not** covered by the site's CC BY-SA license. Each cover's copyright belongs to its publisher or creators. Metron hosts covers as fair use: they're mostly the same images publishers release for solicitations, and they're shown so people can identify issues.

That fair-use reasoning applies to how Metron uses the images. It doesn't automatically extend to your use. Fair use is a US doctrine, and other countries' rules differ; the UK's "fair dealing" exceptions, for example, are narrower. If you want to show covers in your software, you'll need to decide for yourself whether that's allowed where you operate, or get permission from the publishers. Many publishers and distributors provide cover images to retailers for this purpose. Using Metron only to identify comics, and not using its images, avoids the question entirely.

## Supporting the Project

Donations are very welcome. Metron is free to use, but the servers aren't free to run, and API traffic, much of it from integrations like the one described here, is the main reason hosting costs keep going up. Contributions through [Open Collective](https://opencollective.com/metron) pay for:

- **Server hosting costs**: keeping the website and API available
- **Domain registration**: annual domain renewals
- **Future capacity increases**: more resources as the database and API usage grow

All expenses are listed publicly on the [Open Collective page](https://opencollective.com/metron). Businesses can contribute as an organization, either one-time or recurring. If you want the contribution to raise your integration's rate limit, use the email address that's confirmed on the Metron account your service uses, and [don't contribute as Incognito](/blog/september-2026-update#dont-contribute-as-incognito).

If you'd like to discuss a larger sponsorship or anything that doesn't fit Open Collective, [e-mail me](mailto:bpepple@metron.cloud).

---

Thanks to everyone who asked these questions before starting, rather than finding out afterwards. If your business is thinking about using Metron and has a question this post doesn't answer, [e-mail me](mailto:bpepple@metron.cloud) or ask on [Matrix](https://matrix.to/#/#metron-general:matrix.org).
