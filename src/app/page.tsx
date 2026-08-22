"use client";
import { useState } from "react";

export default function HomePage() {
  const [copied, setCopied] = useState("");

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-950 to-slate-950 border border-green-800/30 rounded-3xl p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-green-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-40 bg-emerald-500/8 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950 border border-green-700/50 text-green-300 text-xs font-semibold">
          🌱 Always Growing
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Grow a Garden <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Wiki</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          All active redeem codes, crop seed tier list, mutation value calculator, and farming strategies for Grow a Garden on Roblox.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="/codes" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-slate-950 font-bold px-7 py-3 rounded-xl transition shadow-lg shadow-green-500/25">
            🎁 Active Codes
          </a>
          <a href="/crop-tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3 rounded-xl transition border border-slate-700">
            🌾 Crop Tier List
          </a>
          <a href="/mutation-calculator" className="bg-green-950/70 hover:bg-green-900/70 text-green-300 font-bold px-7 py-3 rounded-xl transition border border-green-800/50">
            🧬 Mutation Calc
          </a>
        </div>
      </section>

      {/* Tool Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a href="/codes" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-green-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎁</div>
          <h2 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">Redeem Codes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">All working codes for free Seed Packs, Watering Cans, and decoration items. Updated with every developer drop.</p>
          <span className="text-xs text-green-400 font-semibold">View codes →</span>
        </a>

        <a href="/crop-tier-list" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🌾</div>
          <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Crop & Seed Tier List</h2>
          <p className="text-xs text-slate-400 leading-relaxed">S-tier to D-tier rankings for every seed — base sell value, multi-harvest status, and mutation potential.</p>
          <span className="text-xs text-emerald-400 font-semibold">View tier list →</span>
        </a>

        <a href="/mutation-calculator" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🧬</div>
          <h2 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Mutation Value Calculator</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Select your crop + mutation stack to see exact sell value. Includes Rainbow, Wet, Choc, Moonlit, and more multipliers.</p>
          <span className="text-xs text-teal-400 font-semibold">Calculate now →</span>
        </a>
      </section>

      {/* Latest Code */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">🔥 Latest Active Codes</h2>
          <a href="/codes" className="text-xs text-green-400 hover:underline">See all codes →</a>
        </div>
        <div className="space-y-3">
          {[
            { code: "FREESEED", reward: "3x Uncommon Seed Packs" },
            { code: "WATERYOPLANTS", reward: "10x Common Watering Cans" },
            { code: "RDCAward", reward: "RDC Trophy Decoration" },
          ].map(({ code, reward }) => (
            <div key={code} className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-3">
              <div>
                <span className="font-mono text-white font-bold">{code}</span>
                <span className="ml-3 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">✓ Active</span>
                <span className="ml-2 text-xs text-slate-400">{reward}</span>
              </div>
              <button onClick={() => copy(code)} className="text-xs bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-1.5 rounded-lg transition flex-shrink-0">
                {copied === code ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="grid md:grid-cols-2 gap-5">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">💡 Quick Farming Tips</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "Focus on multi-harvest seeds — they keep producing without replanting",
              "Defensive plants (Venus Fly Trap, Dragon's Breath) protect crops from theft",
              "Any mutation can flip a mid-tier crop into a top earner — don't skip B-tier seeds",
              "Check the Mutation Calculator before selling — stacked mutations multiply fast",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">▸</span> {tip}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">🌟 Top S-Tier Seeds Right Now</h2>
          <div className="space-y-2">
            {[
              { name: "Dragon's Breath", value: "Very High", note: "Defensive + High yield" },
              { name: "Ghost Pepper", value: "Very High", note: "Multi-harvest, fast growth" },
              { name: "Moon Bloom", value: "High", note: "Night-time bonus yield" },
              { name: "Venus Flytrap", value: "High", note: "Best defensive plant" },
            ].map((seed) => (
              <div key={seed.name} className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5">
                <div>
                  <span className="text-white text-sm font-semibold">{seed.name}</span>
                  <span className="ml-2 text-xs text-slate-400">{seed.note}</span>
                </div>
                <span className="text-xs text-amber-300 font-bold">{seed.value}</span>
              </div>
            ))}
          </div>
          <a href="/crop-tier-list" className="text-xs text-emerald-400 hover:underline block">View full tier list →</a>
        </div>
      </section>
    </div>
  );
}
