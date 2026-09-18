export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/gear-guide" },
};

export default function GearGuidePage() {
  const sprinklers = [
    { name: "Common Sprinkler", price: "500 Sheckles", range: "8 Studs (1x1 Plot)", speed: "+25% Growth Speed", rarity: "Common" },
    { name: "Uncommon Sprinkler", price: "2,500 Sheckles", range: "16 Studs (2x2 Plot)", speed: "+50% Growth Speed", rarity: "Uncommon" },
    { name: "Rare Sprinkler", price: "10,000 Sheckles", range: "24 Studs (3x3 Plot)", speed: "+100% Growth Speed", rarity: "Rare" },
    { name: "Super Sprinkler", price: "50,000 Sheckles", range: "55 Studs (Full Garden)", speed: "+200% Growth + Mutation Luck", rarity: "Super Rarity" },
  ];

  const cans = [
    { name: "Basic Water Can", capacity: "10 Uses", boost: "Normal Moisture", note: "Starter tool" },
    { name: "Gold Water Can", capacity: "50 Uses", boost: "+30% Growth for 30s", note: "Bought from George NPC" },
    { name: "Super Water Can", capacity: "Infinite", boost: "+100% Growth + 8 Stud Splash", note: "Best manual gear" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Gear & Sprinklers Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Complete overview of George's Gear Shop stock — Sprinklers, Watering Cans, and optimal farm layout setups.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🚿 Sprinklers Tier & Stats</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {sprinklers.map((s) => (
            <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">{s.name}</span>
                <span className="text-xs font-semibold text-emerald-400">{s.price}</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between"><span>Coverage Range:</span><span className="font-semibold text-white">{s.range}</span></div>
                <div className="flex justify-between"><span>Buff Effect:</span><span className="font-semibold text-green-400">{s.speed}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🌊 Watering Cans Overview</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {cans.map((c) => (
              <div key={c.name} className="p-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">{c.name}</span>
                <span className="text-slate-400">Capacity: <strong className="text-slate-200">{c.capacity}</strong></span>
                <span className="text-green-400 font-semibold">{c.boost}</span>
                <span className="text-slate-500">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
