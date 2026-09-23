import PageSchema from "@/components/PageSchema";

export const metadata = {
  title: { absolute: "Grow a Garden Soil & Fertilizer Guide" },
  description: "Soil types and fertilizer effects on growth speed and mutation chance in Grow a Garden.",
  alternates: { canonical: "https://growagarden.robloxwikihub.com/soil-fertilizer" },
};

export default function SoilFertilizerPage() {
  const soils = [
    { name: "Dirt Soil", cost: "Free (Default)", speed: "1.0x", note: "Starting ground" },
    { name: "Enriched Soil", cost: "5,000 Sheckles", speed: "1.5x", note: "Early upgrade" },
    { name: "Rich Soil", cost: "25,000 Sheckles", speed: "2.0x", note: "Recommended mid-game" },
    { name: "Volcanic Soil", cost: "100,000 Sheckles", speed: "2.5x", note: "+Burning mutation chance" },
    { name: "Lunar Soil", cost: "500,000 Sheckles", speed: "3.0x", note: "+Moonlit mutation chance" },
    { name: "Mystic Soil", cost: "5 Garden Coins (Ascension)", speed: "3.5x", note: "Endgame best soil" },
  ];

  const fertilizers = [
    { name: "Quick-Grow Powder", effect: "Reduces growth time by 30% for 1 harvest", price: "500 Sheckles" },
    { name: "Double-Yield Fertilizer", effect: "Increases harvest output by +50% for 1 hour", price: "2,500 Sheckles" },
    { name: "Silver Fertilizer", effect: "Boosts mutation chance by +20%", price: "10,000 Sheckles" },
    { name: "Rainbow Fertilizer", effect: "Guarantees Rainbow mutation on next harvest", price: "1 Garden Coin" },
  ];

  return (
    <div className="space-y-8">
      <PageSchema title="Grow a Garden Soil & Fertilizer Guide" description="Soil types and fertilizer effects on growth speed and mutation chance in Grow a Garden." path="/soil-fertilizer" />
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Soil & Fertilizer Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Upgrade your plot soil for up to 3.5x crop growth speed and stack high-yield fertilizers.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🌱 Soil Types & Speed Multipliers</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {soils.map((s) => (
              <div key={s.name} className="p-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm w-36">{s.name}</span>
                <span className="text-slate-400">{s.cost}</span>
                <span className="text-emerald-400 font-bold text-sm">{s.speed} Speed</span>
                <span className="text-slate-400">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🧪 Fertilizer Effects & Pricing</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {fertilizers.map((f) => (
            <div key={f.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-base">{f.name}</span>
                <span className="text-xs text-emerald-400 font-bold">{f.price}</span>
              </div>
              <p className="text-xs text-slate-300">{f.effect}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
