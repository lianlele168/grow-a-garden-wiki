"use client";
import { useState } from "react";

const CROPS: Record<string, number> = {
  "Dragon's Breath": 850, "Ghost Pepper": 780, "Moon Bloom": 720,
  "Venus Flytrap": 700, "Hypno Bloom": 690, "Glow Mushroom": 480,
  "Poison Apple": 450, "Pomegranate": 420, "Sunflower": 400,
  "Fire Fern": 380, "Dragon Fruit": 250, "Cherry": 220,
  "Green Bean": 180, "Mango": 200, "Carrot": 80, "Potato": 70,
};

const MUTATIONS: { name: string; mult: number; color: string }[] = [
  { name: "Rainbow 🌈", mult: 4.0, color: "text-pink-400" },
  { name: "Wet 💧", mult: 2.0, color: "text-blue-400" },
  { name: "Choc 🍫", mult: 1.75, color: "text-amber-700" },
  { name: "Moonlit 🌙", mult: 1.5, color: "text-indigo-400" },
  { name: "Burning 🔥", mult: 1.5, color: "text-orange-400" },
  { name: "Golden ✨", mult: 20.0, color: "text-yellow-400" },
  { name: "Disco 🪩", mult: 3.0, color: "text-purple-400" },
  { name: "Frozen ❄️", mult: 1.5, color: "text-cyan-400" },
];

export default function MutationCalculatorPage() {
  const [crop, setCrop] = useState("Ghost Pepper");
  const [muts, setMuts] = useState<string[]>([]);
  const [qty, setQty] = useState(1);

  const toggleMut = (name: string) => setMuts(prev => prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]);

  const base = CROPS[crop] ?? 100;
  const multiplier = muts.reduce((acc, m) => acc * (MUTATIONS.find(x => x.name === m)?.mult ?? 1), 1);
  const total = Math.round(base * multiplier * qty);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Mutation Value Calculator</h1>
        <p className="text-slate-400 text-sm mt-1">Select your crop, active mutations, and quantity to calculate exact sell value before trading or selling.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">1. Select Crop</h2>
            <select value={crop} onChange={e => setCrop(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500">
              {Object.keys(CROPS).map(c => <option key={c}>{c}</option>)}
            </select>
            <div className="text-xs text-slate-400">Base value: <span className="text-emerald-400 font-bold">{base.toLocaleString()} coins</span></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">2. Select Mutations</h2>
            <div className="grid grid-cols-2 gap-2">
              {MUTATIONS.map(m => (
                <button key={m.name} onClick={() => toggleMut(m.name)}
                  className={`text-xs px-3 py-2 rounded-xl border font-bold transition ${muts.includes(m.name) ? "bg-green-950 border-green-500 text-green-300" : "bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500"}`}>
                  {m.name} <span className={`${m.color}`}>×{m.mult}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">3. Quantity</h2>
            <div className="flex items-center gap-3">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xl transition">−</button>
              <input type="number" value={qty} min={1} max={999} onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 bg-slate-950 border border-slate-700 text-white text-center rounded-xl px-4 py-2 text-lg font-bold focus:outline-none focus:border-green-500" />
              <button onClick={() => setQty(qty + 1)} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xl transition">+</button>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="space-y-5">
          <div className="bg-gradient-to-br from-green-950 to-emerald-950 border border-green-700/50 rounded-2xl p-8 text-center space-y-4 sticky top-24">
            <div className="text-slate-400 text-sm">Estimated Sell Value</div>
            <div className="text-5xl font-black text-white">{total.toLocaleString()}</div>
            <div className="text-green-400 text-lg font-bold">coins</div>

            {muts.length > 0 && (
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2 text-left">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Calculation Breakdown</div>
                <div className="text-xs text-slate-300">Base: <span className="text-white font-bold">{base}</span></div>
                {muts.map(m => {
                  const mut = MUTATIONS.find(x => x.name === m);
                  return <div key={m} className="text-xs text-slate-300">× {m}: <span className={`font-bold ${mut?.color}`}>{mut?.mult}x</span></div>;
                })}
                <div className="text-xs text-slate-300">× Qty: <span className="text-white font-bold">{qty}</span></div>
                <div className="border-t border-slate-700 pt-2 text-xs font-bold text-emerald-400">= {total.toLocaleString()} coins</div>
              </div>
            )}

            {muts.length === 0 && <p className="text-xs text-slate-500">Select mutations above to see multiplied value</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
