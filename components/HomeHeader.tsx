import Link from "next/link";
import { IconBell, IconHome, IconTicket } from "./icons";

type HomeHeaderProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const HomeHeader = ({ searchValue, onSearchChange }: HomeHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 py-4 lg:px-8">
        <Link href="/" className="flex min-w-32 items-center gap-2 text-[#FD6565]" aria-label="Go to homepage">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M12 1.5a5.4 5.4 0 00-5.4 5.4c0 2.8 1.9 4.7 3.7 6.5l1.7 1.6 1.7-1.6c1.8-1.8 3.7-3.7 3.7-6.5A5.4 5.4 0 0012 1.5z" />
            <path d="M4 13.8a8 8 0 0116 0c0 4.1-3.6 6.7-8 8.7-4.4-2-8-4.6-8-8.7z" opacity=".65" />
          </svg>
          <span className="text-xl font-bold tracking-tight">airbnb</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-5 text-sm font-medium xl:flex">
          <button className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-zinc-100">
            <IconHome />
            Homes
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
            <IconTicket />
            Experiences
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
            <IconBell />
            Services
          </button>
        </div>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <button className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-zinc-100">Become a host</button>
          <button className="rounded-full border border-zinc-200 p-2 hover:bg-zinc-100" aria-label="Language selector">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
            </svg>
          </button>
          <button className="rounded-full border border-zinc-200 p-2 hover:bg-zinc-100" aria-label="Settings menu">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-4 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center rounded-full border border-zinc-200 bg-white shadow-md shadow-zinc-300/40">
          <div className="flex-1 rounded-l-full px-5 py-3">
            <p className="text-xs font-semibold">Where</p>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              className="w-full bg-transparent text-sm text-zinc-700 placeholder:text-zinc-500 focus:outline-none"
              placeholder="Search destinations"
              aria-label="Search destinations"
            />
          </div>
          <button className="hidden flex-1 px-5 py-3 text-left md:block hover:bg-zinc-100">
            <p className="text-xs font-semibold">When</p>
            <p className="text-sm text-zinc-500">Add dates</p>
          </button>
          <button className="hidden flex-1 px-5 py-3 text-left md:block hover:bg-zinc-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm text-zinc-500">Add guests</p>
          </button>
          <button className="mr-2 rounded-full bg-[#FD6565] p-3 text-white transition hover:brightness-95" aria-label="Search">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.4-3.4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
