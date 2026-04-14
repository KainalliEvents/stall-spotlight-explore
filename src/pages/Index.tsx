import InteractiveFloorplan from "@/components/InteractiveFloorplan";
import FloorplanLegend from "@/components/FloorplanLegend";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card py-6">
        <div className="container max-w-[1300px] mx-auto px-4">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Premium Shopping Experience
          </h1>
          <p className="text-muted-foreground mt-1">
            DLF Promenade, Vasant Kunj — Exhibition Floor Plan
          </p>
        </div>
      </header>

      <main className="container max-w-[1300px] mx-auto px-4 py-8 space-y-6">
        <FloorplanLegend />
        <InteractiveFloorplan />
        <p className="text-xs text-muted-foreground text-center">
          Hover over any stall, cart, or pop-up to see details. • Measurements are approximate.
        </p>
      </main>
    </div>
  );
};

export default Index;
