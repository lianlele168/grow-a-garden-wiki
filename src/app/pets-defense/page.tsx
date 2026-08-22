export default function PetsDefensePage() {
  const defenses = [
    { plant: "Venus Flytrap", role: "Anti-Steal S-Tier", desc: "Auto-snaps at any player who attempts to harvest crops on your plot without permission. Deals massive damage." },
    { plant: "Dragon's Breath", role: "AOE Perimeter Burn", desc: "Emits a ring of fire around garden borders. Stops multiple thieves simultaneously during nighttime." },
    { plant: "Hypno Bloom", role: "Stun & Disorient", desc: "Inflicts a 5-second stun on approaching players, giving you time to defend your plot." },
  ];

  const pets = [
    { pet: "Gardener Dog 🐶", buff: "+15% Harvest Speed", source: "Market Spawn (5,000 Sheckles)" },
    { pet: "Guard Bear 🐻", buff: "Auto-attacks thieves on your plot", source: "Egg Hatch / Guild Shop" },
    { pet: "Golden Bee 🐝", buff: "+20% Mutation Rate for nearby crops", source: "Special Event Egg" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Pets & Anti-Theft Defense Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Protect your high-value mutated crops from nighttime thieves with defensive plants and companion pets.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-rose-400">🛡️ Anti-Theft Defensive Plant Layout</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {defenses.map((d) => (
            <div key={d.plant} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="font-bold text-white text-lg">{d.plant}</div>
              <span className="text-xs bg-rose-950 border border-rose-800 text-rose-300 px-2 py-0.5 rounded-full inline-block font-semibold">{d.role}</span>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🐾 Pets & Companion Buffs</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {pets.map((p) => (
              <div key={p.pet} className="p-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">{p.pet}</span>
                <span className="text-emerald-400 font-semibold">{p.buff}</span>
                <span className="text-slate-400">{p.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
