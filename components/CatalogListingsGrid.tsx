import { ListingCard, type Listing } from "./ListingCard";

type CatalogListingsGridProps = {
  listings: Listing[];
};

export function CatalogListingsGrid({ listings }: CatalogListingsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} largeImage />
      ))}
    </div>
  );
}
