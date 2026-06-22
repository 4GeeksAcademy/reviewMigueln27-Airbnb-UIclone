export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f2f2f2]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-5 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Your Privacy Choices
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-zinc-900" aria-label="Facebook">
            f
          </a>
          <a href="#" className="hover:text-zinc-900" aria-label="X">
            x
          </a>
          <a href="#" className="hover:text-zinc-900" aria-label="Instagram">
            ◎
          </a>
        </div>
      </div>
    </footer>
  );
}
