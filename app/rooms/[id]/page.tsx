"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { HomeHeader } from "../../../components/HomeHeader";

type Amenity = {
  id: string;
  label: string;
  icon: ReactNode;
};

type RoomData = {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  rating: number;
  reviews: number;
  hostName: string;
  yearsHosting: number;
  nightlyPrice: number;
  photos: string[];
  amenities: Amenity[];
};

const amenities: Amenity[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h16" />
        <path d="M6 8V5h12v3" />
        <path d="M6 8v11h12V8" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    id: "wifi",
    label: "Wifi",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 10a11 11 0 0115 0" />
        <path d="M7.5 13a7 7 0 019 0" />
        <path d="M10.5 16a3 3 0 013 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "pool",
    label: "Private pool",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16c1.1 0 1.8-.6 2.5-1.2.6-.5 1.2-.8 2-.8s1.4.3 2 .8c.7.6 1.4 1.2 2.5 1.2s1.8-.6 2.5-1.2c.6-.5 1.2-.8 2-.8s1.4.3 2 .8c.7.6 1.4 1.2 2.5 1.2" />
        <path d="M6 12V7h4v5" />
      </svg>
    ),
  },
  {
    id: "parking",
    label: "Free parking",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 19V5h6a4 4 0 010 8H7" />
        <path d="M7 13h8" />
      </svg>
    ),
  },
  {
    id: "ac",
    label: "Air conditioning",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h16v4H4z" />
        <path d="M8 14l-2 3" />
        <path d="M12 14v4" />
        <path d="M16 14l2 3" />
      </svg>
    ),
  },
  {
    id: "washer",
    label: "Washer",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <circle cx="9" cy="7" r=".8" fill="currentColor" stroke="none" />
        <circle cx="12" cy="7" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const roomSeedData: Record<string, Omit<RoomData, "id" | "amenities">> = {
  "c-1": {
    title: "Retreat with private pool near Disney",
    location: "Kissimmee, Florida, United States",
    subtitle: "Entire home in Kissimmee, Florida",
    rating: 4.96,
    reviews: 485,
    hostName: "Serrento",
    yearsHosting: 5,
    nightlyPrice: 326,
    photos: [
      "https://picsum.photos/seed/room-c1-main/1200/800",
      "https://picsum.photos/seed/room-c1-a/1200/800",
      "https://picsum.photos/seed/room-c1-b/1200/800",
      "https://picsum.photos/seed/room-c1-c/1200/800",
      "https://picsum.photos/seed/room-c1-d/1200/800",
    ],
  },
  "c-2": {
    title: "Townhouse with game room and splash area",
    location: "Kissimmee, Florida, United States",
    subtitle: "Entire townhouse in Kissimmee, Florida",
    rating: 4.92,
    reviews: 266,
    hostName: "Rennata",
    yearsHosting: 9,
    nightlyPrice: 256,
    photos: [
      "https://picsum.photos/seed/room-c2-main/1200/800",
      "https://picsum.photos/seed/room-c2-a/1200/800",
      "https://picsum.photos/seed/room-c2-b/1200/800",
      "https://picsum.photos/seed/room-c2-c/1200/800",
      "https://picsum.photos/seed/room-c2-d/1200/800",
    ],
  },
};

function buildFallbackRoom(id: string): RoomData {
  const numeric = Number(id.replace(/[^\d]/g, "")) || 1;

  return {
    id,
    title: `Modern family home in Kissimmee #${id}`,
    location: "Kissimmee, Florida, United States",
    subtitle: "Entire home in Kissimmee, Florida",
    rating: Number((4.7 + (numeric % 3) * 0.1).toFixed(2)),
    reviews: 120 + numeric * 3,
    hostName: "Rennata",
    yearsHosting: 4 + (numeric % 8),
    nightlyPrice: 180 + numeric * 6,
    photos: [
      `https://picsum.photos/seed/room-${id}-main/1200/800`,
      `https://picsum.photos/seed/room-${id}-a/1200/800`,
      `https://picsum.photos/seed/room-${id}-b/1200/800`,
      `https://picsum.photos/seed/room-${id}-c/1200/800`,
      `https://picsum.photos/seed/room-${id}-d/1200/800`,
    ],
    amenities,
  };
}

function getRoomById(id: string): RoomData {
  const fromSeed = roomSeedData[id];

  if (fromSeed) {
    return {
      id,
      ...fromSeed,
      amenities,
    };
  }

  return buildFallbackRoom(id);
}

export default function RoomPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? "";

  const [searchValue, setSearchValue] = useState("");
  const [room, setRoom] = useState<RoomData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);
    setRoom(null);
    setPhotoIndex(0);
    setGuests(2);

    const timer = setTimeout(() => {
      setRoom(getRoomById(id));
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [id]);

  const handlePreviousPhoto = () => {
    if (!room) {
      return;
    }

    setPhotoIndex((current) => (current === 0 ? room.photos.length - 1 : current - 1));
  };

  const handleNextPhoto = () => {
    if (!room) {
      return;
    }

    setPhotoIndex((current) => (current === room.photos.length - 1 ? 0 : current + 1));
  };

  const decreaseGuests = () => setGuests((current) => Math.max(1, current - 1));
  const increaseGuests = () => setGuests((current) => Math.min(10, current + 1));

  if (isLoading || !room) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
        <HomeHeader searchValue={searchValue} onSearchChange={setSearchValue} />

        <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-12">
          <section className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-700" />
            <h1 className="text-xl font-semibold text-zinc-900">Loading room details...</h1>
            <p className="mt-2 text-sm text-zinc-500">Fetching listing {id}.</p>
          </section>
        </main>
      </div>
    );
  }

  const sidePhotos = room.photos.filter((_, index) => index !== photoIndex).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HomeHeader searchValue={searchValue} onSearchChange={setSearchValue} />

      <main className="mx-auto w-full max-w-[1120px] space-y-8 bg-white px-4 pb-14 pt-7 sm:px-6">
        <section className="space-y-3">
          <h1 className="text-[28px] font-semibold leading-tight tracking-tight">{room.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-700">
            <span className="font-semibold text-zinc-900">★ {room.rating.toFixed(2)}</span>
            <span className="text-zinc-300">·</span>
            <span className="font-medium underline">{room.reviews} reviews</span>
            <span className="text-zinc-300">·</span>
            <span className="font-medium underline">{room.location}</span>
          </div>
        </section>

        <section className="space-y-3">
          <div className="relative overflow-hidden rounded-2xl bg-zinc-100 md:hidden">
            <img src={room.photos[photoIndex]} alt={`${room.title} photo ${photoIndex + 1}`} className="h-[300px] w-full object-cover" />
            <button
              onClick={handlePreviousPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
              aria-label="Previous photo"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              onClick={handleNextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
              aria-label="Next photo"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="hidden h-[430px] grid-cols-[2fr_1fr] gap-2 overflow-hidden rounded-2xl md:grid">
            <button onClick={() => setPhotoIndex(photoIndex)} className="overflow-hidden bg-zinc-100" aria-label="Main photo">
              <img src={room.photos[photoIndex]} alt={`${room.title} photo ${photoIndex + 1}`} className="h-full w-full object-cover" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              {sidePhotos.map((photo, index) => {
                const originalIndex = room.photos.findIndex((value) => value === photo);

                return (
                  <button
                    key={`${photo}-${index}`}
                    onClick={() => setPhotoIndex(originalIndex)}
                    className="overflow-hidden bg-zinc-100"
                    aria-label={`Show photo ${originalIndex + 1}`}
                  >
                    <img src={photo} alt={`${room.title} side photo ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_372px]">
          <div className="space-y-8">
            <article className="flex items-center justify-between border-b border-zinc-200 pb-6">
              <div>
                <h2 className="text-[22px] font-semibold text-zinc-900">{room.subtitle}</h2>
                <p className="mt-1 text-[15px] text-zinc-600">Hosted by {room.hostName} · {room.yearsHosting} years hosting</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-lg font-semibold text-rose-700">
                {room.hostName.slice(0, 1).toUpperCase()}
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="text-[22px] font-semibold">What this place offers</h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                {room.amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-3 border-b border-zinc-200 py-4">
                    <span className="text-zinc-700">{amenity.icon}</span>
                    <span className="text-sm font-medium text-zinc-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-200 p-6 shadow-[0_6px_18px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
            <h3 className="text-[28px] font-semibold text-zinc-900">
              ${room.nightlyPrice} <span className="text-base font-medium text-zinc-500">/ night</span>
            </h3>
            <p className="mt-1 text-sm text-zinc-500">$1,968 total before taxes</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-zinc-300 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Guests</p>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={decreaseGuests}
                    className="h-9 w-9 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={guests <= 1}
                    aria-label="Decrease guests"
                  >
                    -
                  </button>
                  <span className="text-base font-semibold text-zinc-900">{guests}</span>
                  <button
                    onClick={increaseGuests}
                    className="h-9 w-9 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={guests >= 10}
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="w-full rounded-lg bg-[#ff385c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e31c5f]">
                Reserve now
              </button>

              <p className="text-center text-xs text-zinc-500">You will not be charged yet</p>
            </div>
          </aside>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-2">
          <Link href="/catalog" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
            Back to catalog
          </Link>
          <Link href="/" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
