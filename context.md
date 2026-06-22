# Airbnb Web Page UI Clone — Specification

## Interface Goal and User

This project recreates an Airbnb-style browsing experience for a traveler who wants to discover homes, compare options in a catalog, and inspect a room detail page before booking.

## Color Scheme

| Role | Color | Hex |
|------|-------|-----|
| Background | White | `#FFFFFF` |
| Secondary | Light Grey | `#F0F0F0` |
| Accent | Neon Pink | `#FD6565` |

## Page Structure

The interface is composed of 5 sections:

1. Navbar
2. List of Houses
3. Suggestion Section
4. More Information Section
5. Footer

## 1. Navbar

### Left Side
- Logo, which returns the user to the home page.

### Middle Section
- Three navigation buttons with icon + label:
  - Homes
  - Experiences
  - Services
- Search bar split into three fields:
  - Where
  - When
  - Who
- Search action button next to the fields.

### Right Side
- "Become a host" button
- Language selector button (globe icon)
- Settings/menu button (hamburger icon)

## 2. List of Houses

Contains 7 listing sections that surface popular rentals from different locations.

### Each Listing Section Includes
- A section title in an `<h2>` with a link arrow.
- A horizontal row of listing cards.
- Visual affordance to continue browsing.

### Each Listing Card Includes
- Image
- Title (`<h2>`/heading text)
- Price (`<h3>`/price text)
- Rating with star icon and score from 1 to 5.

## 3. Suggestion Section

A tabs component with:
- Tab list showing categories
- Active tab highlighted in bold
- Tab panel that changes based on selected tab

## 4. More Information Section

Three informational columns:
- Support
- Hosting
- Airbnb

## 5. Footer

### Left Side
- Legal and policy links:
  - Date
  - Privacy
  - Terms
  - Your Privacy Choices

### Right Side
- Social links represented by icon-style controls.

## Component Specs (Vision to Spec)

The screenshot-based vision was translated into these component responsibilities:
- `HomeHeader`: top navigation + search UI
- `HomeCategoryFilter`: category chips for listing filtering
- `ListingSection`: titled horizontal listing row
- `ListingCard`: reusable card for Home and Catalog
- `InspirationTabs`: tabbed destination inspiration content
- `SupportLinksSection`: three-column support/hosting/company links
- `SiteFooter`: legal and social footer area
- `CatalogResultsToolbar`: result count + sorting controls
- `CatalogListingsGrid`: two-column layout for catalog cards
- `CatalogMapPlaceholder`: right-column map placeholder container
- `RoomHeaderInfo`: room title/location/reviews metadata
- `RoomPhotoGallery`: room gallery with previous/next and thumbnail selection
- `RoomHostOverview`: host identity and hosting info
- `RoomAmenities`: amenities list with icon labels
- `RoomBookingCard`: booking summary and guest counter
- `RoomNavigationLinks`: links back to catalog and home
- `RoomLoadingState` and `ListingsMessage`: explicit loading/empty UI states
