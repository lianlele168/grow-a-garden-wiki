export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/crop-tier-list" },
};

const S_TIER = [
  { name: "Maple Resin", value: "1,500,000,000 Sheckles", harvest: "Multi", note: "Transcendent — most expensive documented seed (Fall Merchant)" },
  { name: "Romanesco", value: "88,000,000 Sheckles", harvest: "Multi", note: "Prismatic — priciest always-stocked seed in Sam's Stall" },
  { name: "Elder Strawberry", value: "70,000,000 Sheckles", harvest: "Multi", note: "Prismatic — near the top of the price ladder" },
  { name: "Giant Pinecone", value: "55,000,000 Sheckles", harvest: "Multi", note: "Prismatic — weight swings create jackpot harvests" },
  { name: "Burning Bud", value: "40,000,000 Sheckles", harvest: "Multi", note: "Prismatic — very high per-harvest value" },
  { name: "Sugar Apple", value: "20,000,000 Sheckles", harvest: "Multi", note: "Prismatic — flagship end-game investment" },
  { name: "Crimson Thorn", value: "1,149 Robux", harvest: "Multi", note: "Transcendent — Robux-only seed" },
  { name: "Bone Blossom", value: "Dino Quests", harvest: "Varies", note: "Transcendent — weekly quest reward, top-tier crop" },
];

const A_TIER = [
  { name: "Beanstalk", value: "10,000,000 Sheckles", harvest: "Multi", note: "Prismatic — gateway to top-tier farming" },
  { name: "Ember Lily", value: "15,000,000 Sheckles", harvest: "Multi", note: "Prismatic — premium multi-harvest payouts" },
  { name: "Golden Peach", value: "900,000,000 Sheckles", harvest: "Multi", note: "Divine — retired fall-store seed" },
  { name: "Moon Mango", value: "1,000,000,000 Sheckles", harvest: "Multi", note: "Divine — twilight event exclusive" },
  { name: "Cacao", value: "2,500,000 Sheckles", harvest: "Multi", note: "Divine — best value among affordable Divine trees" },
  { name: "Pepper", value: "1,000,000 Sheckles", harvest: "Multi", note: "Divine — late-game multi-harvest chili" },
  { name: "Grape", value: "850,000 Sheckles", harvest: "Multi", note: "Divine — repeatable premium harvests" },
  { name: "Sunflower", value: "Flower Pack", harvest: "Varies", note: "Divine — the real sunflower crop, from the Flower Seed Pack" },
  { name: "Moon Blossom", value: "Moonlight Pack", harvest: "Varies", note: "Divine — the genuine lunar bloom crop" },
  { name: "Venus Flytrap", value: "Angry Plant Pack", harvest: "Single", note: "Divine — carnivorous pack crop" },
];

const B_TIER = [
  { name: "Mango", value: "100,000 Sheckles", harvest: "Multi", note: "Mythical — core mid-game money maker" },
  { name: "Dragon Fruit", value: "50,000 Sheckles", harvest: "Multi", note: "Mythical — long-standing multi-harvest favorite" },
  { name: "Cactus", value: "15,000 Sheckles", harvest: "Multi", note: "Mythical — high per-pick value" },
  { name: "Coconut", value: "6,000 Sheckles", harvest: "Multi", note: "Mythical — continuous palm yields" },
  { name: "Apple", value: "3,250 Sheckles", harvest: "Multi", note: "Legendary — orchard staple" },
  { name: "Bamboo", value: "4,000 Sheckles", harvest: "Single", note: "Legendary — fast flip farming" },
  { name: "Blood Banana", value: "200,000 Sheckles", harvest: "Multi", note: "Mythical — Blood Moon shop exclusive" },
  { name: "Moon Melon", value: "500,000 Sheckles", harvest: "Multi", note: "Divine-priced Blood Moon melon" },
];

const C_TIER = [
  { name: "Corn", value: "1,300 Sheckles", harvest: "Multi", note: "Rare — mid-game workhorse" },
  { name: "Tomato", value: "800 Sheckles", harvest: "Multi", note: "Rare — early passive income" },
  { name: "Blueberry", value: "400 Sheckles", harvest: "Multi", note: "Uncommon — first real multi-harvest bush" },
  { name: "Strawberry", value: "50 Sheckles", harvest: "Multi", note: "Common — cheapest multi-harvest seed" },
  { name: "Carrot", value: "10 Sheckles", harvest: "Single", note: "Common — starter crop, 90-second payoff" },
];

const tiers = [
  { tier: "S", label: "Transcendent / Prismatic", color: "border-amber-500 bg-amber-950/20", labelClass: "text-amber-400", crops: S_TIER },
  { tier: "A", label: "Divine", color: "border-orange-500 bg-orange-950/20", labelClass: "text-orange-400", crops: A_TIER },
  { tier: "B", label: "Mythical / Legendary", color: "border-blue-500 bg-blue-950/20", labelClass: "text-blue-400", crops: B_TIER },
  { tier: "C", label: "Rare and below", color: "border-slate-500 bg-slate-950/20", labelClass: "text-slate-400", crops: C_TIER },
];

const faqs = [
  { q: "What is the best seed for pure profit?", a: "Among always-stocked seeds, Romanesco (88,000,000 Sheckles, Prismatic, multi-harvest) has the highest ceiling, but Sugar Apple (20,000,000) is the classic end-game pick because it costs far less while still being Prismatic and multi-harvest." },
  { q: "Are event seeds like Candy Blossom still obtainable?", a: "No — Candy Blossom (Easter), Moon Melon and Blood Banana (Blood Moon), and Moon Mango (Twilight) only appear during their events or from other players. They return only when the event shop rotates back." },
  { q: "How do tiers relate to rarity?", a: "Grow a Garden rarities run Common, Uncommon, Rare, Legendary, Mythical, Divine, Prismatic, Transcendent. Higher rarities cost more and generally pay more per harvest, but multi-harvest crops with stacked mutations (Gold x20, Rainbow x50) can out-earn single-harvest seeds many tiers above them." },
];

export default function CropTierListPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Crop & Seed Tier List</h1>
        <p className="text-slate-400 text-sm mt-1">Real crops ranked by documented seed price, harvest type, and mutation potential — sourced from the official seed-shop tables, not invented values.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><span className="text-white font-bold">Value</span> — documented seed price (Sheckles / Robux / pack source)</div>
        <div><span className="text-white font-bold">Harvest</span> — Multi = regrows without replanting</div>
        <div><span className="text-white font-bold">Note</span> — source shop and why it earns its tier</div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        Tier mapping: S = Transcendent/Prismatic, A = Divine, B = Mythical/Legendary, C = Rare and below. The game rotates stock weekly and events return seasonally, so treat prices as the verified snapshot and re-check shops in-game. Fruit sell value on top of the seed cost depends on fruit weight and mutations — run specific crops through our Mutation Calculator for exact multiplier math.
      </p>

      {tiers.map(({ tier, label, color, labelClass, crops }) => (
        <div key={tier} className={`border rounded-2xl overflow-hidden ${color}`}>
          <div className="px-5 py-3 border-b border-slate-700/50 flex items-baseline gap-3">
            <span className={`text-2xl font-black ${labelClass}`}>{tier} Tier</span>
            <span className="text-xs text-slate-400 font-semibold">{label}</span>
          </div>
          <div className="divide-y divide-slate-800/50">
            {crops.map((crop) => (
              <div key={crop.name} className="flex flex-wrap items-center px-5 py-3 gap-x-4 gap-y-1">
                <span className="text-white font-semibold w-40 flex-shrink-0">{crop.name}</span>
                <span className="text-xs text-emerald-400 w-44 flex-shrink-0">{crop.value}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold flex-shrink-0 ${crop.harvest === "Multi" ? "bg-green-950 text-green-300 border-green-700" : "bg-slate-800 text-slate-400 border-slate-700"}`}>{crop.harvest}</span>
                <span className="text-xs text-slate-400 flex-1 min-w-40">{crop.note}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">❓ Tier List FAQ</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <div className="font-semibold text-green-300 text-sm">{faq.q}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
