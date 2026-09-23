"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { CROPS_DATA, MUTATIONS_DATA, officialMutationMultiplier } from "@/data/wikiData";
import { Calculator, Sparkles, Sprout } from "lucide-react";

const GROWTH_MUTATIONS = MUTATIONS_DATA.filter((m) => m.category === "Growth");
const ENV_MUTATIONS = MUTATIONS_DATA.filter((m) => m.category === "Environmental");

export default function CalculatorClient() {
  const [selectedCrop, setSelectedCrop] = useState(CROPS_DATA[0].name);
  const [growthMut, setGrowthMut] = useState<string>("None");
  const [activeMuts, setActiveMuts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const crop = CROPS_DATA.find((c) => c.name === selectedCrop) || CROPS_DATA[0];
  const growthMult = growthMut === "None" ? 1 : GROWTH_MUTATIONS.find((m) => m.name === growthMut)?.multiplier ?? 1;
  const envMults = activeMuts.map(
    (name) => ENV_MUTATIONS.find((m) => m.name === name)?.multiplier ?? 0
  );
  // Official Grow a Garden formula:
  // total = growth + SUM(environmental) - environmentalCount + 1
  const totalMult = officialMutationMultiplier(growthMult, envMults);

  const toggleMutation = (name: string) => {
    setActiveMuts((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
  };

  // Reference scale only: documented SEED price x multiplier. Actual fruit sell
  // value additionally depends on fruit weight, which the game rolls per fruit.
  const referenceValue = Math.round(crop.seedPrice * totalMult * quantity);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do stacked mutations work in Grow a Garden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grow a Garden uses the official formula: total multiplier = growth mutation + sum of environmental mutations - number of environmental mutations + 1. A fruit can hold only one growth mutation (Gold x20 or Rainbow x50), while environmental mutations such as Wet (x2) and Bloodlit (x4) stack. Example: Gold + Wet + Frozen = 20 + 2 + 10 - 2 + 1 = 31x.",
        },
      },
      {
        "@type": "Question",
        name: "What is the highest mutation multiplier in Grow a Garden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dawnbound (x150) from the sunrise event is the highest environmental mutation, followed by Voidtouched (x135), Disco (x125), and Celestial/Galactic (x120). The strongest growth mutation is Rainbow (x50).",
        },
      },
      {
        "@type": "Question",
        name: "What is the most expensive seed in Grow a Garden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maple Resin (Transcendent, Fall Traveling Merchant) costs 1,500,000,000 Sheckles. In Sam's always-stocked stall the priciest seed is Romanesco (Prismatic, 88,000,000 Sheckles), and Crimson Thorn is Robux-only at 1,149 Robux.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Grow a Garden Crop Mutation & Profit Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="border-b border-green-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/80 border border-green-700/50 text-green-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Interactive Profit Engine
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Crop Mutation & Profit Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Built on the official mutation formula — one growth mutation (Gold ×20 / Rainbow ×50) plus stackable environmental mutations (Wet ×2 … Dawnbound ×150) — across 90+ real documented crops and their verified seed prices.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-green-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sprout className="w-4 h-4 text-green-400" /> 1. Select Farm Crop
            </h2>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full bg-slate-950 border border-green-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            >
              {CROPS_DATA.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.rarity} — {c.seedPrice > 0 ? `${c.seedPrice.toLocaleString()} ${c.currency}` : c.robuxPrice > 0 ? `${c.robuxPrice} Robux` : "pack/quest"})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between flex-wrap gap-1">
              <span>Seed Price: <strong className="text-emerald-400">{crop.seedPrice > 0 ? `${crop.seedPrice.toLocaleString()} ${crop.currency}` : crop.robuxPrice > 0 ? `${crop.robuxPrice} Robux` : "Pack / Quest"}</strong></span>
              <span>Rarity: <strong className="text-green-300">{crop.rarity}</strong></span>
              <span>Harvest: <strong className="text-green-300">{crop.multiHarvest === undefined ? "Varies" : crop.multiHarvest ? "Multi-Harvest" : "Single"}</strong></span>
            </div>
            <p className="text-[11px] text-slate-500">Source: {crop.source}</p>
          </div>

          <div className="bg-slate-900/90 border border-green-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> 2. Growth Mutation (one per fruit)
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {["None", ...GROWTH_MUTATIONS.map((m) => m.name)].map((name) => {
                const m = GROWTH_MUTATIONS.find((x) => x.name === name);
                const isActive = growthMut === name;
                return (
                  <button
                    key={name}
                    onClick={() => setGrowthMut(name)}
                    className={`text-xs px-3 py-2.5 rounded-xl border font-bold transition flex items-center justify-between ${
                      isActive
                        ? "bg-green-950/80 border-green-500 text-green-300 shadow-md shadow-green-500/20"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <span>{name}</span>
                    {m && <span className={m.colorClass}>×{m.multiplier}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-green-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" /> 3. Stackable Environmental Mutations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
              {ENV_MUTATIONS.map((m) => {
                const isActive = activeMuts.includes(m.name);
                return (
                  <button
                    key={m.id}
                    onClick={() => toggleMutation(m.name)}
                    className={`text-xs px-3 py-2.5 rounded-xl border font-bold transition flex items-center justify-between ${
                      isActive
                        ? "bg-green-950/80 border-green-500 text-green-300 shadow-md shadow-green-500/20"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <span>{m.name}</span>
                    <span className={m.colorClass}>×{m.multiplier}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-green-900/60 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-white">4. Harvest Quantity</span>
              <span className="font-mono text-emerald-400 font-bold">{quantity} units</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full accent-green-500 bg-slate-950 cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Visual */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-950/80 to-slate-950 border border-green-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-green-400">
              Total Mutation Multiplier (official formula)
            </h2>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono">
              {totalMult.toLocaleString()}
              <span className="text-sm font-sans font-medium text-slate-400 ml-2">x value</span>
            </div>
            <div className="pt-3 border-t border-green-900/50 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Formula:</span>
                <span className="font-bold text-green-300 text-right">{growthMut === "None" ? "1" : growthMult} {envMults.length > 0 ? `+ ${envMults.join(" + ")} - ${envMults.length} + 1` : "(no environmental)"}</span>
              </div>
              <div className="flex justify-between">
                <span>Harvest Capacity:</span>
                <span className="font-bold text-green-300">{crop.multiHarvest === undefined ? "Varies by crop" : crop.multiHarvest ? "Multi-Harvest" : "Single Harvest"}</span>
              </div>
              <div className="flex justify-between">
                <span>Reference Value (seed price × multiplier × qty):</span>
                <span className="font-bold text-yellow-300 font-mono">{referenceValue.toLocaleString()} {crop.currency}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              The reference value uses the documented seed price as a scale — actual fruit sell value is base fruit value × multiplier × weight, and base fruit value is rolled per fruit in-game.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-green-900/60 bg-green-950/30 p-2">
              <Image
                src="/images/garden-header.webp"
                alt="Grow a Garden Official Icon"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-green-400 text-center mt-1.5 font-medium">Official Game Icon</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-green-900/60 bg-green-950/30 p-2">
              <Image
                src="/images/garden-gameplay.webp"
                alt="Grow a Garden Farming Arena"
                width={768}
                height={432}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-green-400 text-center mt-1.5 font-medium">Farm Arena & Plots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
