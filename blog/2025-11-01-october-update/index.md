---
title: October 2025 News
slug: october-2025-update
date: 2025-11-09T15:06
authors: [ bpepple ]
tags: [ comic, metron, opencollective ]
---

# October 2025 News

## Monthly Statistics

During October the [Metron Project](https://metron.cloud/) added the following to its database:

- Users: **27**
- Issues: **940**
- Creators: **83**
- Characters: **462**

Thanks to everyone that contributed!

## Website Changes

I spent most of the month working on improvements to the site.

### Major Features

#### Wiki Integration
One of the most substantial additions to Metron is the integration of **django-wiki** ([#403](https://github.com/Metron-Project/metron/pull/403)), replacing the previous flatpages system. This enhancement includes:
- A wiki with article creation, editing, and history tracking
- Custom Bulma CSS styling for all wiki templates with dark mode support
- Support for attachments and images through wiki plugins

I've copied over the information from the old flat pages, but work still needs to be done on adding information that is of use to our users.

#### Performance Optimizations for Detail Views
A fairly comprehensive performance overhaul ([#412](https://github.com/Metron-Project/metron/pull/412)) dramatically improved page load times across all detail views:
- Implemented lazy loading for related resources using HTMX
- Added `prefetch_related()` and `select_related()` to reduce database queries
- Created reusable `LazyLoadMixin` to eliminate code duplication
- Added count annotations to replace separate COUNT queries
- Introduced pagination for related items on detail pages

#### Edit History Tracking
The project now includes comprehensive edit history tracking using **django-simple-history** ([#392](https://github.com/Metron-Project/metron/pull/392)) compared to our fairly hacky prior implementation:
- Historical records for all major models (arcs, characters, creators, issues, publishers, series, teams, universes)
- Dedicated history views showing who edited what and when
- Improved data audit trail

### Feature Enhancements

#### Issue Credit Duplication
Added a convenient feature to duplicate issue credits ([#411](https://github.com/Metron-Project/metron/pull/411)), streamlining the workflow when creating issues with similar creative teams.

#### Variant Price Support
Extended the variant model to support price information ([#391](https://github.com/Metron-Project/metron/pull/391)), including price and currency fields.

#### Money Field Migration
Migrated the Issue price field to use proper MoneyField ([#390](https://github.com/Metron-Project/metron/pull/390)) using a multi-step database migrations:
- Currency support with custom widget for price entry
- Safe data migration preserving existing price information
- Enhanced API serialization for price data

#### Reprint Story Management
Added functionality to sync characters, teams, and story titles to collections ([#372](https://github.com/Metron-Project/metron/pull/372), [#373](https://github.com/Metron-Project/metron/pull/373)) from the issues being reprinted which should make it a bit easier to add collected editions.

### Code Quality Improvements

#### Refactoring Efforts
A bunch of refactoring was done to improve code maintainability:
- **Model refactoring** ([#409](https://github.com/Metron-Project/metron/pull/409)): Cleaned up model properties and methods
- **View refactoring** ([#407](https://github.com/Metron-Project/metron/pull/407)): Introduced constants and mixins for DRY code
- **API refactoring** ([#406](https://github.com/Metron-Project/metron/pull/406), [#405](https://github.com/Metron-Project/metron/pull/405)): Streamlined serializers across all endpoints
- **Template refactoring** ([#374](https://github.com/Metron-Project/metron/pull/374), [#375](https://github.com/Metron-Project/metron/pull/375)): Reorganized templates with new partial system and improved Bulma CSS integration

#### Query Optimization
Optimized database querysets across all major views ([#408](https://github.com/Metron-Project/metron/pull/408)) using `select_related()` and `prefetch_related()` to reduce N+1 query problems.

#### Testing
Added comprehensive test coverage:
- README files for test directories ([#404](https://github.com/Metron-Project/metron/pull/404))
- ForeignKey history tracking tests
- Improved test fixtures and factories

### User Experience Improvements

#### Template Modernization
Significant template improvements focused on consistency and usability:
- Introduced reusable partials for forms, pagination, and card grids
- Enhanced empty states and error messages
- Improved mobile responsiveness

#### UI/UX Enhancements
- User profile pages now show contribution statistics
- Better icon consistency across the interface
- Improved text contrast for accessibility
- Integration of Bulma Calendar for date inputs

### Infrastructure & Dependencies

#### Django Updates
- Updated to **Django 5.2.7** ([#371](https://github.com/Metron-Project/metron/pull/371)) and subsequent patch releases
- Added **django-money** for proper currency handling
- Integrated **django-htmx** for performance optimizations

#### Code Quality Tools
- Updated pre-commit hooks and code formatting rules ([#401](https://github.com/Metron-Project/metron/pull/401))
- Enforced consistent code style with djlint and ruff

### API Improvements

- Enhanced pagination schema definitions ([#398](https://github.com/Metron-Project/metron/pull/398)) (Artem Ryabkov)
- Improved serializers for better API response efficiency
- Fixed edge cases in various API endpoints

### Bug Fixes & Minor Improvements

- Fixed template rendering for mobile devices ([#395](https://github.com/Metron-Project/metron/pull/395))
- Improved empty state handling ([#399](https://github.com/Metron-Project/metron/pull/399))
- Enhanced form validation and error handling
- Better currency display in API responses
- Fixed various template formatting issues

## Future Plans

I've started to think about what I'd like to work on next year, and the big item is to reduce the project reliance on me. In particular, I want to address:

### Financial Independence

  Over the past six years, I've covered the hosting costs and related expenses (domain registration, email services, etc.). Recently, I've started drawing from the project's [OpenCollective](https://opencollective.com/metron) funds, which currently provide approximately 11 months of runway at our current capacity.

  **The Goal:** Build a sustainable funding base through many small contributions ($2-$5/month) rather than relying on a few large donors. This distributes the financial responsibility and ensures the project's long-term stability.

  **How You Can Help:**
  - Share ideas for attracting recurring financial supporters
  - Suggest ways to recognize and thank contributors (I'm considering adding [OpenCollective widgets](https://documentation.opencollective.com/collectives/raising-money/adding-donation-buttons-badges-and-banners) to the site)
  - Spread the word about the project's funding needs

  If you have suggestions or feedback, please reach out!

### Governance

  As the project has grown, so has the need to evolve from a single-person decision-making model to a more collaborative governance structure. While centralized decision-making worked well in the early days, enabling quick iterations and changes, but as the project has matured it make sense to add more leadership.

  **Why Change:** Distributing governance responsibilities will:
  - Bring diverse perspectives to project decisions
  - Reduce dependency on a single maintainer
  - Create more opportunities for community involvement
  - Ensure the project's continuity and resilience

  **Next Steps:** I'm researching governance models from similar projects, particularly the [Grand Comics Database (GCD)](https://www.comics.org/), to understand what structures work well for community-driven comic databases. My experience with [Fedora Project](https://fedoraproject.org/) governance provides a foundation, though Metron likely needs a different, more streamlined approach given our scope and community size.

  I'll be starting a discussion thread on our [GitHub Discussions page](https://github.com/Metron-Project/metron/discussions) soon. If you're interested in helping shape Metron's governance structure, please join the conversation or reach out directly.

## OpenCollective

If you would like to help keep the lights on at the project, we have an account at [Open Collective](https://opencollective.com/metron) to defray the servers costs and help with increasing future server capacity.

Anyway, I think that everything for this month! Take care.