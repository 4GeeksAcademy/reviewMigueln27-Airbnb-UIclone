type RoomBookingCardProps = {
  nightlyPrice: number;
  guests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
};

export const RoomBookingCard = ({ nightlyPrice, guests, onDecreaseGuests, onIncreaseGuests }: RoomBookingCardProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-zinc-200 p-6 shadow-[0_6px_18px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
      <h3 className="text-[28px] font-semibold text-zinc-900">
        ${nightlyPrice} <span className="text-base font-medium text-zinc-500">/ night</span>
      </h3>
      <p className="mt-1 text-sm text-zinc-500">$1,968 total before taxes</p>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-zinc-300 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Guests</p>
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={onDecreaseGuests}
              className="h-9 w-9 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={guests <= 1}
              aria-label="Decrease guests"
            >
              -
            </button>
            <span className="text-base font-semibold text-zinc-900">{guests}</span>
            <button
              onClick={onIncreaseGuests}
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
  );
};
