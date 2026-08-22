import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growagarden.robloxwikihub.com"),
  title: { default: "Grow a Garden Wiki — Seeds, Codes & Mutation Calculator", template: "%s | Grow a Garden Wiki" },
  description: "Complete Grow a Garden guide — active codes, crop tier list, mutation value calculator, weather events, gear sprinklers, and defense strategy.",
  openGraph: { type: "website", siteName: "Grow a Garden Wiki" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-green-900/40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-black text-lg text-white flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span>Grow a Garden Wiki</span>
            </a>
            <nav className="flex items-center space-x-4 text-xs md:text-sm font-medium text-slate-300 overflow-x-auto py-1">
              <a href="/codes" className="hover:text-green-400 transition-colors whitespace-nowrap">🎁 Codes</a>
              <a href="/crop-tier-list" className="hover:text-green-400 transition-colors whitespace-nowrap">🌾 Crop Tier</a>
              <a href="/mutation-calculator" className="hover:text-green-400 transition-colors whitespace-nowrap">🧬 Mutation Calc</a>
              <a href="/weather-events" className="hover:text-green-400 transition-colors whitespace-nowrap">🌤️ Weather</a>
              <a href="/gear-guide" className="hover:text-green-400 transition-colors whitespace-nowrap">🚜 Gear & Sprinklers</a>
              <a href="/pets-defense" className="hover:text-green-400 transition-colors whitespace-nowrap">🛡️ Pets & Defense</a>
              <a href="/beginner-guide" className="hover:text-green-400 transition-colors whitespace-nowrap">📖 Guide</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-green-900/30 mt-16 py-8 text-center text-xs text-slate-500 space-y-2">
          <div className="flex justify-center space-x-4 text-slate-400 mb-2">
            <a href="/codes" className="hover:underline">Codes</a>
            <a href="/crop-tier-list" className="hover:underline">Crop Tier</a>
            <a href="/mutation-calculator" className="hover:underline">Mutation Calc</a>
            <a href="/weather-events" className="hover:underline">Weather Events</a>
            <a href="/gear-guide" className="hover:underline">Gear Guide</a>
            <a href="/pets-defense" className="hover:underline">Pets & Defense</a>
            <a href="/beginner-guide" className="hover:underline">Beginner Guide</a>
          </div>
          <p>© {new Date().getFullYear()} Grow a Garden Wiki — Fan site, not affiliated with Roblox or the game developer.</p>
        </footer>
      </body>
    </html>
  );
}
