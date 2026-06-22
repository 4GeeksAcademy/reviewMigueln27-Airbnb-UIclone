import Link from "next/link";

export const RoomNavigationLinks = () => {
  return (
    <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-2">
      <Link href="/catalog" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
        Back to catalog
      </Link>
      <Link href="/" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
        Back to home
      </Link>
    </div>
  );
};
