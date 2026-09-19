"use client";
import { useState } from "react";

export default function CodesPage() {
  const [copied, setCopied] = useState("");
  const copy = (code: string) => { navigator.clipboard.writeText(code); setCopied(code); setTimeout(() => setCopied(""), 2000); };

  const active = [
    { code: "WATERYOPLANTS", reward: "10x Common Watering Cans", type: "Tool" },
    { code: "REMEMBERTODRINKWATER", reward: "1x Common Watering Can", type: "Tool" },
    { code: "TEAMGREENBEAN", reward: "3x Green Bean Seeds", type: "Seed" },
    { code: "RDCAward", reward: "RDC Trophy decoration", type: "Decor" },
    { code: "BEANORLEAVE10", reward: "Green Bean Chamber decoration", type: "Decor" },
    { code: "torigate", reward: "Whispering Torii decoration", type: "Decor" },
  ];

  const expired = [
    { code: "LAUNCH", reward: "Starter Seed Pack" },
    { code: "GARDENDAY", reward: "5x Watering Cans" },
  ];

  const tagColor: Record<string, string> = {
    Seed: "bg-green-950 text-green-300 border-green-700",
    Tool: "bg-blue-950 text-blue-300 border-blue-700",
    Decor: "bg-purple-950 text-purple-300 border-purple-700",
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Codes</h1>
        <p className="text-slate-400 text-sm mt-1">All working redeem codes for free Seed Packs, Watering Cans, and decorations. Updated regularly.</p>
      </div>

      <div className="bg-green-950/30 border border-green-800/40 rounded-xl p-4 text-sm text-green-200">
        🌱 <strong>How to redeem:</strong> Open Settings (cog icon, top-left) → find the code input box → enter code → press Submit.
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">✅ Active Codes <span className="text-xs bg-green-950 text-green-400 border border-green-700 px-2 py-0.5 rounded-full font-normal">{active.length} working</span></h2>
        {active.map(({ code, reward, type }) => (
          <div key={code} className="flex items-center justify-between bg-slate-900 border border-slate-800 hover:border-green-800/50 rounded-xl px-5 py-4 transition">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-white font-bold text-base">{code}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${tagColor[type]}`}>{type}</span>
              <span className="text-xs text-slate-400">{reward}</span>
            </div>
            <button onClick={() => copy(code)} className="text-xs bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-2 rounded-lg transition flex-shrink-0 ml-4">
              {copied === code ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-500 flex items-center gap-2">❌ Expired Codes</h2>
        {expired.map(({ code, reward }) => (
          <div key={code} className="flex items-center justify-between bg-slate-950 border border-slate-800/50 rounded-xl px-5 py-4 opacity-50">
            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-500 font-bold line-through">{code}</span>
              <span className="text-xs text-slate-600">{reward}</span>
            </div>
            <span className="text-xs text-slate-600 font-bold">Expired</span>
          </div>
        ))}
      </section>
    </div>
  );
}
