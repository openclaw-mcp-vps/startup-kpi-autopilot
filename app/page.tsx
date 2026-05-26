export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Early-Stage Startups
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-generate startup metrics dashboards{" "}
          <span className="text-[#58a6ff]">from raw data</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe and Google Analytics in minutes. Startup KPI Autopilot calculates ARR, churn, CAC, and 20+ growth metrics — no spreadsheets, no engineers needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Get Instant Access — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["ARR & MRR", "Live revenue tracking"],
            ["Churn Rate", "Spot risk early"],
            ["CAC & LTV", "Know your unit economics"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-base mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track growth</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe & Google Analytics integration",
              "ARR, MRR, churn, CAC, LTV dashboards",
              "Real-time metric updates",
              "Exportable reports (PDF & CSV)",
              "Slack & email alerts",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            [
              "How do I connect my data sources?",
              "After signing up, you'll get a guided setup to connect Stripe and Google Analytics via OAuth. No code required — it takes under 5 minutes."
            ],
            [
              "Is my financial data secure?",
              "Yes. We use read-only API access, encrypt all credentials at rest, and never store raw transaction data. Your data is only used to compute your KPIs."
            ],
            [
              "Can I cancel anytime?",
              "Absolutely. Cancel with one click from your dashboard. You'll keep access until the end of your billing period with no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Startup KPI Autopilot. All rights reserved.
      </footer>
    </main>
  );
}
