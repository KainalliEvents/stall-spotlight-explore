import { useState, useRef, useCallback } from "react";
import { booths, Booth } from "@/data/boothData";
import FloorplanTooltip from "./FloorplanTooltip";

const typeHoverColors: Record<string, string> = {
  stall: "hover:bg-stall/30 border-stall/50",
  cart: "hover:bg-cart/30 border-cart/50",
  popup: "hover:bg-popup/30 border-popup/50",
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
        src="/images/floorplan.png"
        alt="DLF Promenade Floor Plan"
        className="w-full h-auto block rounded-xl shadow-lg"
        draggable={false}
      />

      {/* Interactive booth overlays */}
      {booths.map((booth) => (
        <div
          key={booth.id}
          className={`absolute box-border cursor-pointer rounded-none border-2 transition-all duration-150 ${typeHoverColors[booth.type]} bg-transparent`}
          style={{
            left: `${booth.x}%`,
            top: `${booth.y}%`,
            width: `${booth.width}%`,
            height: `${booth.height}%`,
          }}
          onMouseEnter={(e) => handleMouseEnter(booth, e)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {hovered && <FloorplanTooltip booth={hovered} position={tooltipPos} />}
    </div>
  );
};

export default InteractiveFloorplan;
