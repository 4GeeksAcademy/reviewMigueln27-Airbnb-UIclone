"use client";

import { useEffect, useState } from "react";
import { HomeHeader } from "../components/HomeHeader";
import { HomeCategoryFilter } from "../components/HomeCategoryFilter";
import { InspirationTabs } from "../components/InspirationTabs";
import { ListingsMessage } from "../components/ListingsMessage";
import { ListingSection } from "../components/ListingSection";
import { SiteFooter } from "../components/SiteFooter";
import { SupportLinksSection } from "../components/SupportLinksSection";
import type { Listing } from "../components/ListingCard";
import type { HomeListingSection } from "../types/homeListingSection";

const sectionTitles = [
  "Popular homes in Orlando",
  "Featured hotels in Madrid",
  "Stay in Medellin",
  "Homes in Madrid",
  "Places to stay in Naples",
  "Check out homes in Fort Lauderdale",
  "Popular homes in Hollywood",
];

const listingNames = [
  "Home in Kissimmee",
  "Apartment in Madrid",
  "Loft in Medellin",
  "Condo in Naples",
  "Villa in Fort Lauderdale",
  "Room in Hollywood",
  "Studio in Orlando",
];

const listingLocations = [
  "2 beds · 2 baths",
  "1 bed · 1 bath",
  "3 beds · 2 baths",
  "4 beds · 3 baths",
  "5 beds · 4 baths",
  "2 guests · 1 bedroom",
  "Ocean view · Pool",
];

const categories = ["All", "Popular", "Beach", "Mountains", "Outdoors", "Arts & culture"];

const listingCategories = categories.slice(1);

const sections: HomeListingSection[] = sectionTitles.map((title, sectionIndex) => ({
  title,
  listings: Array.from({ length: 7 }, (_, index) => {
    const category = listingCategories[(index + sectionIndex) % listingCategories.length];

    return {
      id: `${sectionIndex}-${index}`,
      title: listingNames[(index + sectionIndex) % listingNames.length],
      location: listingLocations[(index + sectionIndex) % listingLocations.length],
      category,
      price: `$${120 + sectionIndex * 36 + index * 14} for 2 nights`,
      rating: Number((4.2 + ((index + sectionIndex) % 8) * 0.1).toFixed(2)),
      tag: index % 4 === 0 ? "Superhost" : index % 2 === 0 ? "Guest favorite" : null,
      imageUrl: `https://picsum.photos/seed/airbnb-${sectionIndex}-${index}/640/440`,
    };
  }),
}));

const tabs = [
  "Popular",
  "Arts & culture",
  "Beach",
  "Mountains",
  "Outdoors",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
];

const tabContent: Record<string, string[]> = {
  Popular: [
    "Dallas - Monthly Rentals",
    "Kauai - Vacation rentals",
    "Philadelphia - Monthly Rentals",
    "Cleveland - House rentals",
    "Gulf Shores - Condo rentals",
    "Tokyo - House rentals",
    "Barcelona - Condo rentals",
    "Amsterdam - House rentals",
  ],
  "Arts & culture": [
    "Florence - Creative stays",
    "Kyoto - Historic districts",
    "Lisbon - Gallery routes",
    "Mexico City - Design homes",
    "Paris - Museum walks",
    "Athens - Ancient neighborhoods",
  ],
  Beach: [
    "Mykonos - Sea view villas",
    "Nice - Coastal apartments",
    "Miami - Waterfront homes",
    "Bali - Surf bungalows",
    "Ibiza - Beach houses",
    "San Diego - Sunset rentals",
  ],
  Mountains: [
    "Aspen - Ski chalets",
    "Banff - Alpine cabins",
    "Andorra - Snow retreats",
    "Cusco - Valley lodges",
    "Alps - Panorama stays",
    "Hokkaido - Winter homes",
  ],
  Outdoors: [
    "Yosemite - Cabin stays",
    "Patagonia - Nature domes",
    "Lake Tahoe - Forest homes",
    "Sedona - Desert villas",
    "Moab - Trail camps",
    "Queensland - Rainforest lodges",
  ],
  "Things to do": [
    "Guided city tours",
    "Cooking workshops",
    "Sunset sailing",
    "Architecture walks",
    "Street-food tastings",
    "Family adventure packs",
  ],
  "Travel tips & inspiration": [
    "How to travel with kids",
    "Best flexible booking advice",
    "How to choose neighborhoods",
    "Plan a long-weekend getaway",
    "Packing lists for every season",
    "How to find hidden gems",
  ],
  "Airbnb-friendly apartments": [
    "Boston - Flexible lease homes",
    "Berlin - Furnished monthly stays",
    "Austin - Modern apartment rentals",
    "Toronto - Verified serviced apartments",
    "Seoul - High-speed work-friendly homes",
    "Sao Paulo - New-build rentals",
  ],
};

function filterSections(sourceSections: HomeListingSection[], typedValue: string, activeCategory: string) {
  const normalizedSearch = typedValue.trim().toLowerCase();

  return sourceSections
    .map((section) => {
      const listings = section.listings.filter((listing: Listing) => {
        const matchesCategory = activeCategory === "All" || listing.category === activeCategory;
        const matchesSearch =
          normalizedSearch.length === 0 ||
          listing.title.toLowerCase().includes(normalizedSearch) ||
          listing.location.toLowerCase().includes(normalizedSearch) ||
          listing.category.toLowerCase().includes(normalizedSearch);

        return matchesCategory && matchesSearch;
      });

      return {
        ...section,
        listings,
      };
    })
    .filter((section) => section.listings.length > 0);
}

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [allSections, setAllSections] = useState<HomeListingSection[]>([]);
  const [visibleSections, setVisibleSections] = useState<HomeListingSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setAllSections([]);
    setVisibleSections([]);

    const loadTimer = setTimeout(() => {
      setAllSections(sections);
      setVisibleSections(filterSections(sections, "", categories[0]));
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(loadTimer);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setVisibleSections(filterSections(allSections, value, activeCategory));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleSections(filterSections(allSections, searchValue, category));
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HomeHeader searchValue={searchValue} onSearchChange={handleSearchChange} />

      <main className="mx-auto w-full max-w-[1440px] space-y-10 bg-white px-4 py-8 lg:px-8">
        <HomeCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        {isLoading ? (
          <ListingsMessage message="Loading listings..." />
        ) : visibleSections.length > 0 ? (
          visibleSections.map((section) => <ListingSection key={section.title} title={section.title} listings={section.listings} />)
        ) : (
          <ListingsMessage message="No listings match your search and category filters." />
        )}

        <InspirationTabs activeTab={activeTab} tabs={tabs} tabContent={tabContent} onChangeTab={setActiveTab} />

        <SupportLinksSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
