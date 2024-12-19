export type Statistic = {
  createdAt: Date;
  deletedAt: Date | null;
  hhMultiplier: number | null;
  id: string;
  isDeleted: boolean;
  payeerId: string;
  personId: string;
  sum: number | null;
  title: string;
  total: number | null;
  transactionChannel?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  typeField: string;
  updatedAt: Date;
};
