import { RAW_TRANSACTIONS } from "./raw-transactions";
import type { Transaction, Party } from "./types";

export type { Transaction, Party, TxStatus, Card, Merchant, LinkedContext } from "./types";

// Sort newest first
export const transactions: Transaction[] = [...RAW_TRANSACTIONS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

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
