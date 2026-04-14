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
  // S1–S5 top row — shifted right ~1.5%, down ~0.5%
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 44.2, y: 6.5, width: 3.4, height: 4.8 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 47.7, y: 6.5, width: 3.4, height: 4.8 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 51.2, y: 6.5, width: 3.4, height: 4.8 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 54.7, y: 6.5, width: 3.4, height: 4.8 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 58.2, y: 6.5, width: 3.4, height: 4.8 },

  // S6–S8 right column — shifted right ~1%
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 67.8, y: 20.5, width: 3.4, height: 5.2 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 67.8, y: 26.5, width: 3.4, height: 5.2 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 67.8, y: 32.2, width: 3.4, height: 5.2 },

  // S9–S11 bottom left — shifted right ~1.5%, down ~1%
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 29.0, y: 66.5, width: 5.0, height: 7.8 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 29.0, y: 74.8, width: 5.0, height: 7.8 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 29.0, y: 83.0, width: 5.0, height: 7.8 },

  // Pop-ups 1–8 (center grid) — aligned well, small tweaks
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 47.5, y: 24.5, width: 3.2, height: 5.0 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 51.0, y: 24.5, width: 3.2, height: 5.0 },
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 47.5, y: 30.0, width: 3.2, height: 5.0 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 51.0, y: 30.0, width: 3.2, height: 5.0 },
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 47.5, y: 36.8, width: 3.2, height: 5.0 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 51.0, y: 36.8, width: 3.2, height: 5.0 },
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 47.5, y: 42.2, width: 3.2, height: 5.0 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 51.0, y: 42.2, width: 3.2, height: 5.0 },

  // Carts C1–C6 around fountain — adjusted to match rotated labels
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 38.5, y: 59.5, width: 2.5, height: 4.2 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 36.0, y: 62.5, width: 2.5, height: 4.2 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 34.0, y: 67.0, width: 2.5, height: 4.2 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 33.5, y: 79.0, width: 2.5, height: 4.2 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 35.5, y: 83.0, width: 2.5, height: 4.2 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 38.0, y: 86.5, width: 2.5, height: 4.2 },
];
