export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/trading-values" },
};

export default function TradingValuesPage() {
  const pets = [
    { name: "Black Dragon 🐉", value: "80,000 Trade Tokens", tier: "S+", note: "Highest market demand pet" },
    { name: "Ice Dragon 🧊", value: "45,000 Trade Tokens", tier: "S", note: "Auto-freezes plot thieves" },
    { name: "Golden Butterfly 🦋", value: "30,000 Trade Tokens", tier: "S", note: "+25% Golden mutation rate" },
    { name: "Star Fruit Pet 🌟", value: "15,000 Trade Tokens", tier: "A", note: "Passively spawns Star Seeds" },
    { name: "Guard Bear 🐻", value: "5,000 Trade Tokens", tier: "B", note: "Basic plot defense companion" },
  ];

  const mutatedCrops = [
    { crop: "Golden Dragon's Breath", value: "~17,000 Sheckles / Trade Token equivalent", demand: "High" },
    { crop: "Rainbow Ghost Pepper", value: "~3,100 Sheckles", demand: "Very High" },
    { crop: "Bloodlit Moon Bloom", value: "~2,500 Sheckles", demand: "High" },
    { crop: "Electric Venus Flytrap", value: "~1,750 Sheckles", demand: "Medium" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Trading Values & Market List</h1>
        <p className="text-slate-400 text-sm mt-1">Community-verified market reference values for pets, mutated crops, and Trade Tokens.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-amber-400">🐾 Pet Market Values (Trade Tokens)</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {pets.map((p) => (
              <div key={p.name} className="p-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm w-44">{p.name}</span>
                <span className="text-xs bg-amber-950 border border-amber-800 text-amber-300 px-2.5 py-0.5 rounded-full font-bold">{p.tier} Tier</span>
                <span className="text-emerald-400 font-bold text-sm">{p.value}</span>
                <span className="text-slate-400">{p.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🌾 Rare Mutated Crop Trading Reference</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mutatedCrops.map((c) => (
            <div key={c.crop} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-sm">{c.crop}</span>
                <span className="text-xs text-green-400 font-semibold">Demand: {c.demand}</span>
              </div>
              <p className="text-xs text-slate-300">{c.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
