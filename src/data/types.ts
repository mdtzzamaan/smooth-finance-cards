// Types for the cleaned transaction dataset (sourced strictly from the
// real Priyo Pay JSON fixtures — no synthetic fields).

export type TxStatus =
  | "completed"
  | "pending"
  | "declined"
  | "expired"
  | "released";

export interface Party {
  /** Display name = nickname || fallback_name (per backend). */
  name: string;
  /** Secondary line: the formal/legal name when nickname differs. */
  detail?: string;
  imageUrl?: string;
  color?: string;
  kind?: "personal" | "business" | "priyo_internal" | string;
  isSelf?: boolean;
}

export interface Card {
  mask?: string;
  lastFour?: string;
}

export interface Merchant {
  name?: string;
  location?: string;
  logoUrl?: string;
}

export interface LinkedContext {
  id?: string; // resolved at runtime — id of the related transaction
  title?: string;
  memo?: string;
  amount?: string; // pre-formatted from API
}

export interface Transaction {
  id: string;
  rawType: string; // backend-provided raw type label
  status: TxStatus;
  badge?: string;
  title: string;
  subtitle: string;
  amount: number; // signed
  currency: string;
  date: string;

  from?: Party;
  to?: Party;

  memo?: string;
  reason?: string;
  balanceAfter?: number;
  accountNo?: string;
  dstAccountNo?: string;

  bdtAmount?: number;
  fxRate?: string;

  merchant?: Merchant;
  card?: Card;

  feeContext?: LinkedContext;
  originalContext?: LinkedContext;
}
