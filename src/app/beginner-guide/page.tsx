export default function BeginnerGuidePage() {
  const steps = [
    { n: "1", title: "Plant Your First Seeds", desc: "Start with free Green Bean seeds (use code TEAMGREENBEAN). Plant in your 3x3 grid and water every few minutes.", icon: "🌱" },
    { n: "2", title: "Harvest and Sell", desc: "Walk up to grown crops and harvest. Sell at the Shop stand near spawn. Reinvest coins into better seeds immediately.", icon: "💰" },
    { n: "3", title: "Upgrade to Multi-Harvest Seeds", desc: "Multi-harvest seeds (Ghost Pepper, Moon Bloom) keep regrowing — no replanting needed. They cost more but save massive time.", icon: "♻️" },
    { n: "4", title: "Understand Mutations", desc: "Mutations are random visual changes that multiply sell value. Wet (2x), Rainbow (4x), Golden (20x) are the best. Use our Mutation Calculator to know exact values.", icon: "🧬" },
    { n: "5", title: "Protect Your Crops", desc: "Other players can steal your crops! Plant Venus Flytraps and Dragon's Breath around your garden — they auto-attack thieves.", icon: "🛡️" },
    { n: "6", title: "Expand Your Plot", desc: "Buy more garden plots from the Shop. Bigger garden = more simultaneous crops = faster income. Prioritize expansion early.", icon: "📐" },
  ];

  const faqs = [
    { q: "What are the best seeds for beginners?", a: "Start with Green Bean (free from code TEAMGREENBEAN). Upgrade to Ghost Pepper or Moon Bloom as soon as you can afford them — both are multi-harvest S-tier seeds." },
    { q: "How do mutations work?", a: "Mutations happen randomly when crops grow. They give visual effects (Wet, Rainbow, etc.) and multiply sell value. Higher-tier seeds have better mutation rates. Use the Mutation Calculator to check exact values." },
    { q: "Can other players steal my crops?", a: "Yes! Plant Venus Flytrap and Dragon's Breath near your garden borders. They attack any non-owner who tries to harvest your crops." },
    { q: "What is the fastest way to make money?", a: "Stack multi-harvest S-tier seeds + defensive plants + actively check for mutations. Using the mutation calculator before selling ensures you never undersell a mutated crop." },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Grow a Garden Beginner Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Everything you need to start earning fast in Grow a Garden — seeds, mutations, and defense basics.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-green-400">🚀 6-Step Quick Start</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map(s => (
            <div key={s.n} className="bg-slate-900 border border-slate-800 hover:border-green-800/50 rounded-xl p-5 flex gap-4 transition">
              <div className="w-10 h-10 bg-green-950 border border-green-700/50 rounded-xl flex items-center justify-center text-green-400 font-black text-lg flex-shrink-0">{s.n}</div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">{s.icon} {s.title}</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">❓ Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="font-semibold text-green-300 text-sm">{faq.q}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
