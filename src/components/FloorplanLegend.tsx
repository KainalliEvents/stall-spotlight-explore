const items = [
  { color: "bg-stall", label: "10ft × 10ft Stall" },
  { color: "bg-cart", label: "6ft × 3ft Cart" },
  { color: "bg-popup", label: "8ft × 8ft Pop-Up Setup" },
  { color: "bg-stall", label: "12ft × 4ft Stall" },
];

const FloorplanLegend = () => (
  <div className="flex flex-wrap items-center gap-5 rounded-lg border border-border bg-card px-5 py-3 shadow-sm">
    {items.map((item) => (
      <div key={item.label} className="flex items-center gap-2">
        <span className={`inline-block h-4 w-4 rounded-sm ${item.color}`} />
        <span className="text-sm font-medium text-foreground">{item.label}</span>
      </div>
    ))}
  </div>
);

export default FloorplanLegend;
