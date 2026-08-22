import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growagarden.robloxwikihub.com"),
  title: { default: "Grow a Garden Wiki — Seeds, Codes & Mutation Calculator", template: "%s | Grow a Garden Wiki" },
  description: "Complete Grow a Garden guide — all active codes, seed crop tier list, mutation value calculator, and farming tips.",
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
            <nav className="flex items-center space-x-5 text-sm font-medium text-slate-300">
              <a href="/codes" className="hover:text-green-400 transition-colors">Codes</a>
              <a href="/crop-tier-list" className="hover:text-green-400 transition-colors">🌾 Crop Tier</a>
              <a href="/mutation-calculator" className="hover:text-green-400 transition-colors">🧬 Mutations</a>
              <a href="/beginner-guide" className="hover:text-green-400 transition-colors">📖 Guide</a>
              <a href="https://robloxwikihub.com" className="text-xs text-slate-400 hover:text-slate-200 bg-slate-800 px-3 py-1.5 rounded-full transition-colors">Roblox Wiki Hub</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-green-900/30 mt-16 py-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Grow a Garden Wiki — Fan site, not affiliated with Roblox or the game developer.</p>
        </footer>
      </body>
    </html>
  );
}
