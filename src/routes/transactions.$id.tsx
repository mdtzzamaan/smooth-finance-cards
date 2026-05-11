import { createFileRoute } from "@tanstack/react-router";
import { TransactionDetail } from "@/components/transaction-detail";

export const Route = createFileRoute("/transactions/$id")({
  component: TransactionDetail,
});
