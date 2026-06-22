type InspirationTabsProps = {
  activeTab: string;
  tabs: string[];
  tabContent: Record<string, string[]>;
  onChangeTab: (tab: string) => void;
};

export const InspirationTabs = ({ activeTab, tabs, tabContent, onChangeTab }: InspirationTabsProps) => {
  return (
    <section className="rounded-none border-b border-zinc-200 bg-[#f2f2f2] p-6 md:p-8">
      <h2 className="text-2xl font-semibold">Inspiration for future getaways</h2>

      <div className="mt-5 flex flex-wrap gap-5 border-b border-zinc-300 pb-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChangeTab(tab)}
            className={`pb-2 transition ${
              activeTab === tab
                ? "border-b-2 border-zinc-900 font-semibold text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2 lg:grid-cols-4">
        {tabContent[activeTab].map((item) => (
          <p key={item} className="px-1 py-1">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};
