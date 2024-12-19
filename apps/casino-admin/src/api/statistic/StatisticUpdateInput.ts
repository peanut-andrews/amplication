export type StatisticUpdateInput = {
  deletedAt?: Date | null;
  hhMultiplier?: number | null;
  isDeleted?: boolean;
  payeerId?: string;
  personId?: string;
  sum?: number | null;
  title?: string;
  total?: number | null;
  transactionChannel?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  typeField?: string;
};
