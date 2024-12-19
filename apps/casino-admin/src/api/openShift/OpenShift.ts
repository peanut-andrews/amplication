import { Account } from "../account/Account";
import { Shop } from "../shop/Shop";
import { JsonValue } from "type-fest";

export type OpenShift = {
  balance: number;
  balanceIn: number;
  balanceOut: number;
  cashier?: Account | null;
  createdAt: Date;
  deletedAt: Date | null;
  endDate: Date | null;
  id: string;
  isDeleted: boolean;
  jpg: number;
  lastBanks: number;
  moneyIn: number;
  moneyOut: number;
  oldBanks: number;
  oldTotal: number;
  personId: string;
  persons: number;
  shop?: Shop | null;
  startDate: Date;
  transfers: number;
  updatedAt: Date;
  welcomeBonuses: JsonValue;
};
