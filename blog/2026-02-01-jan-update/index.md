---
title: January 2026 News
slug: january-2026-update
date: 2026-02-01T12:26
authors: [ bpepple ]
tags: [ comic, metron, opencollective, api ]
---

# January 2026 News

## Monthly Statistics

During January the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**

Thanks to everyone that contributed!

## Website Updates

### New Features

**Scrobble API Support**  
A new `/scrobble` endpoint allows users to quickly mark issues as read via the API with optional rating and timestamp. This enables integration with third-party reading apps and automated tracking workflows. The `date_read` field was migrated from a date to datetime for more precise tracking.

**Reading History**  
Users can now view their reading history in a timeline layout with monthly grouping. Recent reading activity also appears on user profile pages.

**Multiple Read Dates**  
Collection items now support tracking multiple read dates, since comic issues are often re-read over time. The UI includes HTMX-powered controls for adding and removing read dates directly from the detail page.

**Community View**  
User profiles now use username-based URLs (`/accounts/username/`) instead of numeric IDs. A new user list view with search functionality was added, making it easier to find and view other community members.

### Improvements

**HTMX Migration**  
Significant portions of the frontend JavaScript have been replaced with HTMX:
- Global HTMX import in the base template
- Navbar burger menu converted to HTMX
- File upload handlers simplified with inline onchange attributes
- Notification dismissals now use HTMX
- Modal dialogs for read date deletion converted to HTMX
- Removed several legacy JavaScript files (jquery.formset.js, bulma-modal.js, bulma-navbar-burger.js, bulma-notifications.js)

**Auto-Dismissing Notifications**  
Non-error notifications now automatically disappear after 5 seconds. Error messages remain visible until manually dismissed.

**Issue Autocomplete Search**  
The issue autocomplete now supports more flexible searching:
- Search terms can be in any order ("Spider Amazing" matches "Amazing Spider-Man")
- Series year filtering using parentheses (e.g., "Speed Racer (2025) #4")

### Bug Fixes

- Fixed duplicate issue creation race condition—users now see a friendly error instead of a 500 error
- Fixed SlugRedirectView when requesting non-existent items
- Fixed success message formatting in user account activation
- Fixed sequential read date deletion (HTMX event handlers now reinitialize properly after content swaps)

### Infrastructure

- Updated to Django 5.2.10
- Removed request for GitHub stars from the welcome flow

## Desaad Updates

The following changes were made to [Desaad](https://codeberg.org/bpepple/desaad).

### Scrobbling to Metron

Issue scrobbling was added this month, and more information on it can be found in this [blog post](../2026-01-09-scrobble/index.md).

### Database Migration to PostgreSQL

The application has migrated from SQLite to PostgreSQL. This followed an initial attempt to improve SQLite concurrency with WAL mode and retry logic, but PostgreSQL proved to be a better fit for handling concurrent operations during comic imports while the web server is running.

#### Reader Improvements

The comic reader received several updates:

- Added previous/next issue navigation for reading through a series
- Added gesture hints overlay to help users discover touch controls
- Implemented browser caching for page images with proper HTTP cache headers (ETag, Cache-Control)
- Improved performance by using the stored page count from the database rather than reading from the archive each time
- Added customizable auto-hide delay for reader controls

After testing both approaches, the reader reverted to using base64 image data instead of image URLs, as this provided a better reading experience.

### Background Task Processing

The app now uses Django 6.0's Tasks framework with django-tasks[rq] for several operations:

- **Reading list imports** now run asynchronously with status polling via HTMX
- **Cover extraction** is deferred to a background queue, making initial imports faster
- **Missing reading list items** are automatically linked when matching issues are imported

### Metron Integration

A new `import_reading_status` management command allows users to sync their reading history from their Metron collection. This imports completion status and ratings for issues that match by Metron ID. Currently, it only imports the read status, but in the near future it will add the dates the issues were read on also.

### HTMX Adoption

Replaced JavaScript with HTMX in several places:

- Notification dismiss buttons
- Reading list detail page (delete modal, hide/show missing toggle)
- Navbar burger menu

### Other Changes

- Added sorl-thumbnail with Redis cache backend for cover images
- Added cover images to the series list view
- Added a home view showing next unread issues for started series
- Added completion indicators to reading list overview
- Added django-debug-toolbar for development
- Various container and deployment fixes