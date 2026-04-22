

## Goal
Make it easy to mark any booth as **booked** (or **reserved**) and attach a **brand/vendor name** that shows up in the tooltip and visually on the floorplan.

## How it works today
- All booth data lives in `src/data/boothData.ts` as an array of `Booth` objects.
- Each booth already supports `status` (`available` | `booked` | `reserved`), `vendor`, and `category` fields — but right now every booth is hardcoded as `available` with no vendor.
- `FloorplanTooltip.tsx` already renders the vendor name and a colored status pill if those fields are filled in.
- `InteractiveFloorplan.tsx` only styles hover state — booked/reserved booths look identical to available ones on the floorplan itself.

## What will change

### 1. Update booth data (`src/data/boothData.ts`)
You just edit the booth entry. Example — marking S3 as booked by "Nykaa":
```ts
{ id: "S3", label: "S3", type: "stall", size: "8ft × 8ft",
  status: "booked", vendor: "Nykaa", category: "Beauty",
  x: 52.86, y: 7.13, width: 3.75, height: 5.83 },
```
Set `status: "reserved"` for a soft hold instead of a confirmed booking.

### 2. Make booked/reserved booths visually distinct on the floorplan (`InteractiveFloorplan.tsx`)
Right now hotspots are transparent until hover. We'll change it so:
- **Available** → transparent (current behavior, shows hover outline)
- **Booked** → solid red tint with a subtle "booked" look, always visible
- **Reserved** → amber/yellow tint, always visible
- The brand name shows as a small label inside the booth box when the booth is wide enough; otherwise just on hover via the tooltip.

### 3. Tooltip already handles it
`FloorplanTooltip.tsx` will automatically show:
- Vendor name (e.g. "Nykaa")
- Category (e.g. "Beauty")
- A red "Booked" or amber "Reserved" pill

No changes needed there.

## Technical details
- Add a `statusStyles` map in `InteractiveFloorplan.tsx` keyed by `booth.status` to apply background color + border per state.
- Render `booth.vendor` as a tiny centered `<span>` inside the hotspot div with `text-[10px]`, truncated, only when vendor exists.
- Keep the hover tooltip behavior unchanged.

## What I need from you
Send me the list in any format — I'll plug it in. For each booked/reserved booth:
- Booth ID (e.g. S3, P5, C2)
- Status (booked or reserved)
- Brand / vendor name
- Category (optional)

Once you approve this plan I'll wire up the visual states and you can start sending booth assignments any time.

