export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/ascension-guide" },
};

export default function AscensionGuidePage() {
  const requirements = [
    { name: "1 Trillion Sheckles", desc: "Accumulated cash balance required to initiate Ascension at Orson the Merchant." },
    { name: "Specific Mutation Fruit", desc: "1-3 required fruits with specific mutations (changes per ascension level)." },
    { name: "24-Hour Cooldown", desc: "Cooldown timer between consecutive ascensions." },
  ];

  const perks = [
    { perk: "Garden Coins Reward", effect: "Earn 10-50 Garden Coins per ascension to unlock prestige shop items.", priority: "Essential" },
    { perk: "Permanent Growth Speed +25%", effect: "Passive speed boost applied across all plots permanently.", priority: "High" },
    { perk: "Unlocks Mystic Soil", effect: "Allows purchase of 3.5x speed Mystic Soil from Goliath NPC.", priority: "High" },
    { perk: "Mutation Luck Multiplier", effect: "+10% chance for Rainbow and Golden mutations.", priority: "Medium" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Ascension & Rebirth Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Everything about Orson's Ascension Shop — requirements, Garden Coins, and permanent perk unlock priorities.</p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-slate-900 border border-purple-800/50 rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-purple-300">📍 Where to find Orson the Merchant</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Orson is located in the back corner of the main plaza, behind the primary Sell Stand. Talk to him once you hit 1 Trillion Sheckles to begin your Ascension.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">📋 Ascension Requirements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {requirements.map((r) => (
            <div key={r.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="font-bold text-amber-400 text-base">{r.name}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🌟 Garden Coins & Permanent Perks</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {perks.map((p) => (
              <div key={p.perk} className="p-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">{p.perk}</span>
                <span className="text-slate-300">{p.effect}</span>
                <span className="text-xs bg-purple-950 border border-purple-800 text-purple-300 px-2.5 py-1 rounded-full font-semibold">{p.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
