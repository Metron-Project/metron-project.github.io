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


