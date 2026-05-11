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

// Dummy but deterministic image source — assume any name resolves to a real avatar.
const avatarUrl = (seed: string, bg = "191970") =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=${bg}&textColor=ffffff&fontWeight=600&radius=50`;

type Party = { name: string; sub: string; img: string; ring?: string };

function partiesFor(tx: Transaction): { from: Party; to: Party } {
  const me: Party = {
    name: "You",
    sub: "Priyo •• 0042",
    img: avatarUrl("AK", "f5b400"),
    ring: "var(--amber)",
  };
  const cpColor = (tx.counterparty.color || "#191970").replace("#", "");
  const cp: Party = {
    name: tx.counterparty.name,
    sub: tx.counterparty.detail || txTypeLabel[tx.type],
    img: avatarUrl(tx.counterparty.name, cpColor),
    ring: tx.counterparty.color || "var(--midnight)",
  };
  // Incoming if positive amount; outgoing otherwise (fees flow from you to Priyo).
  return tx.amount >= 0 ? { from: cp, to: me } : { from: me, to: cp };
}

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
  const { from, to } = partiesFor(tx);

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

      {/* Hero amount */}
      <div className="px-6 pt-6 pb-2 text-center animate-fade-up">
        <div className="label-mono mb-3">{positive ? "Received" : "Sent"}</div>
        <h1 className={`font-display text-[56px] leading-none ${positive ? "text-success" : "text-ink"}`}>
          {a.sign}${a.value}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: statusColor[tx.status] }} />
          <span className="label-mono" style={{ color: statusColor[tx.status] }}>{tx.status}</span>
          <span className="text-slate text-xs font-light">
            · {formatDate(tx.date)} at {formatTime(tx.date)}
          </span>
        </div>
      </div>

      {/* Sender → Receiver with curved money flow */}
      <TransferArc from={from} to={to} amount={`$${a.value}`} />

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

      {/* Modern details — stacked tiles, not key/value rows */}
      <div className="px-6 animate-fade-up">
        <div className="label-mono mb-3">Details</div>
        <div className="grid grid-cols-2 gap-2.5">
          <Tile label="Reference" value={tx.reference} mono span />
          {tx.method && <Tile label="Method" value={tx.method} />}
          {tx.category && <Tile label="Category" value={tx.category} />}
          {tx.channel && <Tile label="Channel" value={tx.channel} />}
          {tx.balanceAfter !== undefined && (
            <Tile label="Balance after" value={`$${tx.balanceAfter.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} mono />
          )}
          {tx.meta &&
            Object.entries(tx.meta)
              .filter(([k]) =>
                tx.type === "fx_exchange"
                  ? !["You sold", "You received", "Rate"].includes(k)
                  : true
              )
              .map(([k, v]) => (
                <Tile
                  key={k}
                  label={k}
                  value={v}
                  mono={
                    k.toLowerCase().includes("trace") ||
                    k.toLowerCase().includes("imad") ||
                    k.toLowerCase().includes("routing") ||
                    k.toLowerCase().includes("auth") ||
                    k.toLowerCase().includes("rate") ||
                    k.toLowerCase().includes("id")
                  }
                />
              ))}
        </div>
        {tx.note && (
          <div className="mt-3 bg-amber-soft/60 border border-amber/30 rounded-2xl p-4">
            <div className="label-mono mb-1.5" style={{ color: "var(--midnight)" }}>Note</div>
            <p className="text-sm text-ink leading-relaxed">{tx.note}</p>
          </div>
        )}
      </div>

      {/* Amount breakdown — only when there is a meaningful split (fx or fees applied separately) */}
      {tx.type === "fx_exchange" && (
        <div className="px-6 mt-4 animate-fade-up">
          <div className="bg-midnight text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-10 w-40 h-40 rounded-full opacity-25 blur-2xl" style={{ background: "var(--amber)" }} />
            <div className="relative">
              <div className="label-mono text-white/60 mb-3">Exchange summary</div>
              <Row k="You sold" v={tx.meta?.["You sold"] || `$${a.value} ${tx.currency}`} />
              <Row k="Rate" v={tx.meta?.["Rate"] || "—"} />
              <div className="h-px bg-white/10 my-3" />
              <Row k="You received" v={tx.meta?.["You received"] || ""} bold />
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
}: {
  from: Party;
  to: Party;
  amount: string;
}) {
  // Path endpoints sit exactly at avatar centers (x=0 and x=320, y=50).
  const pathD = "M 0 50 Q 160 -30 320 50";
  return (
    <div className="px-6 my-6 animate-fade-up">
      <div className="bg-white border border-line rounded-3xl px-5 pt-6 pb-5 relative">
        {/* Inner area reserves 32px on each side for avatar overflow */}
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
              stroke="url(#arcGrad)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            {/* Travelling coin pill — animates along the same path, center to center */}
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
          </svg>

          {/* Avatars — centered exactly on SVG endpoints (left:0 / right:0, mid-height) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
            <PartyChip party={from} side="left" />
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
            <PartyChip party={to} side="right" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="min-w-0 max-w-[42%]">
            <div className="text-[13px] font-medium truncate">{from.name}</div>
            <div className="text-[11px] text-slate truncate font-light">{from.sub}</div>
          </div>
          <div className="label-mono opacity-60 px-2">to</div>
          <div className="min-w-0 max-w-[42%] text-right">
            <div className="text-[13px] font-medium truncate">{to.name}</div>
            <div className="text-[11px] text-slate truncate font-light">{to.sub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyChip({ party, side }: { party: Party; side: "left" | "right" }) {
  return (
    <div className={`relative shrink-0 ${side === "left" ? "animate-scale-in" : "animate-scale-in"}`}>
      <div
        className="w-16 h-16 rounded-full p-[2px]"
        style={{ background: `conic-gradient(from 180deg, ${party.ring}, transparent 65%, ${party.ring})` }}
      >
        <img
          src={party.img}
          alt={party.name}
          className="w-full h-full rounded-full object-cover bg-cream"
          loading="lazy"
        />
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
