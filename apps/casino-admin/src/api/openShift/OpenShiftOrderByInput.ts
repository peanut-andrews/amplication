import { SortOrder } from "../../util/SortOrder";

export type OpenShiftOrderByInput = {
  balance?: SortOrder;
  balanceIn?: SortOrder;
  balanceOut?: SortOrder;
  cashierId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  jpg?: SortOrder;
  lastBanks?: SortOrder;
  moneyIn?: SortOrder;
  moneyOut?: SortOrder;
  oldBanks?: SortOrder;
  oldTotal?: SortOrder;
  personId?: SortOrder;
  persons?: SortOrder;
  shopId?: SortOrder;
  startDate?: SortOrder;
  transfers?: SortOrder;
  updatedAt?: SortOrder;
  welcomeBonuses?: SortOrder;
};
