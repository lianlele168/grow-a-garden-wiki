"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { CROPS_DATA, MUTATIONS_DATA } from "@/data/wikiData";
import { Calculator, Sparkles, Sprout } from "lucide-react";

export default function CalculatorPage() {
  const [selectedCrop, setSelectedCrop] = useState(CROPS_DATA[0].name);
  const [activeMuts, setActiveMuts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const crop = CROPS_DATA.find((c) => c.name === selectedCrop) || CROPS_DATA[0];
  const totalMult = activeMuts.reduce((acc, mutName) => {
    const found = MUTATIONS_DATA.find((m) => m.name === mutName);
    return acc * (found ? found.multiplier : 1);
  }, 1);

  const toggleMutation = (name: string) => {
    setActiveMuts((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
  };

  const totalValue = Math.round(crop.basePrice * totalMult * quantity);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do stacked mutations work in Grow a Garden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mutations multiply multiplicatively rather than additively. For example, a Golden crop (20x) combined with Rainbow (4x) results in an 80x total sell price multiplier on base Sheckles.",
        },
      },
      {
        "@type": "Question",
        name: "What is the highest value crop in Grow a Garden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dragon's Breath is the highest baseline crop at 850 Sheckles per fruit, featuring 5 multi-harvest stages per seed.",
        },
      },
      {
        "@type": "Question",
        name: "How can I trigger the Golden mutation reliably?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Golden mutations have a 1/500 baseline natural spawn chance, but applying Alchemist Golden Dust or planting in Mystic Prismatic Soil increases the probability by up to 10%.",
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
          Simulate stacked mutation multipliers (Golden, Rainbow, Disco) across all 16 farm crops to determine exact harvest sell values before trading.
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
                  {c.name} ({c.basePrice} coins - Tier {c.tier})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Base Value: <strong className="text-emerald-400">{crop.basePrice} coins</strong></span>
              <span>Growth Cycle: <strong className="text-green-300">{crop.growthTime}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-green-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> 2. Stacked Active Mutations
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {MUTATIONS_DATA.map((m) => {
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
              <span className="font-bold text-white">3. Harvest Quantity</span>
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
              Estimated Total Sheckles Return
            </h2>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono">
              {totalValue.toLocaleString()}
              <span className="text-sm font-sans font-medium text-slate-400 ml-2">Sheckles</span>
            </div>
            <div className="pt-3 border-t border-green-900/50 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Total Multiplier Stack:</span>
                <span className="font-bold text-yellow-300 font-mono">{totalMult}x</span>
              </div>
              <div className="flex justify-between">
                <span>Multi-Harvest Capacity:</span>
                <span className="font-bold text-green-300">{crop.multiHarvest ? `${crop.harvestCount} Yields` : "Single Harvest"}</span>
              </div>
            </div>
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
