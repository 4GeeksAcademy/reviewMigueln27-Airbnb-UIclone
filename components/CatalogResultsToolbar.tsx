type SortOrder = "asc" | "desc";

type CatalogResultsToolbarProps = {
  resultCount: number;
  sortOrder: SortOrder;
  onChangeSortOrder: (order: SortOrder) => void;
};

export function CatalogResultsToolbar({ resultCount, sortOrder, onChangeSortOrder }: CatalogResultsToolbarProps) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
      <p className="text-lg font-semibold tracking-tight">{resultCount.toLocaleString()} homes found</p>
      <div className="flex items-center gap-2">
        <label htmlFor="catalog-sort" className="text-sm font-medium text-zinc-600">
          Sort by price
        </label>
        <select
          id="catalog-sort"
          value={sortOrder}
          onChange={(event) => onChangeSortOrder(event.target.value as SortOrder)}
          className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 focus:border-zinc-500 focus:outline-none"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
