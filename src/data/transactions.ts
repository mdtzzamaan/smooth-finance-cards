import { RAW_TRANSACTIONS } from "./raw-transactions";
import type { Transaction, Party, LinkedContext } from "./types";

export type { Transaction, Party, TxStatus, Card, Merchant, LinkedContext } from "./types";

// Sort newest first
const sorted: Transaction[] = [...RAW_TRANSACTIONS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Parse a backend-formatted amount string like "- $10.00" / "+ $5.00" → signed number.
function parseAmount(s?: string): number | undefined {
  if (!s) return undefined;
  const m = s.replace(/[, ]/g, "").match(/(-|\+)?\$?(-?\d+(?:\.\d+)?)/);
  if (!m) return undefined;
  const n = parseFloat(m[2]);
  return m[1] === "-" ? -Math.abs(n) : n;
}

// Find the related transaction id given a LinkedContext. We match on memo
// (most distinctive) and fall back to title + signed amount.
function resolveLinkedId(self: Transaction, ctx: LinkedContext): string | undefined {
  const targetAmount = parseAmount(ctx.amount);
  const candidates = sorted.filter((t) => t.id !== self.id);

  // 1. memo exact match
  if (ctx.memo) {
    const m = candidates.find((t) => t.memo === ctx.memo);
    if (m) return m.id;
  }
  // 2. title + amount
  if (ctx.title && targetAmount != null) {
    const m = candidates.find(
      (t) => t.title === ctx.title && Math.abs(t.amount - targetAmount) < 0.005
    );
    if (m) return m.id;
  }
  // 3. amount only, closest in time
  if (targetAmount != null) {
    const selfTime = new Date(self.date).getTime();
    const m = candidates
      .filter((t) => Math.abs(t.amount - targetAmount) < 0.005)
      .sort(
        (a, b) =>
          Math.abs(new Date(a.date).getTime() - selfTime) -
          Math.abs(new Date(b.date).getTime() - selfTime)
      )[0];
    if (m) return m.id;
  }
  return undefined;
}

// Hydrate originalContext / feeContext with the resolved id.
export const transactions: Transaction[] = sorted.map((t) => {
  const out = { ...t };
  if (out.originalContext) {
    out.originalContext = { ...out.originalContext, id: resolveLinkedId(t, out.originalContext) };
  }
  if (out.feeContext) {
    out.feeContext = { ...out.feeContext, id: resolveLinkedId(t, out.feeContext) };
  }
  return out;
});

export const getTransaction = (id: string) =>
  transactions.find((t) => t.id === id);

// The non-self party in a transaction. Falls back to whichever side exists.
export function counterpartyOf(tx: Transaction): Party {
  if (tx.from?.isSelf && tx.to) return tx.to;
  if (tx.to?.isSelf && tx.from) return tx.from;
  return (tx.to || tx.from || { name: "" }) as Party;
}

// Pretty masked account number (last 4 digits) when value is numeric.
export function maskAccount(no?: string): string | undefined {
  if (!no) return undefined;
  const digits = no.replace(/\D+/g, "");
  if (digits.length >= 4) return `···· ${digits.slice(-4)}`;
  return no;
}
