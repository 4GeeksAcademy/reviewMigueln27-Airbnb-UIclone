type HomeCategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
};

export function HomeCategoryFilter({ categories, activeCategory, onSelectCategory }: HomeCategoryFilterProps) {
  return (
    <section className="space-y-3">
      <p className="text-sm font-semibold text-zinc-600">Filter by category</p>
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
