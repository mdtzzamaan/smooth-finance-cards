import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Share2, MoreHorizontal, ChevronRight, Download, Flag, Repeat2 } from "lucide-react";
import { getTransaction, txTypeLabel, type Transaction } from "@/data/transactions";
import { TxIcon } from "@/components/tx-icon";
import { formatAmount, formatDate, formatTime } from "@/lib/format";
import { PhoneFrame } from "@/components/transactions-list";

const statusColor: Record<string, string> = {
  completed: "var(--success)",
  pending: "var(--warning)",
  failed: "var(--error)",
  scheduled: "var(--info)",
};

export function TransactionDetail() {
  const { id } = useParams({ from: "/transactions/$id" });
  const tx = getTransaction(id);

  if (!tx) {
    return (
      <PhoneFrame>
        <div className="p-8">
          <Link to="/transactions" className="label-mono">← Activity</Link>
          <h1 className="font-display text-3xl mt-6">Not found</h1>
          <p className="text-slate text-sm mt-2">This transaction doesn't exist.</p>
        </div>
      </PhoneFrame>
    );
  }

  const a = formatAmount(tx.amount, tx.currency);
  const positive = tx.amount > 0;
  const linkedTx = tx.feeRelatedTo ? getTransaction(tx.feeRelatedTo) : null;

  return (
    <PhoneFrame>
      {/* Top bar */}
      <div className="px-6 pt-14 pb-2 bg-paper sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <Link to="/transactions" className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center hover:bg-cream transition">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
          </Link>
          <div className="label-mono">{txTypeLabel[tx.type]}</div>
          <button className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center hover:bg-cream transition">
            <MoreHorizontal className="w-4 h-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 pt-8 pb-10 text-center animate-fade-up">
        <div
          className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-5 animate-scale-in"
          style={{ background: tx.counterparty.color || "var(--midnight)" }}
        >
          <TxIcon type={tx.type} className="w-6 h-6" />
        </div>
        <div className="label-mono mb-3">{tx.counterparty.name}</div>
        <h1 className={`font-display text-[56px] leading-none ${positive ? "text-success" : "text-ink"}`}>
          {a.sign}${a.value}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: statusColor[tx.status] }}
          />
          <span className="label-mono" style={{ color: statusColor[tx.status] }}>
            {tx.status}
          </span>
          <span className="text-slate text-xs font-light">
            · {formatDate(tx.date)} at {formatTime(tx.date)}
          </span>
        </div>
      </div>

      {/* Linked original transaction (for fees) */}
      {linkedTx && (
        <div className="px-6 mb-4 animate-fade-up">
          <div className="label-mono mb-3">Linked transaction</div>
          <Link
            to="/transactions/$id"
            params={{ id: linkedTx.id }}
            className="bg-white rounded-2xl border border-line p-4 flex items-center gap-3 hover:border-midnight/30 transition group block"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ background: linkedTx.counterparty.color || "var(--midnight)" }}
            >
              <TxIcon type={linkedTx.type} className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium truncate">{linkedTx.title}</div>
              <div className="text-xs text-slate truncate font-light">
                {txTypeLabel[linkedTx.type]} · {formatDate(linkedTx.date)}
              </div>
            </div>
            <div className="text-right shrink-0 mr-1">
              <div className="font-mono text-sm">
                {formatAmount(linkedTx.amount).sign}${formatAmount(linkedTx.amount).value}
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      )}

      {/* Details card */}
      <div className="px-6 animate-fade-up">
        <div className="bg-white rounded-2xl border border-line p-1">
          <Detail label="Reference" value={tx.reference} mono />
          {tx.method && <Detail label="Method" value={tx.method} />}
          {tx.category && <Detail label="Category" value={tx.category} />}
          <Detail label="Counterparty" value={tx.counterparty.name} sub={tx.counterparty.detail} />
          <Detail label="Date" value={`${formatDate(tx.date)}, ${formatTime(tx.date)}`} />
          {tx.meta &&
            Object.entries(tx.meta).map(([k, v]) => (
              <Detail key={k} label={k} value={v} mono={k.toLowerCase().includes("trace") || k.toLowerCase().includes("imad") || k.toLowerCase().includes("routing")} />
            ))}
          {tx.note && <Detail label="Note" value={tx.note} />}
        </div>
      </div>

      {/* Amount breakdown */}
      <div className="px-6 mt-4 animate-fade-up">
        <div className="bg-midnight text-white rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute -bottom-12 -right-10 w-40 h-40 rounded-full opacity-25 blur-2xl" style={{ background: "var(--amber)" }} />
          <div className="relative">
            <div className="label-mono text-white/60 mb-3">Summary</div>
            <Row k="Amount" v={`${formatAmount(tx.amount).sign}$${formatAmount(tx.amount).value} ${tx.currency}`} />
            {tx.type !== "fee" && <Row k="Fees" v={tx.type === "fx_exchange" ? "Included in rate" : "$0.00"} />}
            <div className="h-px bg-white/10 my-3" />
            <Row k="Total" v={`${formatAmount(tx.amount).sign}$${formatAmount(tx.amount).value}`} bold />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 mt-4 mb-10 grid grid-cols-3 gap-3 animate-fade-up">
        <ActionTile icon={Repeat2} label="Repeat" />
        <ActionTile icon={Download} label="Receipt" />
        <ActionTile icon={Flag} label="Report" />
      </div>

      <div className="px-6 pb-10 flex items-center justify-center gap-2 label-mono opacity-60">
        <Share2 className="w-3 h-3" />
        Secured by Priyo
      </div>
    </PhoneFrame>
  );
}

function Detail({
  label,
  value,
  sub,
  mono,
}: {
  label: string;
  value: string;
  sub?: string;
  mono?: boolean;
}) {
  return (
    <div className="px-4 py-3.5 border-b border-line last:border-b-0 flex items-start justify-between gap-4">
      <div className="text-xs text-slate font-medium pt-0.5 shrink-0">{label}</div>
      <div className="text-right min-w-0">
        <div className={`text-sm text-ink ${mono ? "font-mono" : ""} truncate`}>{value}</div>
        {sub && <div className="text-xs text-slate font-light mt-0.5 truncate">{sub}</div>}
      </div>
    </div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className={`text-sm ${bold ? "text-white" : "text-white/70"}`}>{k}</div>
      <div className={`font-mono text-sm ${bold ? "text-amber" : "text-white"}`}>{v}</div>
    </div>
  );
}

function ActionTile({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="bg-white border border-line rounded-2xl py-4 flex flex-col items-center gap-2 hover:border-midnight/30 hover:-translate-y-0.5 transition">
      <Icon className="w-4 h-4" strokeWidth={1.6} />
      <span className="text-xs">{label}</span>
    </button>
  );
}

// re-export type for typing
export type { Transaction };
