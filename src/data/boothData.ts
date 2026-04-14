export type BoothType = "stall" | "cart" | "popup";

export interface Booth {
  id: string;
  label: string;
  type: BoothType;
  size: string;
  vendor?: string;
  category?: string;
  status: "available" | "booked" | "reserved";
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

// All positions are percentages relative to the floorplan image.
// Image natural size ~1456×819 based on the uploaded PNG.
export const booths: Booth[] = [
  // === Stalls S1–S5 (top row inside green area) ===
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 39.5, y: 3.2, width: 3.8, height: 5.5 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 43.5, y: 3.2, width: 3.8, height: 5.5 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 47.5, y: 3.2, width: 3.8, height: 5.5 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 51.5, y: 3.2, width: 3.8, height: 5.5 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 55.5, y: 3.2, width: 3.8, height: 5.5 },

  // === Stalls S6–S8 (right column inside green area) ===
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 64.8, y: 12, width: 4, height: 5.8 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 64.8, y: 18.5, width: 4, height: 5.8 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 64.8, y: 25, width: 4, height: 5.8 },

  // === Stalls S9–S11 (bottom-left area) ===
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 26.5, y: 56, width: 5.5, height: 8.5 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 26.5, y: 65, width: 5.5, height: 8.5 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 26.5, y: 74, width: 5.5, height: 8.5 },

  // === Pop-Up Setups 1–8 (2×4 grid, center of green area) ===
  // Row 1: 1, 4
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 43, y: 15.5, width: 3, height: 5 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 46.2, y: 15.5, width: 3, height: 5 },
  // Row 2: 3, 2
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 43, y: 20.8, width: 3, height: 5 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 46.2, y: 20.8, width: 3, height: 5 },
  // Row 3: 5, 6
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 43, y: 27.5, width: 3, height: 5 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 46.2, y: 27.5, width: 3, height: 5 },
  // Row 4: 7, 8
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 43, y: 32.8, width: 3, height: 5 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 46.2, y: 32.8, width: 3, height: 5 },

  // === Carts C1–C6 (around the fountain, lower-center) ===
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 42, y: 52, width: 3.2, height: 4.5 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 38.5, y: 54, width: 3.2, height: 4.5 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 35.5, y: 58, width: 3.2, height: 4.5 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 35.5, y: 71, width: 3.2, height: 4.5 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 38, y: 76, width: 3.2, height: 4.5 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 41, y: 80, width: 3.2, height: 4.5 },
];
