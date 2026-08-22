"use client";
import { useState } from "react";
import Link from "next/link";
import { Gift, Layers, Calculator, ArrowLeftRight, ArrowUpRight, FlaskConical, CloudSun, Shield, BookOpen, ChevronRight, Check, Copy } from "lucide-react";

export default function HomePage() {
  const [copied, setCopied] = useState("");

  const copyCode = (c: string) => {
    navigator.clipboard.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-slate-900 to-[#071209] border border-green-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/80 border border-green-700/50 text-green-300 text-xs font-semibold">
          🌱 Complete Roblox Grow a Garden Community Database & Toolset
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Grow a Garden <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Wiki</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Active redeem codes, Crop Tier Lists, Mutation Value Calculator, Ascension Rebirth guide, Soil & Fertilizers, and Trading Value list.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/codes" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-green-500/20 text-sm">
            <Gift className="w-4 h-4" /> Active Codes
          </Link>
          <Link href="/crop-tier-list" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition border border-slate-700 text-sm">
            <Layers className="w-4 h-4 text-green-400" /> Crop Tier List
          </Link>
          <Link href="/mutation-calculator" className="inline-flex items-center gap-2 bg-green-950/80 hover:bg-green-900/80 text-green-300 font-bold px-6 py-3 rounded-xl transition border border-green-800/60 text-sm">
            <Calculator className="w-4 h-4" /> Mutation Calculator
          </Link>
        </div>
      </section>

      {/* Grid of Main Features */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>⚡</span> Community Databases & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Active Codes", href: "/codes", icon: Gift, color: "text-amber-400", desc: "Working promo codes for free Seeds, Sheckles, and Sprinklers." },
            { title: "Crop Tier List", href: "/crop-tier-list", icon: Layers, color: "text-green-400", desc: "S-D grade crop profit tier list with multi-harvest properties." },
            { title: "Mutation Calculator", href: "/mutation-calculator", icon: Calculator, color: "text-emerald-400", desc: "Calculate total Sheckles based on stacked Rainbow/Golden mutations." },
            { title: "Trading Values", href: "/trading-values", icon: ArrowLeftRight, color: "text-sky-400", desc: "Market trade values for pets, rare mutations, and Garden Coins." },
            { title: "Ascension Rebirth", href: "/ascension-guide", icon: ArrowUpRight, color: "text-purple-400", desc: "1 Trillion Sheckles Orson Ascension requirements and Garden Coin perks." },
            { title: "Soil & Fertilizer", href: "/soil-fertilizer", icon: FlaskConical, color: "text-cyan-400", desc: "Mystic Soil 3.5x speed multipliers and Double-Yield fertilizers." },
            { title: "Weather Events", href: "/weather-events", icon: CloudSun, color: "text-amber-300", desc: "Blood Moon, Rain, and Lightning weather mutation buffs." },
            { title: "Pets & Plot Defense", href: "/pets-defense", icon: Shield, color: "text-red-400", desc: "Anti-theft plant defense layouts and pet boost companions." },
            { title: "Beginner Guide", href: "/beginner-guide", icon: BookOpen, color: "text-emerald-300", desc: "6-step fast money progression guide and FAQ." },
          ].map(item => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group glass-panel glass-panel-hover rounded-2xl p-6 space-y-3 block">
                <div className="flex justify-between items-center">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-green-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Codes Card */}
      <section className="glass-panel rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" /> Active Redeem Codes
          </h2>
          <Link href="/codes" className="text-xs text-green-400 hover:underline flex items-center gap-1">
            View All Codes <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { code: "GARDEN2026", reward: "50,000 Sheckles + Master Sprinkler" },
            { code: "MUTATION", reward: "2x Rainbow Fertilizer" },
            { code: "BLOODMOON", reward: "1x Bloodlit Seed Pack" },
            { code: "FREECOINS", reward: "10x Garden Coins" },
          ].map(({ code, reward }) => (
            <div key={code} className="flex items-center justify-between bg-slate-950/80 border border-slate-800 rounded-xl p-3.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-white font-bold text-sm">{code}</span>
                  <span className="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 px-1.5 py-0.2 rounded font-semibold">Active</span>
                </div>
                <div className="text-xs text-slate-400">{reward}</div>
              </div>
              <button
                onClick={() => copyCode(code)}
                className="inline-flex items-center gap-1 text-xs bg-green-600 hover:bg-green-500 text-white font-bold px-3 py-1.5 rounded-lg transition"
              >
                {copied === code ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
