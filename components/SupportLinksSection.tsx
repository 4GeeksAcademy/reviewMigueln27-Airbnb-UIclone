type LinkColumn = {
  heading: string;
  items: string[];
};

const linkColumns: LinkColumn[] = [
  {
    heading: "Support",
    items: ["Help Center", "Get help with a safety issue", "AirCover", "Report neighborhood concern"],
  },
  {
    heading: "Hosting",
    items: ["Airbnb your home", "Airbnb your experience", "Community forum", "Hosting resources"],
  },
  {
    heading: "Airbnb",
    items: ["2025 Summer Release", "Newsroom", "Careers", "Investors"],
  },
];

export function SupportLinksSection() {
  return (
    <section className="grid gap-8 border-b border-zinc-200 bg-[#f2f2f2] p-6 md:grid-cols-3 md:p-8">
      {linkColumns.map((column) => (
        <div key={column.heading}>
          <h3 className="text-lg font-semibold">{column.heading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {column.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
