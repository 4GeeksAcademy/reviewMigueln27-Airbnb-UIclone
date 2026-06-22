import type { RoomData } from "../types/room";

type RoomHeaderInfoProps = {
  room: RoomData;
};

export const RoomHeaderInfo = ({ room }: RoomHeaderInfoProps) => {
  return (
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
  );
};
