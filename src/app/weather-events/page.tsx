import PageSchema from "@/components/PageSchema";

export const metadata = {
  title: { absolute: "Grow a Garden Weather & Event Mutations" },
  description: "How rain, thunderstorms and special events trigger crop mutations, and what each weather window is worth.",
  alternates: { canonical: "https://growagarden.robloxwikihub.com/weather-events" },
};

export default function WeatherEventsPage() {
  const events = [
    { name: "Blood Moon 🌑", time: "Night Only", bonus: "Bloodlit mutation (x4 value multiplier)", desc: "The famous red night event. Crops harvested under it gain the Bloodlit multiplier — and the Blood Moon shop sells Blood Banana and Moon Melon seeds." },
    { name: "Rain Storm 🌧️", time: "Anytime", bonus: "Wet mutation (x2 value multiplier)", desc: "Server-wide rain applies Wet to crops — the most common stacking mutation and a building block for Frozen (x10)." },
    { name: "Thunderstorm ⚡", time: "Random", bonus: "Shocked mutation (x100 value multiplier)", desc: "Lightning strikes random plots. Shocked is one of the strongest environmental mutations in the game." },
    { name: "Frost / Snowfall ❄️", time: "Winter / Random", bonus: "Chilled (x2); Wet + frozen conditions merge into Frozen (x10)", desc: "Cold snaps chill crops, and a chilled or wet crop that freezes upgrades into the far stronger Frozen mutation." },
    { name: "Moonlight Event 🌕", time: "Night", bonus: "Moonlit mutation (x2 value multiplier)", desc: "Nighttime moonlight events apply Moonlit — and feed the Moonlight packs that contain Moon Blossom and Moonflower." },
    { name: "Sunrise Event 🌅", time: "Dawn", bonus: "Dawnbound mutation (x150 — highest multiplier in the game)", desc: "The rarest timing-based event. A Dawnbound crop outvalues almost any other single mutation stack." },
  ];

  return (
    <div className="space-y-8">
      <PageSchema title="Grow a Garden Weather & Event Mutations" description="How rain, thunderstorms and special events trigger crop mutations, and what each weather window is worth." path="/weather-events" />
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Weather & Event Mutations</h1>
        <p className="text-slate-400 text-sm mt-1">Server-wide weather events trigger exclusive high-multiplier mutations. Learn how to capitalize on every storm.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <h2 className="text-lg font-bold text-green-400">💡 How Mutation Stacking Works</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          A fruit holds <strong>ONE growth mutation</strong> (Gold x20 or Rainbow x50) plus <strong>stackable environmental mutations</strong>. The official formula: total multiplier = growth + sum of environmental − environmental count + 1. Example: Gold (20) + Wet (2) + Frozen (10) = 20 + 2 + 10 − 2 + 1 = <strong>31x</strong>. Weather events are how you farm the environmental side of that equation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {events.map((e) => (
          <div key={e.name} className="bg-slate-900 border border-slate-800 hover:border-green-800/50 rounded-2xl p-6 space-y-3 transition">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{e.name}</h2>
              <span className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full font-semibold">{e.time}</span>
            </div>
            <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-xl">{e.bonus}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
