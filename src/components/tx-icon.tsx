import {
  ArrowDownLeft,
  ArrowUpRight,
  Banknote,
  CreditCard,
  Receipt,
  Globe,
  Repeat,
  Undo2,
} from "lucide-react";
import type { Transaction } from "@/data/transactions";

// Map a real transaction (rawType + amount sign + title hints) to an icon.
export function TxIcon({ tx, className }: { tx: Transaction; className?: string }) {
  const t = (tx.rawType || "").toLowerCase();
  const positive = tx.amount > 0;
  const title = tx.title.toLowerCase();

  const Icon = (() => {
    if (t.includes("fee")) {
      return title.includes("reversal") ? Undo2 : Receipt;
    }
    if (t === "card") return CreditCard;
    if (t === "ach") return Banknote;
    if (t === "wire") return Repeat;
    if (t.includes("usd to bdt") || t.includes("international")) return Globe;
    if (t === "internal_transfer") return positive ? ArrowDownLeft : ArrowUpRight;
    return positive ? ArrowDownLeft : ArrowUpRight;
  })();

  return <Icon className={className} strokeWidth={1.6} />;
}
