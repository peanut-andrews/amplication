import { SortOrder } from "../../util/SortOrder";

export type GameBankOrderByInput = {
  bonus?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  little?: SortOrder;
  shopId?: SortOrder;
  slots?: SortOrder;
  tableBank?: SortOrder;
  tempRtp?: SortOrder;
  updatedAt?: SortOrder;
};
