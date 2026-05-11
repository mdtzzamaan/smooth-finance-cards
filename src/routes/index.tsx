import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { transactions } from "@/data/transactions";
import { TxIcon } from "@/components/tx-icon";
import { formatAmount } from "@/lib/format";
import { PhoneFrame } from "@/components/transactions-list";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const recent = transactions.slice(0, 4);
  return (
    <PhoneFrame>
      <div className="px-6 pt-14 pb-8 bg-midnight text-white relative overflow-hidden">
        <div className="absolute -top-16 -right-12 w-56 h-56 rounded-full opacity-30 blur-3xl" style={{ background: "var(--amber)" }} />
        <div className="relative">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber text-midnight font-display italic flex items-center justify-center">P</div>
              <div className="label-mono text-white/70">Priyo</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10" />
          </div>
          <div className="label-mono text-white/60 mb-3">Available balance</div>
          <h1 className="font-display text-5xl mb-1">$24,820.<span className="text-3xl text-white/70">50</span></h1>
          <div className="text-white/60 text-sm font-light">USD · Priyo Checking •• 4421</div>
        </div>
      </div>

      <div className="px-6 pt-6 pb-2 flex items-center justify-between">
        <div className="font-display text-2xl">Recent activity</div>
        <Link to="/transactions" className="label-mono flex items-center gap-1 hover:text-midnight transition">
          See all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="px-6 pb-10">
        <div className="bg-white rounded-2xl border border-line overflow-hidden stagger">
          {recent.map((t, i) => {
            const a = formatAmount(t.amount);
            return (
              <Link
                key={t.id}
                to="/transactions/$id"
                params={{ id: t.id }}
                className={`flex items-center gap-4 px-4 py-4 hover:bg-cream/60 transition ${i < recent.length - 1 ? "border-b border-line" : ""}`}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ background: t.counterparty.color || "var(--midnight)" }}
                >
                  <TxIcon type={t.type} className="w-[18px] h-[18px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-[15px] truncate">{t.title}</div>
                  <div className="text-xs text-slate truncate font-light">{t.subtitle}</div>
                </div>
                <div className={`font-mono text-[15px] ${t.amount > 0 ? "text-success" : "text-ink"}`}>
                  {a.sign}${a.value}
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/transactions"
          className="mt-6 block bg-midnight text-white rounded-2xl py-4 text-center text-sm font-medium hover:bg-midnight-deep transition"
        >
          View all transactions
        </Link>
      </div>
    </PhoneFrame>
  );
}
