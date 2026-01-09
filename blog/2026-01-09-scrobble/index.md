---
title: Collection Scrobbling
slug: collection-scrobbling
date: 2026-01-09T12:46
authors: [ bpepple ]
tags: [ comic, metron, scrobbling ]
---
## Introducing Collection Scrobbling

We've added a new scrobble endpoint to Metron that makes tracking your comic reading progress more convenient.

### What is Scrobbling?

Scrobbling is a quick way to mark an issue as read via the API. The term comes from music services like Last.fm, where it refers to automatically tracking what you're listening to. For Metron, it means you can instantly log that you've finished reading a comic issue without navigating through the web interface.

### How It Works

The new `/api/collection/scrobble/` endpoint accepts a simple POST request with an issue ID. When you scrobble an issue, Metron will:

- Mark the issue as read in your collection
- Record the exact date and time you finished it
- Optionally save a star rating (1-5)
- Automatically add the issue to your collection if it's not already there

If the issue doesn't exist in your collection yet, scrobbling creates a new collection item with reasonable defaults (digital format, quantity of 1). If it's already in your collection, the endpoint just updates the read status and timestamp.

### Why We Built This

The web interface works fine for managing your collection, but marking issues as read can feel cumbersome when you're actively reading. You have to navigate to the right page, find the issue, click edit, check the box, and save. That's several steps just to record something simple.

Scrobbling reduces this to a single API call. This opens up possibilities for:

- **Browser extensions** that add a "mark as read" button to digital comic readers
- **Mobile apps** that track reading activity in the background
- **Import scripts** that bring in reading history from other services
- **Reading tracker tools** that focus specifically on logging your progress. If you are using [Dessad](https://codeberg.org/bpepple/desaad) this feature has already been added.

### Technical Changes

To support more precise tracking, we migrated the `date_read` field from `DateField` to `DateTimeField`. This means you can now track exactly when you finished reading an issue, not just which day. All existing data was preserved during the migration.

### Reading History

Along with scrobbling, we added a reading history view that displays your recently-read comics in a timeline format. You can see:

- When you read each issue (with exact timestamps)
- Cover thumbnails for quick visual reference
- Format badges showing whether you read print or digital
- Your star ratings

The full reading history is available at `/collection/history/`, and your user profile now shows your 10 most recent reads.

### Getting Started

To scrobble an issue, make a POST request to `/api/collection/scrobble/`:

```json
{
  "issue_id": 12345,
  "date_read": "2026-01-08T14:30:00Z",
  "rating": 4
}
```

The `date_read` and `rating` fields are optional. If you omit `date_read`, it defaults to the current timestamp.

Authentication is required (Basic Auth or session), and the endpoint respects collection privacy—you can only scrobble to your own collection.

### What's Next

The scrobble endpoint provides a foundation for better reading tracking. We'd like to see what tools the community builds with it. If you create a browser extension, mobile app, or other integration, let us know.

For complete API documentation, see the [User Collection Documentation](https://metron.cloud/wiki/user-documentation/user-collection/#wiki-toc-quick-scrobble-api).
