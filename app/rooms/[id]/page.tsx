"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HomeHeader } from "../../../components/HomeHeader";
import { RoomAmenities } from "../../../components/RoomAmenities";
import { RoomBookingCard } from "../../../components/RoomBookingCard";
import { RoomHeaderInfo } from "../../../components/RoomHeaderInfo";
import { RoomHostOverview } from "../../../components/RoomHostOverview";
import { RoomLoadingState } from "../../../components/RoomLoadingState";
import { RoomNavigationLinks } from "../../../components/RoomNavigationLinks";
import { RoomPhotoGallery } from "../../../components/RoomPhotoGallery";
import type { Amenity, RoomData } from "../../../types/room";

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
        <RoomLoadingState listingId={id} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HomeHeader searchValue={searchValue} onSearchChange={setSearchValue} />

      <main className="mx-auto w-full max-w-[1120px] space-y-8 bg-white px-4 pb-14 pt-7 sm:px-6">
        <RoomHeaderInfo room={room} />

        <RoomPhotoGallery
          room={room}
          photoIndex={photoIndex}
          onPreviousPhoto={handlePreviousPhoto}
          onNextPhoto={handleNextPhoto}
          onSelectPhoto={setPhotoIndex}
        />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_372px]">
          <div className="space-y-8">
            <RoomHostOverview room={room} />
            <RoomAmenities amenities={room.amenities} />
          </div>

          <RoomBookingCard
            nightlyPrice={room.nightlyPrice}
            guests={guests}
            onDecreaseGuests={decreaseGuests}
            onIncreaseGuests={increaseGuests}
          />
        </section>

        <RoomNavigationLinks />
      </main>
    </div>
  );
}
