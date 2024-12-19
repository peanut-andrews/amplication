import { BalanceTransaction as TBalanceTransaction } from "../api/balanceTransaction/BalanceTransaction";

export const BALANCETRANSACTION_TITLE_FIELD = "cashiername";

export const BalanceTransactionTitle = (
  record: TBalanceTransaction
): string => {
  return record.cashiername?.toString() || String(record.id);
};
