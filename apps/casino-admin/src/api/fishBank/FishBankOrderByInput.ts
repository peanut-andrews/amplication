import { SortOrder } from "../../util/SortOrder";

export type FishBankOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  fish?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  shopId?: SortOrder;
  updatedAt?: SortOrder;
};
