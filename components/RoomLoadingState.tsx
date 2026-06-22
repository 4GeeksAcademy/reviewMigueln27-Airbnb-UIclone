type RoomLoadingStateProps = {
  listingId: string;
};

export function RoomLoadingState({ listingId }: RoomLoadingStateProps) {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-700" />
        <h1 className="text-xl font-semibold text-zinc-900">Loading room details...</h1>
        <p className="mt-2 text-sm text-zinc-500">Fetching listing {listingId}.</p>
      </section>
    </main>
  );
}
