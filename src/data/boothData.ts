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

export const booths: Booth[] = [
  // S1–S5 top row
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 45.0, y: 7.22, width: 3.75, height: 5.83 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 48.91, y: 7.22, width: 3.75, height: 5.83 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 52.86, y: 7.13, width: 3.75, height: 5.83 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 56.77, y: 7.13, width: 3.75, height: 5.83 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 60.73, y: 7.13, width: 3.75, height: 5.83 },

  // S6–S8 right column
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 64.58, y: 18.98, width: 3.65, height: 5.09 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 64.58, y: 26.39, width: 3.65, height: 5.09 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 64.58, y: 31.94, width: 3.65, height: 5.09 },

  // S9–S11 bottom left
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 26.30, y: 65.74, width: 4.95, height: 7.87 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 26.30, y: 75.46, width: 4.95, height: 7.87 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 26.30, y: 85.19, width: 4.95, height: 7.87 },

  // Pop-ups 1–8 (center grid)
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 47.92, y: 22.69, width: 2.60, height: 5.09 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 50.52, y: 22.69, width: 2.60, height: 5.09 },
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 47.92, y: 27.78, width: 2.60, height: 5.09 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 50.52, y: 27.78, width: 2.60, height: 5.09 },
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 47.92, y: 33.33, width: 2.60, height: 5.09 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 50.52, y: 33.33, width: 2.60, height: 5.09 },
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 47.92, y: 38.43, width: 2.60, height: 5.09 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 50.52, y: 38.43, width: 2.60, height: 5.09 },

  // Carts C1–C6 around fountain
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 42.66, y: 55.65, width: 4.43, height: 6.57 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 38.54, y: 60.37, width: 4.27, height: 7.50 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 35.36, y: 67.13, width: 3.91, height: 7.87 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 35.36, y: 79.72, width: 4.06, height: 7.69 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 38.49, y: 85.83, width: 4.43, height: 7.04 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 42.34, y: 90.56, width: 4.17, height: 6.11 },
];
