import { Booth, boothTypeInfo } from "@/data/boothData";

interface Props {
  booth: Booth;
  position: { x: number; y: number };
}

const typeColors: Record<string, string> = {
  stall: "bg-stall",
  cart: "bg-cart",
  popup: "bg-popup",
};

const FloorplanTooltip = ({ booth, position }: Props) => {
  const info = boothTypeInfo[booth.type];

  return (
    <div
      className="tooltip-animate pointer-events-none fixed z-50 min-w-[200px] rounded-lg border border-border/40 bg-card p-4 shadow-xl"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -110%)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`inline-block h-3 w-3 rounded-sm ${typeColors[booth.type]}`} />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {info.label}
        </span>
      </div>
      <p className="text-base font-bold text-foreground">{booth.label}</p>
      <p className="text-sm text-muted-foreground mt-1">Size: {booth.size}</p>
      {booth.vendor && (
        <p className="text-sm mt-1">
          <span className="text-muted-foreground">Vendor:</span>{" "}
          <span className="font-medium text-foreground">{booth.vendor}</span>
        </p>
      )}
      {booth.category && (
        <p className="text-sm mt-1">
          <span className="text-muted-foreground">Category:</span>{" "}
          <span className="font-medium text-foreground">{booth.category}</span>
        </p>
      )}
      <div className="mt-2">
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
            booth.status === "booked"
              ? "bg-destructive/15 text-destructive"
              : booth.status === "reserved"
              ? "bg-accent/30 text-accent-foreground"
              : "bg-secondary/60 text-secondary-foreground"
          }`}
        >
          {booth.status.charAt(0).toUpperCase() + booth.status.slice(1)}
        </span>
      </div>
      <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 rotate-45 bg-card border-r border-b border-border/40" />
    </div>
  );
};

export default FloorplanTooltip;
