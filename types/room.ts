import type { ReactNode } from "react";

export type Amenity = {
  id: string;
  label: string;
  icon: ReactNode;
};

export type RoomData = {
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
