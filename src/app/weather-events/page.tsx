export const metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/weather-events" },
};

export default function WeatherEventsPage() {
  const events = [
    { name: "Blood Moon 🌑", time: "Night Only", bonus: "High chance for Bloodlit mutation (3.5x value multiplier)", desc: "The rarest night event. Protect your plot — stealing is 2x more aggressive during Blood Moon." },
    { name: "Rain Storm 🌧️", time: "Anytime", bonus: "2x Crop Growth Speed + Wet mutation (2.0x value)", desc: "Revives wilted crops across the entire server. Great time to plant high-growth seeds." },
    { name: "Lightning Strike ⚡", time: "Random", bonus: "Electric mutation (2.5x value multiplier)", desc: "Strikes random garden plots. Leaves behind Electric-infused crops with high resale price." },
    { name: "Snowfall ❄️", time: "Winter / Random", bonus: "Frozen mutation (1.5x value multiplier)", desc: "Freezes crops temporarily, boosting final harvest multiplier when thawed." },
    { name: "Rainbow Event 🌈", time: "Anytime", bonus: "Rainbow mutation (4.0x value multiplier)", desc: "Spawns a temporary Rainbow Carpet. Massive sell value boost for affected crops." },
    { name: "Gold Moon 🌕", time: "Night Only", bonus: "Gold Seeds spawn + Golden mutation (20x value)", desc: "Ultra-rare lunar event. Transforms first harvest into 20x Golden value crops." },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Weather & Event Mutations</h1>
        <p className="text-slate-400 text-sm mt-1">Server-wide weather events trigger exclusive high-multiplier mutations. Learn how to capitalize on every storm.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <h2 className="text-lg font-bold text-green-400">💡 Weather Pro Tip: Mutation Clearing Strategy</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Crops in Grow a Garden can only hold <strong>ONE mutation at a time</strong>. If a weather event starts (e.g. Rainbow Rain or Blood Moon), crops already carrying low-tier mutations (like Wet or Choc) will <strong>NOT</strong> get the higher weather mutation. Clear low-value mutations before major storms!
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
