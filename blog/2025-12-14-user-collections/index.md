---
title: User Collections
slug: user-collections
date: 2025-12-14T15:26
authors: [ bpepple ]
tags: [ comic, metron, collections ]
---
# Introducing User Collections: Track Your Comic Book Collection with Metron

I've spent the last week or so, implementing **User Collections**, a feature for Metron that lets you catalog, organize, and track your personal comic book collection. 

## What is User Collections?

User Collections is a comic book collection management system.

## Key Features

### 📚 Complete Cataloging

Track every aspect of your collection:
- **Quantity tracking** for duplicate copies
- **Format support** (Print, Digital, or Both)
- **Professional grading** (CGC, CBCS, PGX) or self-assessed grades
- **Purchase details** including date, price, and store
- **Storage locations** to help you find your comics
- **Personal notes** for each item

### ⚡ Bulk Operations

Adding your entire collection is fast and efficient:
- **Add entire series runs** in seconds with the "Add from Series" feature
- **Specify issue ranges** to add specific portions of a series
- **Automatic duplicate detection** prevents adding the same issue twice
- **Smart defaults** for format and reading status when adding multiple issues

### 📊 Statistics & Analytics

Get insights into your collection:
- **Total items and value** tracking
- **Reading progress** (read vs. unread counts)
- **Format breakdown** with visual charts
- **Publisher distribution** to see where your collection focuses
- **Top 10 series** by item count
- **Series type analysis** (ongoing, mini-series, etc.)

### 🔍 Smart Gap Detection

Helps you complete your series runs:
- **Missing Issues list** shows series where you own some but not all issues
- **Color-coded progress bars** (red/yellow/green) indicate completion percentage
- **Detailed missing issue views** list exactly which issues you need
- **Completion statistics** help you prioritize which series to finish

### ⭐ Reading Tracker & Ratings

Track your reading journey:
- **Mark issues as read** with date tracking
- **5-star rating system** for personal recommendations
- **Quick rating** via HTMX (no page reload required)
- **Filter by reading status** to find unread comics

### 🔐 Privacy First

Your collection is completely private:
- **Login required** for all collection features
- **No public sharing** (unlike reading lists)
- **Owner-only access** ensures only you can view/edit your items

## How It Works

### Adding Individual Issues

Navigate to `/collection/add/` and search for any issue using the autocomplete feature. Fill in optional details like grade, purchase price, storage location, and click "Add to Collection."

### Bulk Adding from Series

Visit `/collection/add-from-series/` to quickly add entire series runs:
1. Select a series
2. Choose to add all issues or specify a range (e.g., #1-50)
3. Set default format and reading status
4. Click "Add Issues"

The system automatically skips issues already in your collection, making it perfect for cataloging longboxes or digital libraries.

### Finding Missing Issues

The Missing Issues feature (`/collection/missing/`) identifies gaps in your series runs:
- See completion percentages for each series
- Click "View Missing" to see specific issue numbers
- Use these lists when shopping for back issues
- Track your progress toward completing series

## Powerful Filtering

Find exactly what you're looking for with extensive filtering options:
- **Series name, publisher, or imprint**
- **Grade and grading company**
- **Format (print/digital/both)**
- **Reading status and ratings**
- **Storage location or purchase store**
- **Combine multiple filters** for precise searches

## Technical Highlights

Built on Django with:
- **CGC grading scale** with 27 grade levels (0.5 to 10.0)
- **Money field support** for accurate purchase price tracking
- **HTMX integration** for seamless rating updates
- **Chartkick visualizations** for statistics
- **Optimized queries** with proper indexes for performance
- **Unique constraints** prevent duplicate entries
- **RESTful API** available at `/api/collection/`

## Use Cases

**For Completionists**: Use Missing Issues to systematically fill gaps in your series runs. Color-coded progress bars show which series you're close to completing.

**For Investors**: Track purchase prices and grades for valuable books. Monitor total collection value and maintain detailed records for insurance.

**For Readers**: Mark issues as read, rate them, and track your progress. Filter to find unread comics in your collection.

**For Organizers**: Use storage locations to keep track of where comics are physically stored. Perfect for managing multiple longboxes or storage units.

## Mokkari

A new release of [Mokkari](https://github.com/Metron-Project/mokkari) will be made this week with support for the user collections API endpoints.

## Possible Future Enhancements

**More Import Options**: When I get some time, I'll look at adding support for importing existing collections. If you track your collection elsewhere I'd be interest what export options you have, so please contact me.

**Wish List**: A logical addition would be to have the option for make a wish list of issues to purchase.

**Pull List**: Another closely related feature that could be useful.

**Comic Value**: It would be interesting to be able to provided estimated market values for issues.