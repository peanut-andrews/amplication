import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  avatar?: SortOrder;
  balance?: SortOrder;
  countBalance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  faceVerificationTime?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isExcluded?: SortOrder;
  openShiftsId?: SortOrder;
  personId?: SortOrder;
  personname?: SortOrder;
  role?: SortOrder;
  rtp?: SortOrder;
  shopId?: SortOrder;
  totalBonusWon?: SortOrder;
  totalCashIn?: SortOrder;
  totalCashOut?: SortOrder;
  totalLost?: SortOrder;
  totalWon?: SortOrder;
  updatedAt?: SortOrder;
};
