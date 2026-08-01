---
sidebar_position: 45
label: Kurin
---
# Kurin

## What is it?

Kurin is a C# client library for the Metron Comic Book Database API, targeting .NET 10.

## Installation

```bash
dotnet add package Metron.Api
```

## Example Usage

```csharp
using Metron.Api;
using Metron.Api.Filters;

using var client = new MetronClient(new MetronClientOptions
{
    ApiToken = "your-metron-api-token",
});

var arc = await client.Arc.GetAsync(42);

await foreach (var issue in client.Issue.ListAllAsync(new IssueFilter { SeriesId = 7 }))
{
    Console.WriteLine(issue.Number);
}

// Latest known rate-limit snapshot, updated after every request.
Console.WriteLine(client.RateLimitStatus?.BurstRemaining);
```

## Rate Limiting

Kurin implements the dual rate limits (burst + sustained) described in Metron's `RATELIMIT.md`. It tracks the `X-RateLimit-*` response headers, throttles proactively before either counter would be exhausted, and honors `Retry-After` on a `429` with bounded retries. A request still throttled after `MaxRetryAttempts` retries throws a `MetronRateLimitException` carrying the `RetryAfter` value and the last known `RateLimitStatus`.

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/kurin).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/kurin/issues).
