import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Share2, MoreHorizontal, Download, Flag, Repeat2, ChevronRight } from "lucide-react";
import {
  getTransaction,
  counterpartyOf,
  maskAccount,
  type Transaction,
  type Party,
  type LinkedContext,
} from "@/data/transactions";
import { formatAmount, formatDate, formatTime } from "@/lib/format";
import { PhoneFrame } from "@/components/transactions-list";

const statusColor: Record<string, string> = {
  completed: "var(--success)",
  pending: "var(--warning)",
  declined: "var(--error)",
  expired: "var(--slate)",
  released: "var(--success)",
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
  const isZero = tx.amount === 0;

  const heroLabel =
    tx.status === "declined"
      ? "Declined"
      : tx.status === "expired"
      ? "Expired"
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
          {tx.badge && <div className="label-mono">{tx.badge}</div>}
          <button className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center hover:bg-cream transition">
            <MoreHorizontal className="w-4 h-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Hero amount */}
      <div className="px-6 pt-6 pb-2 text-center animate-fade-up">
        <div className="label-mono mb-3">{heroLabel}</div>
        <h1 className={`font-display text-[56px] leading-none ${heroColor}`}>
          {isZero ? "—" : `${a.sign}$${a.value}`}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: statusColor[tx.status] }} />
          <span className="label-mono" style={{ color: statusColor[tx.status] }}>{tx.status}</span>
          <span className="text-slate text-xs font-light">
            · {formatDate(tx.date)} at {formatTime(tx.date)}
          </span>
        </div>
        {tx.bdtAmount != null && (
          <div className="text-xs text-slate font-light mt-1.5">
            ≈ ৳{tx.bdtAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BDT
            {tx.fxRate && <> · {tx.fxRate}</>}
          </div>
        )}
      </div>

      {/* Sender → Receiver with curved money flow */}
      {(tx.from || tx.to) && (
        <TransferArc
          from={tx.from}
          to={tx.to}
          amount={isZero ? "" : `$${a.value}`}
          animated={tx.status !== "declined" && tx.status !== "expired" && !isZero}
        />
      )}

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

      {/* Linked transaction — only fee → original (not the reverse) */}
      {tx.originalContext && (
        <LinkedCard label="Original transaction" ctx={tx.originalContext} />
      )}

      {/* Modern details — stacked tiles */}
      <div className="px-6 animate-fade-up">
        <div className="label-mono mb-3">Details</div>
        <div className="grid grid-cols-2 gap-2.5">
          <Tile label="Reference" value={`PRIYO-${tx.id}`} mono span />
          {tx.card?.mask && <Tile label="Card" value={tx.card.mask} mono />}
          {maskAccount(tx.accountNo) && (
            <Tile label="From account" value={maskAccount(tx.accountNo)!} mono />
          )}
          {tx.merchant?.location && (
            <Tile label="Location" value={tx.merchant.location} span />
          )}
          {tx.balanceAfter != null && (
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

      {/* Remittance summary */}
      {tx.bdtAmount != null && !isZero && (
        <div className="px-6 mt-4 animate-fade-up">
          <div className="bg-white border border-line rounded-2xl p-5">
            <div className="label-mono mb-3">Remittance summary</div>
            <Row k="You sent" v={`$${a.value} USD`} />
            {tx.fxRate && <Row k="Rate" v={tx.fxRate} />}
            <div className="h-px bg-line my-3" />
            <Row k="Recipient gets" v={`৳${tx.bdtAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BDT`} bold />
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

function LinkedCard({ label, ctx }: { label: string; ctx: LinkedContext }) {
  const Inner = (
    <div className="bg-white rounded-2xl border border-line p-4 flex items-center gap-3 hover:border-midnight/30 hover:bg-midnight-mist/40 transition">
      <div className="flex-1 min-w-0">
        {ctx.title && <div className="text-[14px] font-medium truncate">{ctx.title}</div>}
        {ctx.memo && (
          <div className="text-xs text-slate mt-1 font-light leading-relaxed line-clamp-2">{ctx.memo}</div>
        )}
        {ctx.amount && (
          <div className="font-mono text-sm mt-2">{ctx.amount}</div>
        )}
      </div>
      {ctx.id && <ChevronRight className="w-4 h-4 text-slate shrink-0" strokeWidth={1.6} />}
    </div>
  );
  return (
    <div className="px-6 mb-4 animate-fade-up">
      <div className="label-mono mb-3">{label}</div>
      {ctx.id ? (
        <Link to="/transactions/$id" params={{ id: ctx.id }} className="block">
          {Inner}
        </Link>
      ) : (
        Inner
      )}
    </div>
  );
}

function TransferArc({
  from,
  to,
  amount,
  animated,
}: {
  from?: Party;
  to?: Party;
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
                <stop offset="0%" stopColor="var(--midnight)" stopOpacity="0.25" />
                <stop offset="50%" stopColor="var(--amber)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--midnight)" stopOpacity="0.25" />
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
            {animated && amount && (
              <g>
                <rect x="-30" y="-13" width="60" height="22" rx="11" fill="var(--ink)" />
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

          {from && (
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
              <PartyChip party={from} />
            </div>
          )}
          {to && (
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
              <PartyChip party={to} />
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="min-w-0 max-w-[42%]">
            <div className="text-[13px] font-medium truncate">{from?.name || "—"}</div>
            {from?.detail && (
              <div className="text-[11px] text-slate truncate font-light">{from.detail}</div>
            )}
          </div>
          <div className="label-mono opacity-60 px-2">to</div>
          <div className="min-w-0 max-w-[42%] text-right">
            <div className="text-[13px] font-medium truncate">{to?.name || "—"}</div>
            {to?.detail && (
              <div className="text-[11px] text-slate truncate font-light">{to.detail}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyChip({ party }: { party: Party }) {
  const ring = party.color || "var(--ink)";
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
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const sib = el.nextElementSibling as HTMLElement | null;
              if (sib) sib.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="w-full h-full rounded-full bg-cream items-center justify-center text-xs font-medium text-ink"
          style={{ display: party.imageUrl ? "none" : "flex" }}
        >
          {(party.name || "?").slice(0, 2).toUpperCase()}
        </div>
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
      <div className="text-sm text-slate">{k}</div>
      <div className={`font-mono text-sm ${bold ? "text-ink font-medium" : "text-ink"}`}>{v}</div>
    </div>
  );
}

function ActionTile({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="bg-white border border-line rounded-2xl py-4 flex flex-col items-center gap-2 hover:border-ink/20 hover:-translate-y-0.5 transition">
      <Icon className="w-4 h-4" strokeWidth={1.6} />
      <span className="text-xs">{label}</span>
    </button>
  );
}

export type { Transaction };
