import {
  ArrowDownLeft,
  ArrowUpRight,
  Banknote,
  CreditCard,
  Smartphone,
  Building2,
  Receipt,
  Percent,
  RefreshCw,
  Repeat,
  Undo2,
} from "lucide-react";
import type { TxType } from "@/data/transactions";

export function TxIcon({ type, className }: { type: TxType; className?: string }) {
  const Icon = (() => {
    switch (type) {
      case "internal_transfer_in":
        return ArrowDownLeft;
      case "internal_transfer_out":
        return ArrowUpRight;
      case "bank_withdraw":
      case "bank_deposit":
        return Building2;
      case "wallet_withdraw":
      case "wallet_topup":
        return Smartphone;
      case "card_payment":
        return CreditCard;
      case "card_refund":
        return Undo2;
      case "ach_in":
      case "ach_out":
        return Banknote;
      case "wire_in":
      case "wire_out":
        return Repeat;
      case "fee":
        return Receipt;
      case "interest":
        return Percent;
      case "fx_exchange":
        return RefreshCw;
      default:
        return Receipt;
    }
  })();
  return <Icon className={className} strokeWidth={1.6} />;
}
