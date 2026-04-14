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
  { id: "S1", label: "S1", type: "stall", size: "8ft × 8ft", status: "available", x: 29.9, y: 5.1, width: 2.9, height: 4.4 },
  { id: "S2", label: "S2", type: "stall", size: "8ft × 8ft", status: "available", x: 33.1, y: 5.1, width: 2.9, height: 4.4 },
  { id: "S3", label: "S3", type: "stall", size: "8ft × 8ft", status: "available", x: 36.2, y: 5.1, width: 2.9, height: 4.4 },
  { id: "S4", label: "S4", type: "stall", size: "8ft × 8ft", status: "available", x: 39.3, y: 5.1, width: 2.9, height: 4.4 },
  { id: "S5", label: "S5", type: "stall", size: "8ft × 8ft", status: "available", x: 42.4, y: 5.1, width: 2.9, height: 4.4 },

  // S6–S8 right column
  { id: "S6", label: "S6", type: "stall", size: "8ft × 8ft", status: "available", x: 49.0, y: 18.1, width: 2.9, height: 4.6 },
  { id: "S7", label: "S7", type: "stall", size: "8ft × 8ft", status: "available", x: 49.0, y: 23.4, width: 2.9, height: 4.6 },
  { id: "S8", label: "S8", type: "stall", size: "8ft × 8ft", status: "available", x: 49.0, y: 28.8, width: 2.9, height: 4.6 },

  // S9–S11 bottom left
  { id: "S9", label: "S9", type: "stall", size: "8ft × 8ft", status: "available", x: 18.2, y: 55.6, width: 4.2, height: 6.9 },
  { id: "S10", label: "S10", type: "stall", size: "8ft × 8ft", status: "available", x: 18.2, y: 63.1, width: 4.2, height: 6.9 },
  { id: "S11", label: "S11", type: "stall", size: "8ft × 8ft", status: "available", x: 18.2, y: 70.7, width: 4.2, height: 6.9 },

  // Pop-ups 1–8
  { id: "P1", label: "1", type: "popup", size: "8ft × 8ft", status: "available", x: 34.4, y: 19.9, width: 3.0, height: 4.8 },
  { id: "P4", label: "4", type: "popup", size: "8ft × 8ft", status: "available", x: 37.7, y: 19.9, width: 3.0, height: 4.8 },
  { id: "P3", label: "3", type: "popup", size: "8ft × 8ft", status: "available", x: 34.4, y: 25.3, width: 3.0, height: 4.8 },
  { id: "P2", label: "2", type: "popup", size: "8ft × 8ft", status: "available", x: 37.7, y: 25.3, width: 3.0, height: 4.8 },
  { id: "P5", label: "5", type: "popup", size: "8ft × 8ft", status: "available", x: 34.4, y: 32.3, width: 3.0, height: 4.8 },
  { id: "P6", label: "6", type: "popup", size: "8ft × 8ft", status: "available", x: 37.7, y: 32.3, width: 3.0, height: 4.8 },
  { id: "P7", label: "7", type: "popup", size: "8ft × 8ft", status: "available", x: 34.4, y: 37.7, width: 3.0, height: 4.8 },
  { id: "P8", label: "8", type: "popup", size: "8ft × 8ft", status: "available", x: 37.7, y: 37.7, width: 3.0, height: 4.8 },

  // Carts C1–C6 around fountain
  { id: "C1", label: "C1", type: "cart", size: "6ft × 3ft", status: "available", x: 29.7, y: 53.2, width: 2.1, height: 3.7 },
  { id: "C2", label: "C2", type: "cart", size: "6ft × 3ft", status: "available", x: 27.3, y: 55.6, width: 2.1, height: 3.7 },
  { id: "C3", label: "C3", type: "cart", size: "6ft × 3ft", status: "available", x: 25.5, y: 59.3, width: 2.1, height: 3.7 },
  { id: "C4", label: "C4", type: "cart", size: "6ft × 3ft", status: "available", x: 25.0, y: 68.1, width: 2.1, height: 3.7 },
  { id: "C5", label: "C5", type: "cart", size: "6ft × 3ft", status: "available", x: 26.6, y: 71.8, width: 2.1, height: 3.7 },
  { id: "C6", label: "C6", type: "cart", size: "6ft × 3ft", status: "available", x: 28.6, y: 75.0, width: 2.1, height: 3.7 },
];
