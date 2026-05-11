import { createFileRoute } from "@tanstack/react-router";
import { TransactionsList } from "@/components/transactions-list";

export const Route = createFileRoute("/transactions/")({
  component: TransactionsList,
});
