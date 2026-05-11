export type TxType =
  | "internal_transfer_in"
  | "internal_transfer_out"
  | "international_transfer_out"
  | "bank_withdraw"
  | "bank_deposit"
  | "wallet_withdraw"
  | "wallet_topup"
  | "card_payment"
  | "card_refund"
  | "card_atm"
  | "ach_in"
  | "ach_out"
  | "wire_in"
  | "wire_out"
  | "fee"
  | "fee_reversal"
  | "interest"
  | "fx_exchange"
  | "subscription";

export type TxStatus =
  | "completed"
  | "pending"
  | "failed"
  | "scheduled"
  | "declined"
  | "expired"
  | "released";

export interface Party {
  name: string;
  detail?: string;
  imageUrl?: string;
  color?: string;
  kind?: "personal" | "business" | "priyo_internal" | "external";
  isSelf?: boolean;
}

export interface Card {
  mask: string; // e.g. "···· 1180"
  network?: string; // Visa / Mastercard
}

export interface Merchant {
  name: string;
  location?: string;
  mcc?: string;
}

export interface Transaction {
  id: string;
  type: TxType;
  status: TxStatus;
  badge?: string; // e.g. "Internal", "International", "Fee", "Subscription"
  title: string;
  subtitle: string;
  amount: number; // signed: negative outgoing, positive incoming
  currency: string;
  date: string; // ISO
  from: Party;
  to: Party;
  reference: string;
  method?: string;
  category?: string;
  channel?: string;
  balanceAfter?: number;
  accountNo?: string;
  memo?: string;
  reason?: string;
  card?: Card;
  merchant?: Merchant;
  fxRate?: string;
  bdtAmount?: number;
  feeRelatedTo?: string;
}

// Use dicebear initials for portrait-like consistent avatars.
const av = (seed: string, bg: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    seed
  )}&backgroundColor=${bg}&textColor=ffffff&fontWeight=600&radius=50`;

// "You" — the signed-in business owner of "Mollar Hotel" main USD account.
const me: Party = {
  name: "Mollar Hotel",
  detail: "USD ···· 8783",
  imageUrl: av("Mollar Hotel", "0F0F4A"),
  color: "#0F0F4A",
  kind: "business",
  isSelf: true,
};

const txs: Transaction[] = [
  // 1 — Internal P2P credit
  {
    id: "1827057",
    type: "internal_transfer_in",
    status: "completed",
    badge: "Internal",
    title: "Received from My Account 1",
    subtitle: "Priyo P2P transfer",
    amount: 795.75,
    currency: "USD",
    date: "2026-05-07T06:18:18Z",
    from: { name: "My Account 1", detail: "Sakibul Islam · ···· 0419", imageUrl: av("Sakibul Islam", "2D7A4F"), color: "#2D7A4F", kind: "personal" },
    to: me,
    reference: "PYO-INT-1827057",
    method: "Priyo internal · Instant",
    accountNo: "···· 8783",
    channel: "Mobile · iOS 18.4",
    balanceAfter: 1860.04,
    memo: "Last month lunch bill",
  },
  // 2 — Outgoing wire posted
  {
    id: "1826990",
    type: "wire_out",
    status: "completed",
    badge: "Wire",
    title: "Outgoing wire transfer",
    subtitle: "Domestic · JPMorgan Chase",
    amount: -250.0,
    currency: "USD",
    date: "2026-05-06T15:02:00Z",
    from: me,
    to: { name: "Acme Holdings LLC", detail: "Chase ···· 7782", imageUrl: av("Acme Holdings", "111B4A"), color: "#111B4A", kind: "external" },
    reference: "PYO-WIRE-OUT-3318",
    method: "Domestic wire",
    channel: "Web · Desktop",
    balanceAfter: 2110.04,
    accountNo: "···· 8783",
  },
  // 3 — Wire fee linked to #2
  {
    id: "1826991",
    type: "fee",
    status: "completed",
    badge: "Fee",
    title: "Wire transfer fee",
    subtitle: "For $250.00 outgoing wire",
    amount: -25.0,
    currency: "USD",
    date: "2026-05-06T15:02:08Z",
    from: me,
    to: { name: "Priyo Pay", detail: "Service fee", imageUrl: av("Priyo Pay", "0F0F4A"), color: "#0F0F4A", kind: "priyo_internal" },
    reference: "PYO-FEE-3318",
    feeRelatedTo: "1826990",
    channel: "System",
    balanceAfter: 2085.04,
  },
  // 4 — Card ATM withdrawal posted
  {
    id: "1826120",
    type: "card_atm",
    status: "completed",
    badge: "Card",
    title: "ATM withdrawal",
    subtitle: "Marqeta Storefront · St. Petersburg, CA",
    amount: -75.0,
    currency: "USD",
    date: "2026-05-05T19:42:11Z",
    from: me,
    to: { name: "Marqeta Storefront", detail: "St. Petersburg, CA, USA", imageUrl: av("Marqeta", "E2136E"), color: "#E2136E", kind: "external" },
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "Marqeta Storefront", location: "St. Petersburg, CA, USA", mcc: "6011 — ATM" },
    reference: "PYO-CRD-99012",
    method: "Visa Debit ···· 1180",
    category: "Cash",
    channel: "ATM · NFC",
    balanceAfter: 2160.04,
  },
  // 5 — International USD → BDT (posted)
  {
    id: "1817235",
    type: "international_transfer_out",
    status: "completed",
    badge: "International",
    title: "International transfer · USD → BDT",
    subtitle: "To account ···· 6840 · Bangladesh",
    amount: -10.0,
    currency: "USD",
    date: "2026-04-23T18:17:13Z",
    from: me,
    to: { name: "Sakibul Islam", detail: "Modhumoti Bank · ···· 6840", imageUrl: av("Sakibul Islam", "117ACA"), color: "#117ACA", kind: "personal" },
    reference: "PYO-INTL-1817235",
    method: "USD → BDT remittance",
    channel: "Mobile · Android 15",
    balanceAfter: 872.26,
    bdtAmount: 1098.5,
    fxRate: "1 USD = 109.85 BDT",
  },
  // 6 — Fee for #5
  {
    id: "1817236",
    type: "fee",
    status: "completed",
    badge: "Fee",
    title: "International transfer fee",
    subtitle: "For $10.00 USD → BDT transfer",
    amount: -0.99,
    currency: "USD",
    date: "2026-04-23T18:17:20Z",
    from: me,
    to: { name: "Priyo Pay", detail: "Service fee", imageUrl: av("Priyo Pay", "0F0F4A"), color: "#0F0F4A", kind: "priyo_internal" },
    reference: "PYO-FEE-1817236",
    feeRelatedTo: "1817235",
    channel: "System",
    balanceAfter: 871.27,
  },
  // 7 — Fee reversal
  {
    id: "1817233",
    type: "fee_reversal",
    status: "completed",
    badge: "Fee",
    title: "Fee reversal",
    subtitle: "Refund of international transfer fee",
    amount: 0.99,
    currency: "USD",
    date: "2026-04-23T18:15:26Z",
    from: { name: "Priyo Pay", detail: "Service fee reversal", imageUrl: av("Priyo Pay", "0F0F4A"), color: "#0F0F4A", kind: "priyo_internal" },
    to: me,
    reference: "PYO-FEE-REV-1817233",
    channel: "System",
    balanceAfter: 883.25,
  },
  // 8 — ACH credit
  {
    id: "1815400",
    type: "ach_in",
    status: "completed",
    badge: "ACH",
    title: "ACH payment received",
    subtitle: "Stripe Inc. · ACH origination",
    amount: 72.5,
    currency: "USD",
    date: "2026-04-21T07:11:50Z",
    from: { name: "Stripe Inc.", detail: "ACH ···· 4102", imageUrl: av("Stripe", "635BFF"), color: "#635BFF", kind: "external" },
    to: me,
    reference: "PYO-ACH-IN-55021",
    method: "ACH credit · Same-day",
    channel: "ACH network",
    balanceAfter: 883.50,
  },
  // 9 — ACH receive fee
  {
    id: "1815401",
    type: "fee",
    status: "completed",
    badge: "Fee",
    title: "ACH receive fee",
    subtitle: "For $72.50 incoming ACH",
    amount: -0.25,
    currency: "USD",
    date: "2026-04-21T07:11:58Z",
    from: me,
    to: { name: "Priyo Pay", detail: "Service fee", imageUrl: av("Priyo Pay", "0F0F4A"), color: "#0F0F4A", kind: "priyo_internal" },
    reference: "PYO-FEE-1815401",
    feeRelatedTo: "1815400",
    channel: "System",
    balanceAfter: 883.25,
  },
  // 10 — Subscription
  {
    id: "1820019",
    type: "subscription",
    status: "completed",
    badge: "Subscription",
    title: "Initial subscription",
    subtitle: "Priyo Pay · Business plan",
    amount: -36.0,
    currency: "USD",
    date: "2026-04-15T09:00:00Z",
    from: me,
    to: { name: "Priyo Pay", detail: "Business plan · Annual", imageUrl: av("Priyo Pay", "0F0F4A"), color: "#0F0F4A", kind: "priyo_internal" },
    reference: "PYO-SUB-1820019",
    method: "Auto-debit",
    category: "Subscription",
    channel: "System",
    balanceAfter: 947.50,
  },
  // 11 — Pending outgoing wire
  {
    id: "1827200",
    type: "wire_out",
    status: "pending",
    badge: "Wire",
    title: "Outgoing wire transfer",
    subtitle: "Domestic · awaiting cutoff",
    amount: -625.0,
    currency: "USD",
    date: "2026-05-08T11:30:00Z",
    from: { name: "Nantu-Das-Checking", detail: "Nantu Chandra Das · ···· 2682", imageUrl: av("Nantu Das", "2D7A4F"), color: "#2D7A4F", kind: "personal", isSelf: true },
    to: { name: "External account", detail: "Beneficiary bank pending", imageUrl: av("External", "8A8A99"), color: "#8A8A99", kind: "external" },
    reference: "PYO-WIRE-OUT-1827200",
    method: "Domestic wire",
    channel: "Web · Desktop",
    accountNo: "···· 2682",
  },
  // 12 — Pending card auth
  {
    id: "1827150",
    type: "card_payment",
    status: "pending",
    badge: "Card",
    title: "Purchase — GOOGLE *CHROME TEMP",
    subtitle: "Dublin, Ireland · auth hold",
    amount: -1.0,
    currency: "USD",
    date: "2026-05-08T08:14:00Z",
    from: me,
    to: { name: "GOOGLE *CHROME TEMP", detail: "Dublin 4, IRL", imageUrl: av("Google", "4285F4"), color: "#4285F4", kind: "external" },
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "GOOGLE *CHROME TEMP", location: "Dublin 4, IRL", mcc: "5734 — Software" },
    reference: "PYO-CRD-AUTH-1827150",
    method: "Visa Debit ···· 1180",
    channel: "Online · 3DS",
  },
  // 13 — Released card hold (Google One)
  {
    id: "1826800",
    type: "card_refund",
    status: "released",
    badge: "Card",
    title: "Google One — auth released",
    subtitle: "Mountain View, CA · hold released",
    amount: 0.0,
    currency: "USD",
    date: "2026-05-04T12:00:00Z",
    from: { name: "Google One", detail: "Mountain View, CA, USA", imageUrl: av("Google One", "4285F4"), color: "#4285F4", kind: "external" },
    to: me,
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "Google One", location: "Mountain View, CA, USA", mcc: "4899 — Streaming" },
    reference: "PYO-CRD-REL-1826800",
    method: "Visa Debit ···· 1180",
    channel: "Card network",
  },
  // 14 — Declined card (insufficient funds / risk)
  {
    id: "1826600",
    type: "card_payment",
    status: "declined",
    badge: "Card",
    title: "Purchase — GITHUB, INC.",
    subtitle: "San Francisco, CA · declined",
    amount: -21.0,
    currency: "USD",
    date: "2026-05-03T22:18:00Z",
    from: me,
    to: { name: "GITHUB, INC.", detail: "San Francisco, CA, USA", imageUrl: av("GitHub", "111111"), color: "#111111", kind: "external" },
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "GITHUB, INC.", location: "San Francisco, CA, USA", mcc: "5734 — Software" },
    reference: "PYO-CRD-DEC-1826600",
    method: "Visa Debit ···· 1180",
    channel: "Online · 3DS",
    reason: "Insufficient available balance",
  },
  // 15 — Declined ATM
  {
    id: "1826450",
    type: "card_atm",
    status: "declined",
    badge: "Card",
    title: "ATM withdrawal declined",
    subtitle: "Marqeta Storefront · St. Petersburg, CA",
    amount: -100.0,
    currency: "USD",
    date: "2026-05-02T17:42:00Z",
    from: me,
    to: { name: "Marqeta Storefront", detail: "St. Petersburg, CA, USA", imageUrl: av("Marqeta", "E2136E"), color: "#E2136E", kind: "external" },
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "Marqeta Storefront", location: "St. Petersburg, CA, USA", mcc: "6011 — ATM" },
    reference: "PYO-CRD-DEC-1826450",
    method: "Visa Debit ···· 1180",
    channel: "ATM",
    reason: "Daily ATM limit exceeded",
  },
  // 16 — Expired international transfer
  {
    id: "1826200",
    type: "international_transfer_out",
    status: "expired",
    badge: "International",
    title: "International transfer · USD → BDT",
    subtitle: "To account ···· 3454 · Bangladesh",
    amount: -120.0,
    currency: "USD",
    date: "2026-04-30T10:14:00Z",
    from: me,
    to: { name: "Modhumoti Bank Limited", detail: "Nantu Das · ···· 3454", imageUrl: av("Modhumoti", "117ACA"), color: "#117ACA", kind: "external" },
    reference: "PYO-INTL-1826200",
    method: "USD → BDT remittance",
    channel: "Mobile · iOS 18.4",
    bdtAmount: 13182.0,
    fxRate: "1 USD = 109.85 BDT",
    reason: "Recipient bank did not confirm in time",
  },
  // 17 — Refund / Credit card_credit
  {
    id: "1826050",
    type: "card_refund",
    status: "completed",
    badge: "Card",
    title: "Refund — Nike, Inc.",
    subtitle: "Order #N-882910",
    amount: 64.0,
    currency: "USD",
    date: "2026-04-28T16:42:00Z",
    from: { name: "Nike, Inc.", detail: "Beaverton, OR, USA", imageUrl: av("Nike", "111111"), color: "#111111", kind: "external" },
    to: me,
    card: { mask: "···· 1180", network: "Visa" },
    merchant: { name: "Nike, Inc.", location: "Beaverton, OR, USA", mcc: "5651 — Apparel" },
    reference: "PYO-RFD-77821",
    method: "Visa Debit ···· 1180",
    channel: "Card network",
    balanceAfter: 1027.50,
  },
];

export const transactions: Transaction[] = txs;
export const getTransaction = (id: string) => txs.find((t) => t.id === id);

export const txTypeLabel: Record<TxType, string> = {
  internal_transfer_in: "Transfer in",
  internal_transfer_out: "Transfer out",
  international_transfer_out: "International transfer",
  bank_withdraw: "Bank withdraw",
  bank_deposit: "Bank deposit",
  wallet_withdraw: "Wallet withdraw",
  wallet_topup: "Wallet top-up",
  card_payment: "Card payment",
  card_refund: "Card refund",
  card_atm: "ATM withdrawal",
  ach_in: "ACH credit",
  ach_out: "ACH debit",
  wire_in: "Wire in",
  wire_out: "Wire out",
  fee: "Fee",
  fee_reversal: "Fee reversal",
  interest: "Interest",
  fx_exchange: "FX exchange",
  subscription: "Subscription",
};

export const statusLabel: Record<TxStatus, string> = {
  completed: "completed",
  pending: "pending",
  failed: "failed",
  scheduled: "scheduled",
  declined: "declined",
  expired: "expired",
  released: "released",
};

// The non-self party in a transaction. Falls back to "to" then "from".
export function counterpartyOf(tx: Transaction): Party {
  if (tx.from?.isSelf && tx.to) return tx.to;
  if (tx.to?.isSelf && tx.from) return tx.from;
  return tx.to || tx.from;
}
