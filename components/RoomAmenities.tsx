import type { Amenity } from "../types/room";

type RoomAmenitiesProps = {
  amenities: Amenity[];
};

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <article className="space-y-4">
      <h3 className="text-[22px] font-semibold">What this place offers</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-3 border-b border-zinc-200 py-4">
            <span className="text-zinc-700">{amenity.icon}</span>
            <span className="text-sm font-medium text-zinc-700">{amenity.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
