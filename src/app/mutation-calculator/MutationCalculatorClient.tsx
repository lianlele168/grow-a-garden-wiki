"use client";
import { useState } from "react";
import { CROPS_DATA, MUTATIONS_DATA, officialMutationMultiplier } from "@/data/wikiData";

const GROWTH_MUTATIONS = MUTATIONS_DATA.filter((m) => m.category === "Growth");
const ENV_MUTATIONS = MUTATIONS_DATA.filter((m) => m.category === "Environmental");

export default function MutationCalculatorClient() {
  const [crop, setCrop] = useState("Carrot");
  const [growthMut, setGrowthMut] = useState("None");
  const [muts, setMuts] = useState<string[]>([]);
  const [qty, setQty] = useState(1);

  const toggleMut = (name: string) => setMuts(prev => prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]);

  const cropData = CROPS_DATA.find(c => c.name === crop) ?? CROPS_DATA[0];
  const growthMult = growthMut === "None" ? 1 : GROWTH_MUTATIONS.find(m => m.name === growthMut)?.multiplier ?? 1;
  const envMults = muts.map(name => ENV_MUTATIONS.find(m => m.name === name)?.multiplier ?? 0);
  // Official formula: growth + SUM(environmental) - count + 1
  const multiplier = officialMutationMultiplier(growthMult, envMults);
  // Reference scale only (seed price x multiplier); real fruit value also depends on weight.
  const total = Math.round(cropData.seedPrice * multiplier * qty);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Mutation Value Calculator</h1>
        <p className="text-slate-400 text-sm mt-1">Official mutation formula: growth mutation + Σ environmental mutations − count + 1. Pick a crop, stack mutations, and see the exact value multiplier before selling.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">1. Select Crop</h2>
            <select value={crop} onChange={e => setCrop(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500">
              {CROPS_DATA.map(c => <option key={c.id} value={c.name}>{c.name} ({c.rarity})</option>)}
            </select>
            <div className="text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
              <span>Seed price: <span className="text-emerald-400 font-bold">{cropData.seedPrice > 0 ? `${cropData.seedPrice.toLocaleString()} ${cropData.currency}` : cropData.robuxPrice > 0 ? `${cropData.robuxPrice} Robux` : "Pack / Quest"}</span></span>
              <span>Rarity: <span className="text-green-300 font-bold">{cropData.rarity}</span></span>
              <span>Harvest: <span className="text-green-300 font-bold">{cropData.multiHarvest === undefined ? "Varies" : cropData.multiHarvest ? "Multi" : "Single"}</span></span>
            </div>
            <p className="text-[11px] text-slate-500">Source: {cropData.source}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">2. Growth Mutation <span className="text-xs font-normal text-slate-400">(one per fruit)</span></h2>
            <div className="grid grid-cols-3 gap-2">
              {["None", ...GROWTH_MUTATIONS.map(m => m.name)].map(name => {
                const m = GROWTH_MUTATIONS.find(x => x.name === name);
                return (
                  <button key={name} onClick={() => setGrowthMut(name)}
                    className={`text-xs px-3 py-2 rounded-xl border font-bold transition flex items-center justify-between ${growthMut === name ? "bg-green-950 border-green-500 text-green-300" : "bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500"}`}>
                    {name} {m && <span className={m.colorClass}>×{m.multiplier}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">3. Environmental Mutations <span className="text-xs font-normal text-slate-400">(stackable)</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
              {ENV_MUTATIONS.map(m => (
                <button key={m.id} onClick={() => toggleMut(m.name)}
                  className={`text-xs px-3 py-2 rounded-xl border font-bold transition flex items-center justify-between ${muts.includes(m.name) ? "bg-green-950 border-green-500 text-green-300" : "bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500"}`}>
                  {m.name} <span className={m.colorClass}>×{m.multiplier}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">4. Quantity</h2>
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
            <div className="text-slate-400 text-sm">Total Mutation Multiplier</div>
            <div className="text-5xl font-black text-white">{multiplier.toLocaleString()}x</div>
            <div className="text-green-400 text-sm font-bold">Reference value (seed price × multiplier × qty): {total.toLocaleString()} {cropData.currency}</div>

            {muts.length > 0 && (
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2 text-left">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Formula Breakdown</div>
                <div className="text-xs text-slate-300">Growth: <span className="text-white font-bold">{growthMut === "None" ? "1 (none)" : `${growthMut} ×${growthMult}`}</span></div>
                {muts.map(m => {
                  const mut = ENV_MUTATIONS.find(x => x.name === m);
                  return <div key={m} className="text-xs text-slate-300">+ {m}: <span className={`font-bold ${mut?.colorClass}`}>{mut?.multiplier}x</span></div>;
                })}
                <div className="text-xs text-slate-300">− environmental count ({muts.length}) + 1</div>
                <div className="text-xs text-slate-300">× Qty: <span className="text-white font-bold">{qty}</span></div>
                <div className="border-t border-slate-700 pt-2 text-xs font-bold text-emerald-400">= {multiplier.toLocaleString()}x value</div>
              </div>
            )}

            {muts.length === 0 && growthMut === "None" && <p className="text-xs text-slate-500">Select mutations above to see the official multiplier stack</p>}
            <p className="text-[11px] text-slate-500 leading-relaxed">Fruit sell value = base fruit value × multiplier × weight. Base fruit value is rolled per fruit in-game, so this tool shows the multiplier stack and a seed-price reference scale — never a fabricated sell price.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
