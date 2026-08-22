import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-900/30 bg-[#040b05] mt-20 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-green-400">Core Tools</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/codes" className="hover:text-white">Active Codes</Link>
              <Link href="/crop-tier-list" className="hover:text-white">Crop Tier List</Link>
              <Link href="/mutation-calculator" className="hover:text-white">Mutation Calculator</Link>
              <Link href="/trading-values" className="hover:text-white">Trading Values</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-green-400">Progression</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/ascension-guide" className="hover:text-white">Ascension Rebirth</Link>
              <Link href="/soil-fertilizer" className="hover:text-white">Soil & Fertilizer</Link>
              <Link href="/weather-events" className="hover:text-white">Weather Events</Link>
              <Link href="/gear-guide" className="hover:text-white">Sprinklers & Gear</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-green-400">Defense & Strategy</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/pets-defense" className="hover:text-white">Pets & Plot Defense</Link>
              <Link href="/beginner-guide" className="hover:text-white">Beginner Guide & FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900/30 pt-6 text-center text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Grow a Garden Wiki — Community database and strategy toolset for Roblox Grow a Garden.</p>
        </div>
      </div>
    </footer>
  );
}
