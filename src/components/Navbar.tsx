"use client";

import { useState } from "react";
import Link from "next/link";
import { Sprout, Gift, Layers, Calculator, ArrowUpRight, CloudSun, Shield, BookOpen, Menu, X, ArrowLeftRight, FlaskConical } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { name: "Codes", href: "/codes", icon: Gift },
    { name: "Crop Tier", href: "/crop-tier-list", icon: Layers },
    { name: "Mutation Calc", href: "/mutation-calculator", icon: Calculator },
    { name: "Trading Values", href: "/trading-values", icon: ArrowLeftRight },
    { name: "Ascension", href: "/ascension-guide", icon: ArrowUpRight },
    { name: "Soil & Fertilizer", href: "/soil-fertilizer", icon: FlaskConical },
    { name: "Weather", href: "/weather-events", icon: CloudSun },
    { name: "Pets & Defense", href: "/pets-defense", icon: Shield },
    { name: "Guide", href: "/beginner-guide", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071209]/90 backdrop-blur-md border-b border-green-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-950/80 group-hover:scale-105 transition-transform border border-green-300/30">
              <span className="text-xl">🌱</span>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-green-300 transition-colors">
                GROW A GARDEN <span className="text-green-400">WIKI</span>
              </span>
              <span className="block text-[10px] text-green-400/80 font-mono -mt-1 uppercase tracking-widest">
                Roblox Farming Guides
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-green-950/60 border border-transparent hover:border-green-800/50 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-green-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-green-950/60"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#071209]/95 border-b border-green-900/40 px-4 pt-2 pb-4 space-y-1">
          <div className="grid grid-cols-2 gap-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-green-950/80 hover:text-white border border-slate-800"
                >
                  <Icon className="w-4 h-4 text-green-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
