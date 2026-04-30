import { useState, useRef, useCallback } from "react";
import { booths, Booth } from "@/data/boothData";
import FloorplanTooltip from "./FloorplanTooltip";

const typeHoverColors: Record<string, string> = {
  stall: "hover:bg-stall/30 border-stall/50",
  cart: "hover:bg-cart/30 border-cart/50",
  popup: "hover:bg-popup/30 border-popup/50",
};

const statusStyles: Record<string, string> = {
  available: "bg-transparent",
  booked: "bg-destructive/40 border-destructive/70 hover:bg-destructive/50",
  reserved: "bg-yellow-500/40 border-yellow-600/70 hover:bg-yellow-500/50",
};

const InteractiveFloorplan = () => {
  const [hovered, setHovered] = useState<Booth | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(
    (booth: Booth, e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
      setHovered(booth);
    },
    []
  );

  return (
    <div ref={containerRef} className="relative w-full max-w-[1200px] mx-auto">
      <img
        src="/images/promenade_layout.png"
        alt="DLF Promenade Floor Plan"
        className="w-full h-auto block rounded-xl shadow-lg"
        draggable={false}
      />

      {/* Interactive booth overlays */}
      {booths.map((booth) => (
        <div
          key={booth.id}
          className={`absolute box-border cursor-pointer rounded-none border-2 transition-all duration-150 flex items-center justify-center overflow-hidden ${booth.status === "available" ? typeHoverColors[booth.type] + " bg-transparent" : statusStyles[booth.status]}`}
          style={{
            left: `${booth.x}%`,
            top: `${booth.y}%`,
            width: `${booth.width}%`,
            height: `${booth.height}%`,
          }}
          onMouseEnter={(e) => handleMouseEnter(booth, e)}
          onMouseLeave={() => setHovered(null)}
        >
          {booth.vendor && (
            <span className="text-[8px] leading-tight font-semibold text-foreground text-center px-0.5 truncate w-full pointer-events-none">
              {booth.vendor}
            </span>
          )}
        </div>
      ))}

      {hovered && <FloorplanTooltip booth={hovered} position={tooltipPos} />}
    </div>
  );
};

export default InteractiveFloorplan;
