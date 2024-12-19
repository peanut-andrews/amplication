import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  accountId?: SortOrder;
  betAmount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  multiplier?: SortOrder;
  shopId?: SortOrder;
  updatedAt?: SortOrder;
  winAmount?: SortOrder;
};
