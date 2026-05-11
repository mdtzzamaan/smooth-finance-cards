import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Share2, MoreHorizontal, ChevronRight, Download, Flag, Repeat2 } from "lucide-react";
import {
  getTransaction,
  txTypeLabel,
  counterpartyOf,
  type Transaction,
  type Party,
} from "@/data/transactions";
import { TxIcon } from "@/components/tx-icon";
import { formatAmount, formatDate, formatTime } from "@/lib/format";
import { PhoneFrame } from "@/components/transactions-list";

const statusColor: Record<string, string> = {
  completed: "var(--success)",
  pending: "var(--warning)",
  failed: "var(--error)",
  declined: "var(--error)",
  expired: "var(--slate)",
  released: "var(--success)",
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
  const cp = counterpartyOf(tx);

  const heroLabel =
    tx.status === "declined"
      ? "Declined"
      : tx.status === "expired"
      ? "Expired hold"
      : tx.status === "released"
      ? "Hold released"
      : tx.status === "pending"
      ? positive
        ? "Incoming"
        : "Sending"
      : positive
      ? "Received"
      : "Sent";

  const heroColor =
    tx.status === "declined" || tx.status === "expired"
      ? "text-slate line-through decoration-slate/40"
      : positive
      ? "text-success"
      : "text-ink";

  return (
    <PhoneFrame>
      {/* Top bar */}
      <div className="px-6 pt-14 pb-2 bg-paper sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <Link to="/transactions" className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center hover:bg-cream transition">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
          </Link>
          <div className="label-mono">{tx.badge || txTypeLabel[tx.type]}</div>
          <button className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center hover:bg-cream transition">
            <MoreHorizontal className="w-4 h-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Hero amount */}
      <div className="px-6 pt-6 pb-2 text-center animate-fade-up">
        <div className="label-mono mb-3">{heroLabel}</div>
        <h1 className={`font-display text-[56px] leading-none ${heroColor}`}>
          {a.sign}${a.value}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: statusColor[tx.status] }} />
          <span className="label-mono" style={{ color: statusColor[tx.status] }}>{tx.status}</span>
          <span className="text-slate text-xs font-light">
            · {formatDate(tx.date)} at {formatTime(tx.date)}
          </span>
        </div>
        {tx.bdtAmount && (
          <div className="text-xs text-slate font-light mt-1.5">
            ≈ ৳{tx.bdtAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BDT
            {tx.fxRate && <> · {tx.fxRate}</>}
          </div>
        )}
      </div>

      {/* Sender → Receiver with curved money flow */}
      <TransferArc
        from={tx.from}
        to={tx.to}
        amount={`$${a.value}`}
        animated={tx.status !== "declined" && tx.status !== "expired"}
      />

      {/* Reason for declined / expired */}
      {tx.reason && (
        <div className="px-6 mb-4 animate-fade-up">
          <div className="bg-error/5 border border-error/20 rounded-2xl p-4">
            <div className="label-mono mb-1.5" style={{ color: "var(--error)" }}>
              {tx.status === "expired" ? "Why expired" : "Why declined"}
            </div>
            <p className="text-sm text-ink leading-relaxed">{tx.reason}</p>
          </div>
        </div>
      )}

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
              style={{ background: counterpartyOf(linkedTx).color || "var(--midnight)" }}
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

      {/* Modern details — stacked tiles */}
      <div className="px-6 animate-fade-up">
        <div className="label-mono mb-3">Details</div>
        <div className="grid grid-cols-2 gap-2.5">
          <Tile label="Reference" value={tx.reference} mono span />
          {tx.method && <Tile label="Method" value={tx.method} />}
          {tx.category && <Tile label="Category" value={tx.category} />}
          {tx.card && <Tile label="Card" value={`${tx.card.network || "Card"} ${tx.card.mask}`} mono />}
          {tx.merchant?.location && <Tile label="Merchant" value={`${tx.merchant.name} · ${tx.merchant.location}`} span />}
          {tx.merchant?.mcc && <Tile label="MCC" value={tx.merchant.mcc} />}
          {tx.accountNo && <Tile label="From account" value={tx.accountNo} mono />}
          {tx.channel && <Tile label="Channel" value={tx.channel} />}
          {tx.balanceAfter !== undefined && (
            <Tile
              label="Balance after"
              value={`$${tx.balanceAfter.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              mono
            />
          )}
        </div>
        {tx.memo && (
          <div className="mt-3 bg-amber-soft/60 border border-amber/30 rounded-2xl p-4">
            <div className="label-mono mb-1.5" style={{ color: "var(--midnight)" }}>Note</div>
            <p className="text-sm text-ink leading-relaxed">{tx.memo}</p>
          </div>
        )}
      </div>

      {/* International transfer summary */}
      {tx.type === "international_transfer_out" && tx.bdtAmount && (
        <div className="px-6 mt-4 animate-fade-up">
          <div className="bg-midnight text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-10 w-40 h-40 rounded-full opacity-25 blur-2xl" style={{ background: "var(--amber)" }} />
            <div className="relative">
              <div className="label-mono text-white/60 mb-3">Remittance summary</div>
              <Row k="You sent" v={`$${a.value} USD`} />
              {tx.fxRate && <Row k="Rate" v={tx.fxRate} />}
              <div className="h-px bg-white/10 my-3" />
              <Row k="Recipient gets" v={`৳${tx.bdtAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BDT`} bold />
            </div>
          </div>
        </div>
      )}

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

function TransferArc({
  from,
  to,
  amount,
  animated,
}: {
  from: Party;
  to: Party;
  amount: string;
  animated: boolean;
}) {
  const pathD = "M 0 50 Q 160 -30 320 50";
  return (
    <div className="px-6 my-6 animate-fade-up">
      <div className="bg-white border border-line rounded-3xl px-5 pt-6 pb-5 relative">
        <div className="relative mx-8">
          <svg
            viewBox="0 0 320 100"
            className="block w-full h-auto overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="arcGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="var(--midnight)" stopOpacity="0.18" />
                <stop offset="50%" stopColor="var(--amber)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--midnight)" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <path
              d={pathD}
              fill="none"
              stroke={animated ? "url(#arcGrad)" : "var(--slate)"}
              strokeOpacity={animated ? 1 : 0.35}
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            {animated && (
              <g>
                <rect x="-30" y="-13" width="60" height="22" rx="11" fill="var(--midnight)" />
                <text
                  y="2"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                >
                  {amount}
                </text>
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path={pathD}
                  rotate="0"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.45 0 0.55 1"
                />
              </g>
            )}
          </svg>

          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
            <PartyChip party={from} />
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
            <PartyChip party={to} />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="min-w-0 max-w-[42%]">
            <div className="text-[13px] font-medium truncate">{from.name}</div>
            <div className="text-[11px] text-slate truncate font-light">{from.detail || ""}</div>
          </div>
          <div className="label-mono opacity-60 px-2">to</div>
          <div className="min-w-0 max-w-[42%] text-right">
            <div className="text-[13px] font-medium truncate">{to.name}</div>
            <div className="text-[11px] text-slate truncate font-light">{to.detail || ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyChip({ party }: { party: Party }) {
  const ring = party.color || "var(--midnight)";
  return (
    <div className="relative shrink-0 animate-scale-in">
      <div
        className="w-16 h-16 rounded-full p-[2px]"
        style={{ background: `conic-gradient(from 180deg, ${ring}, transparent 65%, ${ring})` }}
      >
        {party.imageUrl ? (
          <img
            src={party.imageUrl}
            alt={party.name}
            className="w-full h-full rounded-full object-cover bg-cream"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-cream flex items-center justify-center text-xs font-medium text-midnight">
            {party.name?.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}

function Tile({
  label,
  value,
  mono,
  span,
}: {
  label: string;
  value: string;
  mono?: boolean;
  span?: boolean;
}) {
  return (
    <div className={`bg-white border border-line rounded-2xl px-3.5 py-3 ${span ? "col-span-2" : ""}`}>
      <div className="label-mono mb-1.5">{label}</div>
      <div className={`text-[13.5px] text-ink leading-snug break-words ${mono ? "font-mono" : ""}`}>{value}</div>
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

export type { Transaction };
