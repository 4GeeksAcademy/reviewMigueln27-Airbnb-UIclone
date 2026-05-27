"use client";

import { useMemo, useState } from "react";
import { HomeHeader } from "../../components/HomeHeader";
import { ListingCard, type Listing } from "../../components/ListingCard";
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

export default function CatalogPage() {
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
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
              <p className="text-lg font-semibold tracking-tight">{visibleListings.length.toLocaleString()} homes found</p>
              <div className="flex items-center gap-2">
                <label htmlFor="catalog-sort" className="text-sm font-medium text-zinc-600">
                  Sort by price
                </label>
                <select
                  id="catalog-sort"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                  className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 focus:border-zinc-500 focus:outline-none"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>

              {visibleListings.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                  {visibleListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} largeImage />
                  ))}
                </div>
              ) : (
                <section className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-12 text-center text-sm font-medium text-zinc-500">
                  No listings match your search.
                </section>
              )}
          </section>

          <aside className="hidden xl:block">
            <div className="sticky top-28 flex min-h-[560px] items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Map goes here
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <SupportLinksSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
