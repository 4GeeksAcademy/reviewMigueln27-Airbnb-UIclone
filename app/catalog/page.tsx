"use client";

import { useMemo, useState } from "react";
import { CatalogListingsGrid } from "../../components/CatalogListingsGrid";
import { CatalogMapPlaceholder } from "../../components/CatalogMapPlaceholder";
import { CatalogResultsToolbar } from "../../components/CatalogResultsToolbar";
import { HomeHeader } from "../../components/HomeHeader";
import { ListingsMessage } from "../../components/ListingsMessage";
import { type Listing } from "../../components/ListingCard";
import { SiteFooter } from "../../components/SiteFooter";
import { SupportLinksSection } from "../../components/SupportLinksSection";

type SortOrder = "asc" | "desc";

const catalogListings: Listing[] = [
  {
    id: "c-1",
    title: "Home in Kissimmee",
    location: "Near Disney · 7 beds",
    category: "Popular",
    price: "$652 for 2 nights",
    rating: 5.0,
    tag: null,
    imageUrl: "https://picsum.photos/seed/catalog-1/640/440",
  },
  {
    id: "c-2",
    title: "Townhouse in Kissimmee",
    location: "Resort villa · 7 beds",
    category: "Popular",
    price: "$513 for 2 nights",
    rating: 4.92,
    tag: "Guest favorite",
    imageUrl: "https://picsum.photos/seed/catalog-2/640/440",
  },
  {
    id: "c-3",
    title: "Home in Kissimmee",
    location: "Pool + game room · 7 beds",
    category: "Outdoors",
    price: "$536 for 2 nights",
    rating: 4.9,
    tag: "Superhost",
    imageUrl: "https://picsum.photos/seed/catalog-3/640/440",
  },
  {
    id: "c-4",
    title: "Home in Davenport",
    location: "Family-friendly villa · 5 beds",
    category: "Popular",
    price: "$547 for 2 nights",
    rating: 5.0,
    tag: null,
    imageUrl: "https://picsum.photos/seed/catalog-4/640/440",
  },
  {
    id: "c-5",
    title: "Home in Orlando",
    location: "Lakefront retreat · 4 beds",
    category: "Beach",
    price: "$626 for 2 nights",
    rating: 5.0,
    tag: "Guest favorite",
    imageUrl: "https://picsum.photos/seed/catalog-5/640/440",
  },
  {
    id: "c-6",
    title: "Townhouse in Kissimmee",
    location: "Private pool · 4 beds",
    category: "Beach",
    price: "$481 for 2 nights",
    rating: 5.0,
    tag: null,
    imageUrl: "https://picsum.photos/seed/catalog-6/640/440",
  },
  {
    id: "c-7",
    title: "Home in Orlando",
    location: "Spacious home · 7 beds",
    category: "Popular",
    price: "$697 for 2 nights",
    rating: 5.0,
    tag: "Guest favorite",
    imageUrl: "https://picsum.photos/seed/catalog-7/640/440",
  },
  {
    id: "c-8",
    title: "Home in Kissimmee",
    location: "By Disney · 7 beds",
    category: "Outdoors",
    price: "$446 for 2 nights",
    rating: 4.93,
    tag: null,
    imageUrl: "https://picsum.photos/seed/catalog-8/640/440",
  },
  {
    id: "c-9",
    title: "Private in Orlando",
    location: "Poolside studio · 2 beds",
    category: "Arts & culture",
    price: "$387 for 2 nights",
    rating: 4.97,
    tag: "Guest favorite",
    imageUrl: "https://picsum.photos/seed/catalog-9/640/440",
  },
  {
    id: "c-10",
    title: "Home in Kissimmee",
    location: "Story lake · 6 beds",
    category: "Popular",
    price: "$615 for 2 nights",
    rating: 5.0,
    tag: "Guest favorite",
    imageUrl: "https://picsum.photos/seed/catalog-10/640/440",
  },
];

function toPriceValue(priceLabel: string) {
  const numericPrice = Number(priceLabel.replace(/[^\d]/g, ""));
  return Number.isNaN(numericPrice) ? 0 : numericPrice;
}

const CatalogPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    const visibleListings = useMemo(() => {
      const normalizedSearch = searchValue.trim().toLowerCase();
      const filtered = catalogListings.filter((listing) => {
        if (!normalizedSearch) return true;
        return (
          listing.title.toLowerCase().includes(normalizedSearch) ||
          listing.location.toLowerCase().includes(normalizedSearch) ||
          listing.category.toLowerCase().includes(normalizedSearch)
        );
      });
      const sorted = [...filtered].sort((firstListing, secondListing) => {
        const firstPrice = toPriceValue(firstListing.price);
        const secondPrice = toPriceValue(secondListing.price);
        if (sortOrder === "asc") {
          return firstPrice - secondPrice;
        }
        return secondPrice - firstPrice;
      });
      // Only show 4 listings (2 rows of 2)
      return sorted.slice(0, 4);
    }, [searchValue, sortOrder]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HomeHeader searchValue={searchValue} onSearchChange={setSearchValue} />

      <main className="mx-auto w-full max-w-[1440px] bg-white px-4 py-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)]">
          <section>
            <CatalogResultsToolbar
              resultCount={visibleListings.length}
              sortOrder={sortOrder}
              onChangeSortOrder={setSortOrder}
            />

            {visibleListings.length > 0 ? (
              <CatalogListingsGrid listings={visibleListings} />
            ) : (
              <ListingsMessage message="No listings match your search." />
            )}
          </section>

          <CatalogMapPlaceholder />
        </div>

        <div className="mt-10">
          <SupportLinksSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CatalogPage;
