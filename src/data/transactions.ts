export type TxType =
  | "internal_transfer_in"
  | "internal_transfer_out"
  | "bank_withdraw"
  | "bank_deposit"
  | "wallet_withdraw"
  | "wallet_topup"
  | "card_payment"
  | "card_refund"
  | "ach_in"
  | "ach_out"
  | "wire_in"
  | "wire_out"
  | "fee"
  | "interest"
  | "fx_exchange";

export type TxStatus = "completed" | "pending" | "failed" | "scheduled";

export interface Transaction {
  id: string;
  type: TxType;
  status: TxStatus;
  title: string;
  subtitle: string;
  amount: number; // negative outgoing, positive incoming
  currency: string;
  date: string; // ISO
  counterparty: {
    name: string;
    detail?: string; // e.g. masked account
    logo?: string; // emoji or url
    color?: string;
  };
  reference: string;
  method?: string;
  category?: string;
  note?: string;
  feeRelatedTo?: string; // id of original tx for fee
  meta?: Record<string, string>;
}

const txs: Transaction[] = [
  {
    id: "TX-90381",
    type: "card_payment",
    status: "completed",
    title: "Apple",
    subtitle: "Card payment · Visa •• 4421",
    amount: -129.0,
    currency: "USD",
    date: "2026-05-11T09:42:00Z",
    counterparty: { name: "Apple Inc.", detail: "Cupertino, CA", logo: "", color: "#000000" },
    reference: "PYO-7F3K9-AAPL",
    method: "Visa Debit •• 4421",
    category: "Electronics",
    meta: { Merchant: "APPLE.COM/BILL", "Auth code": "A93KQ2", MCC: "5732 — Electronics" },
  },
  {
    id: "TX-90377",
    type: "fee",
    status: "completed",
    title: "Foreign exchange fee",
    subtitle: "1.2% on $129.00",
    amount: -1.55,
    currency: "USD",
    date: "2026-05-11T09:42:05Z",
    counterparty: { name: "Priyo", detail: "Service fee", logo: "P", color: "#191970" },
    reference: "PYO-FEE-7F3K9",
    feeRelatedTo: "TX-90381",
    meta: { "Fee type": "FX conversion", Rate: "1.2%" },
  },
  {
    id: "TX-90375",
    type: "internal_transfer_in",
    status: "completed",
    title: "From Sarah Chen",
    subtitle: "Internal transfer",
    amount: 240.0,
    currency: "USD",
    date: "2026-05-10T18:12:00Z",
    counterparty: { name: "Sarah Chen", detail: "@sarahc", logo: "S", color: "#2D7A4F" },
    reference: "PYO-INT-22910",
    method: "Priyo to Priyo",
    note: "Dinner split 🍜",
  },
  {
    id: "TX-90370",
    type: "ach_in",
    status: "completed",
    title: "Stripe Payouts",
    subtitle: "ACH credit",
    amount: 4820.5,
    currency: "USD",
    date: "2026-05-10T08:00:00Z",
    counterparty: { name: "Stripe Inc.", detail: "ACH origination", logo: "S", color: "#635BFF" },
    reference: "PYO-ACH-IN-55021",
    method: "ACH · Bank of America",
    meta: { "Trace #": "021000021554102", "Effective date": "May 10, 2026", "Originator ID": "1800948598" },
  },
  {
    id: "TX-90362",
    type: "wire_out",
    status: "completed",
    title: "Wire to Acme Holdings",
    subtitle: "Outgoing wire",
    amount: -12500.0,
    currency: "USD",
    date: "2026-05-09T15:30:00Z",
    counterparty: { name: "Acme Holdings LLC", detail: "JPMorgan Chase •• 7782", logo: "A", color: "#0F0F4A" },
    reference: "PYO-WIRE-OUT-3318",
    method: "Domestic wire",
    meta: { "Beneficiary bank": "JPMorgan Chase", "Routing": "021000021", "Account": "•••• 7782", "IMAD": "20260509B1QGC07C001234" },
  },
  {
    id: "TX-90360",
    type: "fee",
    status: "completed",
    title: "Wire transfer fee",
    subtitle: "Outgoing domestic wire",
    amount: -25.0,
    currency: "USD",
    date: "2026-05-09T15:30:05Z",
    counterparty: { name: "Priyo", detail: "Service fee", logo: "P", color: "#191970" },
    reference: "PYO-FEE-3318",
    feeRelatedTo: "TX-90362",
    meta: { "Fee type": "Domestic wire", Schedule: "Standard" },
  },
  {
    id: "TX-90355",
    type: "wallet_withdraw",
    status: "pending",
    title: "Withdraw to bKash",
    subtitle: "Mobile wallet",
    amount: -85.0,
    currency: "USD",
    date: "2026-05-09T11:05:00Z",
    counterparty: { name: "bKash", detail: "+880 1•• ••• 4421", logo: "b", color: "#E2136E" },
    reference: "PYO-WLT-77291",
    method: "Mobile wallet · bKash",
    meta: { "Recipient": "+880 17XX XXX 4421", "Settlement": "Within 30 min" },
  },
  {
    id: "TX-90341",
    type: "bank_withdraw",
    status: "completed",
    title: "Withdraw to Chase",
    subtitle: "Bank transfer",
    amount: -1500.0,
    currency: "USD",
    date: "2026-05-08T14:20:00Z",
    counterparty: { name: "Chase Bank", detail: "Checking •• 9921", logo: "C", color: "#117ACA" },
    reference: "PYO-BNK-44021",
    method: "ACH · Same-day",
    meta: { "Account": "•••• 9921", "Routing": "021000021", "ETA": "May 8, 2026" },
  },
  {
    id: "TX-90332",
    type: "card_payment",
    status: "completed",
    title: "Whole Foods Market",
    subtitle: "Card payment · Visa •• 4421",
    amount: -78.42,
    currency: "USD",
    date: "2026-05-08T09:14:00Z",
    counterparty: { name: "Whole Foods Market", detail: "New York, NY", logo: "W", color: "#00674B" },
    reference: "PYO-CRD-99012",
    method: "Visa Debit •• 4421",
    category: "Groceries",
    meta: { "Auth code": "B72LP8", MCC: "5411 — Grocery" },
  },
  {
    id: "TX-90325",
    type: "fx_exchange",
    status: "completed",
    title: "USD → EUR",
    subtitle: "Currency exchange",
    amount: -500.0,
    currency: "USD",
    date: "2026-05-07T19:00:00Z",
    counterparty: { name: "Priyo FX", detail: "Mid-market rate", logo: "€", color: "#191970" },
    reference: "PYO-FX-22018",
    method: "Instant exchange",
    meta: { "You sold": "$500.00 USD", "You received": "€461.20 EUR", "Rate": "1 USD = 0.9224 EUR" },
  },
  {
    id: "TX-90310",
    type: "interest",
    status: "completed",
    title: "Savings interest",
    subtitle: "Monthly accrual · April",
    amount: 18.42,
    currency: "USD",
    date: "2026-05-01T00:00:00Z",
    counterparty: { name: "Priyo Savings", detail: "4.25% APY", logo: "%", color: "#2D7A4F" },
    reference: "PYO-INT-MAY",
    method: "Auto-credit",
  },
  {
    id: "TX-90305",
    type: "card_refund",
    status: "completed",
    title: "Refund · Nike",
    subtitle: "Card refund",
    amount: 64.0,
    currency: "USD",
    date: "2026-04-30T16:42:00Z",
    counterparty: { name: "Nike, Inc.", detail: "Order #N-882910", logo: "N", color: "#111111" },
    reference: "PYO-RFD-77821",
    method: "Visa Debit •• 4421",
  },
];

export const transactions: Transaction[] = txs;

export const getTransaction = (id: string) => txs.find((t) => t.id === id);

export const txTypeLabel: Record<TxType, string> = {
  internal_transfer_in: "Transfer in",
  internal_transfer_out: "Transfer out",
  bank_withdraw: "Bank withdraw",
  bank_deposit: "Bank deposit",
  wallet_withdraw: "Wallet withdraw",
  wallet_topup: "Wallet top-up",
  card_payment: "Card payment",
  card_refund: "Card refund",
  ach_in: "ACH credit",
  ach_out: "ACH debit",
  wire_in: "Wire in",
  wire_out: "Wire out",
  fee: "Fee",
  interest: "Interest",
  fx_exchange: "FX exchange",
};
