import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OpenShiftUpdateInput = {
  balance?: number;
  balanceIn?: number;
  balanceOut?: number;
  cashier?: AccountWhereUniqueInput | null;
  deletedAt?: Date | null;
  endDate?: Date | null;
  isDeleted?: boolean;
  jpg?: number;
  lastBanks?: number;
  moneyIn?: number;
  moneyOut?: number;
  oldBanks?: number;
  oldTotal?: number;
  personId?: string;
  persons?: number;
  shop?: ShopWhereUniqueInput | null;
  startDate?: Date;
  transfers?: number;
  welcomeBonuses?: InputJsonValue;
};
