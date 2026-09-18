export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/crop-tier-list" },
};

export default function CropTierListPage() {
  const tiers = [
    {
      tier: "S", color: "border-amber-500 bg-amber-950/20", label: "text-amber-400",
      crops: [
        { name: "Dragon's Breath", value: "~850/crop", harvest: "Multi", note: "Defensive + highest base value" },
        { name: "Ghost Pepper", value: "~780/crop", harvest: "Multi", note: "Fast growth, premium sell price" },
        { name: "Moon Bloom", value: "~720/crop", harvest: "Multi", note: "+50% night bonus" },
        { name: "Venus Flytrap", value: "~700/crop", harvest: "Single", note: "Best anti-theft plant" },
        { name: "Hypno Bloom", value: "~690/crop", harvest: "Multi", note: "Stuns thieves, high value" },
      ]
    },
    {
      tier: "A", color: "border-orange-500 bg-orange-950/20", label: "text-orange-400",
      crops: [
        { name: "Glow Mushroom", value: "~480/crop", harvest: "Multi", note: "Consistent yield" },
        { name: "Poison Apple", value: "~450/crop", harvest: "Single", note: "Good early game" },
        { name: "Pomegranate", value: "~420/crop", harvest: "Multi", note: "High mutation potential" },
        { name: "Sunflower", value: "~400/crop", harvest: "Multi", note: "Reliable mid-game" },
        { name: "Fire Fern", value: "~380/crop", harvest: "Multi", note: "Fast grow speed" },
      ]
    },
    {
      tier: "B", color: "border-blue-500 bg-blue-950/20", label: "text-blue-400",
      crops: [
        { name: "Dragon Fruit", value: "~250/crop", harvest: "Single", note: "Decent early earner" },
        { name: "Cherry", value: "~220/crop", harvest: "Multi", note: "Budget multi-harvest" },
        { name: "Green Bean", value: "~180/crop", harvest: "Multi", note: "Free from codes, solid" },
        { name: "Mango", value: "~200/crop", harvest: "Single", note: "Average value" },
        { name: "Bamboo", value: "~170/crop", harvest: "Multi", note: "Filler but fast" },
      ]
    },
    {
      tier: "C", color: "border-slate-500 bg-slate-950/20", label: "text-slate-400",
      crops: [
        { name: "Carrot", value: "~80/crop", harvest: "Single", note: "Starter crop" },
        { name: "Potato", value: "~70/crop", harvest: "Single", note: "Very low value" },
        { name: "Strawberry", value: "~90/crop", harvest: "Multi", note: "Low yield" },
        { name: "Wheat", value: "~60/crop", harvest: "Single", note: "Tutorial only" },
      ]
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Crop & Seed Tier List</h1>
        <p className="text-slate-400 text-sm mt-1">All seeds ranked by base sell value, harvest type, and mutation potential. Best picks for maximizing earnings.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 grid grid-cols-3 gap-4">
        <div><span className="text-white font-bold">Value</span> — Base sell price per crop (no mutations)</div>
        <div><span className="text-white font-bold">Harvest</span> — Multi = regrows without replanting</div>
        <div><span className="text-white font-bold">Note</span> — Special trait or best use case</div>
      </div>

      {tiers.map(({ tier, color, label, crops }) => (
        <div key={tier} className={`border rounded-2xl overflow-hidden ${color}`}>
          <div className="px-5 py-3 border-b border-slate-700/50">
            <span className={`text-2xl font-black ${label}`}>{tier} Tier</span>
          </div>
          <div className="divide-y divide-slate-800/50">
            {crops.map((crop) => (
              <div key={crop.name} className="flex items-center px-5 py-3 gap-4">
                <span className="text-white font-semibold w-40 flex-shrink-0">{crop.name}</span>
                <span className="text-xs text-emerald-400 w-24 flex-shrink-0">{crop.value}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold flex-shrink-0 ${crop.harvest === "Multi" ? "bg-green-950 text-green-300 border-green-700" : "bg-slate-800 text-slate-400 border-slate-700"}`}>{crop.harvest}</span>
                <span className="text-xs text-slate-400">{crop.note}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
