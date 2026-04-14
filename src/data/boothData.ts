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
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 43.1, y: 6.0, width: 3.2, height: 4.5 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 46.4, y: 6.0, width: 3.2, height: 4.5 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 49.6, y: 6.0, width: 3.2, height: 4.5 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 53.0, y: 6.0, width: 3.2, height: 4.5 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 56.4, y: 6.0, width: 3.2, height: 4.5 },

  // S6–S8 right column
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 66.5, y: 20.5, width: 3.2, height: 5.0 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 66.5, y: 26.2, width: 3.2, height: 5.0 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 66.5, y: 31.8, width: 3.2, height: 5.0 },

  // S9–S11 bottom left
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 65.0, width: 4.8, height: 7.5 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 73.0, width: 4.8, height: 7.5 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 27.5, y: 81.0, width: 4.8, height: 7.5 },

  // Pop-ups 1–8 (center grid)
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 47.8, y: 24.0, width: 3.0, height: 4.8 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 51.2, y: 24.0, width: 3.0, height: 4.8 },
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 47.8, y: 29.5, width: 3.0, height: 4.8 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 51.2, y: 29.5, width: 3.0, height: 4.8 },
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 47.8, y: 36.0, width: 3.0, height: 4.8 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 51.2, y: 36.0, width: 3.0, height: 4.8 },
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 47.8, y: 41.2, width: 3.0, height: 4.8 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 51.2, y: 41.2, width: 3.0, height: 4.8 },

  // Carts C1–C6 around fountain
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 36.8, y: 58.5, width: 2.3, height: 4.0 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 34.2, y: 61.5, width: 2.3, height: 4.0 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 32.0, y: 65.5, width: 2.3, height: 4.0 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 31.5, y: 77.5, width: 2.3, height: 4.0 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 33.2, y: 81.5, width: 2.3, height: 4.0 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 35.2, y: 85.0, width: 2.3, height: 4.0 },
];
