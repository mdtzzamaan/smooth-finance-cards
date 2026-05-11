import { Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { transactions, counterpartyOf, type Transaction } from "@/data/transactions";
import { TxIcon } from "@/components/tx-icon";
import { formatAmount, formatTime, dayKey } from "@/lib/format";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream flex items-start md:items-center justify-center md:py-10">
      <div className="w-full max-w-[420px] min-h-screen md:min-h-[860px] md:rounded-[44px] bg-paper md:shadow-[0_40px_80px_-20px_rgba(15,15,74,0.25)] overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

export function TransactionsList() {
  const grouped = transactions.reduce<Record<string, Transaction[]>>((acc, t) => {
    const k = dayKey(t.date);
    (acc[k] ||= []).push(t);
    return acc;
  }, {});

  const totalOut = transactions.filter((t) => t.amount < 0).reduce((s, t) => s + t.amount, 0);
  const totalIn = transactions.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0);

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="px-6 pt-14 pb-6 bg-midnight text-white relative overflow-hidden">
        <div
          className="absolute -top-20 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--amber)" }}
        />
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
            </Link>
            <div className="label-mono text-white/70">Activity</div>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition">
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>

          <h1 className="font-display text-5xl mb-1">Activity</h1>
          <p className="text-white/60 text-sm font-light mb-8">May 2026 · {transactions.length} transactions</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="label-mono text-white/60 mb-2">Money in</div>
              <div className="font-display text-2xl">
                ${totalIn.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="label-mono text-white/60 mb-2">Money out</div>
              <div className="font-display text-2xl">
                ${Math.abs(totalOut).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 -mt-4 relative z-10 mb-2 animate-fade-up">
        <div className="bg-white rounded-2xl flex items-center gap-3 px-4 py-3 shadow-[0_8px_24px_-12px_rgba(15,15,74,0.15)] border border-line">
          <Search className="w-4 h-4 text-slate" strokeWidth={1.6} />
          <input
            placeholder="Search merchants, amounts, references…"
            className="bg-transparent text-sm flex-1 outline-none placeholder:text-slate/70"
          />
        </div>
      </div>

      {/* List */}
      <div className="px-6 py-6 stagger">
        {Object.entries(grouped).map(([day, items]) => (
          <div key={day} className="mb-6">
            <div className="label-mono mb-3 flex items-center gap-3">
              <span>{day}</span>
              <span className="flex-1 h-px bg-line" />
            </div>
            <div className="bg-white rounded-2xl border border-line overflow-hidden">
              {items.map((t, i) => (
                <TxRow tx={t} key={t.id} divider={i < items.length - 1} />
              ))}
            </div>
          </div>
        ))}
        <div className="text-center py-6 label-mono opacity-60">End of activity</div>
      </div>
    </PhoneFrame>
  );
}

function TxRow({ tx, divider }: { tx: Transaction; divider: boolean }) {
  const a = formatAmount(tx.amount, tx.currency);
  const positive = tx.amount > 0;
  return (
    <Link
      to="/transactions/$id"
      params={{ id: tx.id }}
      className={`flex items-center gap-4 px-4 py-4 hover:bg-cream/60 transition group ${divider ? "border-b border-line" : ""}`}
    >
      <div
        className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-line"
        style={{ background: counterpartyOf(tx).color || "var(--midnight)" }}
      >
        {counterpartyOf(tx).imageUrl ? (
          <img
            src={counterpartyOf(tx).imageUrl}
            alt={counterpartyOf(tx).name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <TxIcon type={tx.type} className="w-[18px] h-[18px]" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <div className="font-medium text-[15px] truncate">{tx.title}</div>
        </div>
        <div className="text-xs text-slate truncate font-light">
          {formatTime(tx.date)} · {tx.subtitle.replace(/\s*··\s*\d+/g, "").replace(/\s+·\s*$/, "")}
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className={`font-mono text-[15px] ${positive ? "text-success" : tx.status === "declined" || tx.status === "expired" ? "text-slate line-through" : "text-ink"}`}>
          {a.sign}${a.value}
        </div>
        {tx.status !== "completed" && (
          <div
            className="label-mono mt-1"
            style={{
              color:
                tx.status === "pending"
                  ? "var(--warning)"
                  : tx.status === "declined" || tx.status === "failed"
                  ? "var(--error)"
                  : tx.status === "released"
                  ? "var(--success)"
                  : "var(--slate)",
            }}
          >
            {tx.status}
          </div>
        )}
      </div>
    </Link>
  );
}

export { PhoneFrame };
