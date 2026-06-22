import Link from "next/link";

export type Listing = {
	id: string;
	title: string;
	location: string;
	category: string;
	price: string;
	rating: number;
	tag: "Guest favorite" | "Superhost" | null;
	imageUrl: string;
};

type ListingCardProps = {
	listing: Listing;
	largeImage?: boolean;
};

export const ListingCard = ({ listing, largeImage = false }: ListingCardProps) => {
	return (
		<article className={largeImage ? "w-full max-w-[420px] space-y-3" : "w-[185px] shrink-0 space-y-2"}>
			<Link href={`/rooms/${listing.id}`} className="group block">
				<div className={largeImage ? "relative h-[260px] overflow-hidden rounded-3xl" : "relative h-44 overflow-hidden rounded-2xl"}>
					<img
						src={listing.imageUrl}
						alt={listing.title}
						className="h-full w-full object-cover"
						onError={(event) => {
							const image = event.currentTarget;
							if (!image.src.includes("listing-placeholder.svg")) {
								image.src = "/listing-placeholder.svg";
							}
						}}
					/>
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
					{listing.tag ? (
						<span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-700">
							{listing.tag}
						</span>
					) : null}
					<button className="absolute right-2 top-2 rounded-full bg-black/20 p-1 text-white" aria-label="Save listing">
						<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
							<path d="M12 20.8S4.8 16.3 4.8 10.5A3.7 3.7 0 018.5 6.8c1.4 0 2.7.8 3.5 2 0.8-1.2 2.1-2 3.5-2a3.7 3.7 0 013.7 3.7c0 5.8-7.2 10.3-7.2 10.3z" />
						</svg>
					</button>
				</div>

				<div className={largeImage ? "pt-2" : "pt-1"}>
					<h3 className={largeImage ? "line-clamp-1 text-base font-semibold" : "line-clamp-1 text-sm font-semibold"}>{listing.title}</h3>
					<p className={largeImage ? "line-clamp-1 text-sm text-zinc-500" : "line-clamp-1 text-xs text-zinc-500"}>{listing.location}</p>
					<div className={largeImage ? "mt-1 flex items-center gap-1.5 text-sm" : "mt-1 flex items-center gap-1.5 text-xs"}>
						<h4 className="font-semibold text-zinc-700">{listing.price}</h4>
						<span className="text-zinc-400">·</span>
						<p className="flex items-center gap-1 text-zinc-600">
							<span className="text-[#FD6565]">★</span>
							{listing.rating}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
};
