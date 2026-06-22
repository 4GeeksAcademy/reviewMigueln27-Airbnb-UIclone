import type { RoomData } from "../types/room";

type RoomHostOverviewProps = {
  room: RoomData;
};

export const RoomHostOverview = ({ room }: RoomHostOverviewProps) => {
  return (
    <article className="flex items-center justify-between border-b border-zinc-200 pb-6">
      <div>
        <h2 className="text-[22px] font-semibold text-zinc-900">{room.subtitle}</h2>
        <p className="mt-1 text-[15px] text-zinc-600">
          Hosted by {room.hostName} · {room.yearsHosting} years hosting
        </p>
      </div>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-lg font-semibold text-rose-700">
        {room.hostName.slice(0, 1).toUpperCase()}
      </div>
    </article>
  );
};
