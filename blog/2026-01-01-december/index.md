---
title: December 2025 News
slug: december-2025-update
date: 2026-01-01T12:26
authors: [ bpepple ]
tags: [ comic, metron, opencollective, api ]
---

# December 2025 News

## Monthly Statistics

During December the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **TODO**
- Issues: **TODO**
- Creators: **TODO**
- Characters: **TODO**

Thanks to everyone that contributed!

## Website Development

### 🎉 New Feature: User Collections

The biggest addition this month is the brand new **User Collections** system! This feature allows users to track their personal comic book collections.

#### Key Features:
- **Collection Management**: Add, edit, and remove issues from your personal collection
- **Read Tracking**: Mark issues as read and track when you read them
- **Grading System**: Track comic condition using the CGC grading scale (0.5 to 10.0)
  - Support for professional grading companies (CGC, CBCS, PGX)
  - User-assessed grades for raw comics
- **Star Rating System**: Rate issues in your collection (1-5 stars) with HTMX-powered interactive interface
- **Format Tracking**: Track whether you own Print, Digital, or Both formats
- **Bulk Operations**: Add entire series runs at once with customizable defaults
- **Missing Issues Tracking**:
  - View incomplete series with completion percentages
  - See specific missing issues to guide collecting efforts
  - Track gaps in your runs
- **Collection Statistics**: Visual charts and statistics about your collection
- **Advanced Filtering**: Search and filter by series, publisher, format, read status, grade, and more
- **Full API Support**: Read-only API endpoints for accessing collection data and statistics

This feature includes fairly comprehensive documentation and technical documentation.

### 📚 Reading Lists Enhancements

Reading lists received some improvements this month with new features and better organization.

#### New Capabilities:
- **Issue Type Categorization**: Tag issues as Prologue, Core Issue, Tie-In, or Epilogue
  - HTMX-based inline editing for seamless updates
  - Visual badges for easy identification
- **Community Ratings**:
  - 5-star rating system for public reading lists
  - Average ratings and rating counts displayed
  - Filter lists by minimum rating
  - Interactive star rating component
- **Story Arc Integration**: Add all issues from a story arc to reading lists in one action
- **Group-Based Permissions**: New "reading list editor" group for managing Metron's curated lists
  - Allows trusted users to curate without full staff privileges.
  - **Note**: If you wish to be part of this group, please contact me.
- **Read-Only API**:
  - Browse and retrieve reading lists
  - Paginated items endpoint (50 items/page) for performance
  - Comprehensive filtering options
  - Extensive API documentation

### 🔍 Search & Filtering Overhaul

Search functionality improvements.

#### Enhanced Search Views:
- **Series Lists**: Multi-word search, filters for type, publisher, imprint, year range, status, and volume
- **Issue Lists**: Quick search with advanced filters for series info, dates, and IDs
- **Reading Lists**: Search by name, creator, attribution source, and privacy status
- **User Collections**: Quick search across series names and notes with advanced multi-field filtering

All search interfaces now feature:
- Collapsible advanced filter sections
- Filter state preservation
- Active filter indicators
- Improved empty states
- Consistent UI patterns

### 🐛 Critical Bug Fixes

#### Week Views Date Calculation Fix (#437)
Fixed a significant bug where WeekList, NextWeekList, and FutureList views were using class-level date calculations evaluated at import time. This caused views to always show the same week (from server startup) instead of dynamically updating.

**Solution**: Moved date calculations to per-request methods and switched to precise date range queries.

### 📱 Mobile Improvements

- Fixed filter button functionality on mobile devices
- Improved home page mobile responsiveness
- Fixed home.html layout issues on mobile
- Enhanced button layouts across collection and reading list views

### 🎨 UI/UX Enhancements

- **Home Page Updates**:
  - Added Reading List & Collections section
  - Made first information card full width
  - Layout improvements for better visual hierarchy
- **Optimized Queries**: Significantly reduced N+1 queries across detail views
  - Reading list detail views reduced from ~20 to 4-6 queries
  - Better prefetching and annotation strategies
- **Cover Images**: Added cover images and descriptions to collection detail views with lazy loading

### 🔒 Security & Validation

- Improved permission checks across reading list operations

### 🔧 Technical Improvements

- **Django Update**: Upgraded to Django 5.2.9
- **Documentation**: Extensive new documentation for User Collections and Reading Lists
  - User guides (README.md files)
  - Technical documentation for developers
  - API documentation
- **Code Organization**: Refactored and simplified views with better inheritance patterns


### Looking Ahead

With the User Collections feature now live and Reading Lists enhanced, there is a solid foundation for comic book tracking and curation. Future work will focus on refining these features based on user feedback and exploring additional integration opportunities.

# Desaad: A Comic Book Library Management System

## What is Desaad?

[Desaad](https://codeberg.org/bpepple/desaad) is a self-hosted, web-based comic book library management and reading application built with Django, that I've been working on the last week or so. I created it to help test/plan features in Metron that might be of use to comic servers.

## Key Features

### Library Management

Desaad imports your CBZ, CBR, and PDF comic archives and automatically extracts metadata including series information, publishers, creators, characters, teams, universes, and story arcs from MetronInfo.xml metadata. There are no plans to add support for ComicInfo.xml.

The application uses [Darkseid](https://github.com/Metron-Project/darkseid) for comic archive handling and metadata extraction.

### Built-in Web Reader

The web reader using [HTMX](https://htmx.org/) automatically saves your reading position and progress, so you can pick up right where you left off.

### Reading Lists

Import reading lists from [Metron](https://metron.cloud) using the API. The reading list feature automatically tracks which issues are in your library and identifies missing issues from your collection.

### OPDS 1.2 Catalog Support

Access your comic library from mobile devices and e-readers using OPDS-compatible applications like Chunky Comic Reader (iOS), Panels (iOS), or Challenger Comics Viewer (Android).

I attempted to test it on the Challenger app, but their OPDS support doesn't seem to work and is marked as a Beta feature.

### Auto-Import Functionality

Currently, there is an import management command that can be either using manually or setup to watch a directory for new comics.

I haven't done much optimization on it yet, but the most costly aspect of it is the cover extraction, which most likely will be moved to a background task sometime in the future.

I deployed it on an extra [GMKtec NucBox G3](https://www.gmktec.com/products/nucbox-g3-most-cost-effective-mini-pc-with-intel-n100-processor) I had laying around, and it took about 3 hours to import around 65,000 comics. Moving the cover extraction to a background task, I can most likely get it down to an 1-2 hours.

## Technical Foundation

Desaad is built on:

- **Backend**: Django 6.0
- **Database**: SQLite for simplicity (for now... most likely it will change to PostgreSQL, since there are some serious performance/missing capabilities with using SQLite)
- **Frontend**: Bulma CSS framework with HTMX 
- **Comic Processing**: [Darkseid](https://github.com/Metron-Project/darkseid) library
- **Deployment**: Container-ready with Podman support and systemd integration

The application requires Python 3.13+ and uses the modern [uv](https://github.com/astral-sh/uv) package manager for fast, reliable dependency management.

## Important Considerations

Desaad is designed with specific assumptions in mind:

1. **Single Metadata Source**: The application assumes all comics use metadata from a single source (Metron, Comic Vine, etc.). Mixed metadata sources are not currently supported.

2. **MetronInfo.xml Format**: The application exclusively supports the MetronInfo.xml metadata specification. Your comics should have metadata written by software implementing this specification.

3. **Under Active Development**: The project is currently under heavy construction and not yet recommended for production use. Features and APIs may change.

## Who Should Use Desaad?

Desaad is ideal for:

- **Developers/Testers** who prefer browser-based reading and are interested in seeing possible new features, like scrobbling. 
- **Users with metadata from a single source** Metron, Comic Vine, or Grand Comics Database. If your collection is a hodgepodge of metadata from multiple source, Desaad is not for you.

## Getting Started

Setting up Desaad is straightforward:

```bash
# Clone the repository
git clone <repository-url>
cd desaad

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Install dependencies and setup
uv sync
uv run python manage.py migrate
uv run python manage.py createsuperuser
uv run python manage.py collectstatic

# Run the development server
uv run python manage.py runserver
```

For production deployments, Desaad includes Podman compose configurations with systemd service integration for easy management.

## Container Deployment

If you are using Fedora Linux, the included Podman configuration should make deployment simple. Theoretically, it should work fine on other OS's running Podman, but it hasn't been tested. Using it should pretty just consist on doing the following:

```bash
# Build and start
podman-compose up -d

# Create admin user
podman-compose exec web python manage.py createsuperuser

# Import comics
podman-compose exec web python manage.py import_comics
```

The application will be available at `http://localhost:9000`.

There's more information in the [projects](https://codeberg.org/bpepple/desaad) README.md, like creating [systemd](https://systemd.io/) service files.

---

*Note: Desaad is currently in active development. Please check the repository for the latest updates and stability information before deploying in production environments.*


