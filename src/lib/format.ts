export function formatAmount(amount: number, currency = "USD") {
  const sign = amount > 0 ? "+" : amount < 0 ? "−" : "";
  const abs = Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return { sign, value: abs, currency };
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" });
}

export function dayKey(iso: string) {
  // Deterministic SSR-safe grouping based on UTC date in the dataset.
  const d = new Date(iso);
  const ref = new Date("2026-05-11T12:00:00Z");
  const dayMs = 86400000;
  const diff = Math.floor((Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate()) -
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())) / dayMs);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });
}
