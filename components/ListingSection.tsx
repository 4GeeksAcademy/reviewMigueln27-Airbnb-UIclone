import Link from "next/link";
import { Listing, ListingCard } from "./ListingCard";

type ListingSectionProps = {
  title: string;
  listings: Listing[];
};

export function ListingSection({ title, listings }: ListingSectionProps) {
  return (
    <section className="space-y-4 border-b border-zinc-100 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {title}
          <Link href="/catalog" className="text-zinc-400 transition hover:text-zinc-700" aria-label={`See listings for ${title}`}>
            →
          </Link>
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
