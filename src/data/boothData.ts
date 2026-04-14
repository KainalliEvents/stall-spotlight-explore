export type BoothType = "stall" | "cart" | "popup";

export interface Booth {
  id: string;
  label: string;
  type: BoothType;
  size: string;
  vendor?: string;
  category?: string;
  status: "available" | "booked" | "reserved";
  // Position as percentage of the floorplan image
  x: number;
  y: number;
  width: number;
  height: number;
}

export const boothTypeInfo: Record<BoothType, { label: string; size: string }> = {
  stall: { label: "Stall", size: "8ft × 8ft" },
  cart: { label: "Cart", size: "6ft × 3ft" },
  popup: { label: "Pop-Up Setup", size: "8ft × 8ft" },
};

export const booths: Booth[] = [
  // Stalls S1-S5 (top row in green area)
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 43.5, y: 6.5, width: 4.2, height: 6.5 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 48.2, y: 6.5, width: 4.2, height: 6.5 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 52.8, y: 6.5, width: 4.2, height: 6.5 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 57.4, y: 6.5, width: 4.2, height: 6.5 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 62.0, y: 6.5, width: 4.2, height: 6.5 },

  // Stalls S6-S8 (right side in green area)
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 67.0, y: 18, width: 4.2, height: 6.5 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 67.0, y: 26, width: 4.2, height: 6.5 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 67.0, y: 34, width: 4.2, height: 6.5 },

  // Stalls S9-S11 (bottom left)
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 62, width: 5, height: 8 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 72, width: 5, height: 8 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 82, width: 5, height: 8 },

  // Pop-Up Setups 1-8 (center of green area, 2x4 grid)
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 47, y: 21, width: 4, height: 6 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 51.5, y: 21, width: 4, height: 6 },
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 47, y: 28, width: 4, height: 6 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 51.5, y: 28, width: 4, height: 6 },
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 47, y: 36, width: 4, height: 6 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 51.5, y: 36, width: 4, height: 6 },
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 47, y: 43, width: 4, height: 6 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 51.5, y: 43, width: 4, height: 6 },

  // Carts C1-C6 (around fountain)
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 46, y: 57, width: 3, height: 5 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 42.5, y: 61, width: 3, height: 5 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 39.5, y: 66, width: 3, height: 5 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 39.5, y: 76, width: 3, height: 5 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 42.5, y: 82, width: 3, height: 5 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 46, y: 86, width: 3, height: 5 },
];
