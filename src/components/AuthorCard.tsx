import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-green-900/60 bg-green-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-green-500/20">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">Hlele</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Editor
              </span>
            </div>
            <p className="text-xs text-green-300">
              Editor • AI-assisted research, human-reviewed
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-green-300">
          <div className="flex items-center gap-1 bg-green-900/50 px-2.5 py-1 rounded-lg border border-green-800/40">
            <Calendar className="w-3.5 h-3.5 text-green-400" />
            <span>Updated: </span>
          </div>
          <div className="flex items-center gap-1 bg-green-900/50 px-2.5 py-1 rounded-lg border border-green-800/40">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified for Patch v2.3 (Orson Ascension)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-green-400/80 mt-3 pt-3 border-t border-green-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> Crop growth times, stacked mutation multiplier mathematics, and mystic soil ROI rates were verified through live farm cycle recordings and verified patch release notes.
      </p>
    </div>
  );
}
