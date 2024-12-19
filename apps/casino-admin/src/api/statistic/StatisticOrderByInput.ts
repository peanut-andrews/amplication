import { SortOrder } from "../../util/SortOrder";

export type StatisticOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  hhMultiplier?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  payeerId?: SortOrder;
  personId?: SortOrder;
  sum?: SortOrder;
  title?: SortOrder;
  total?: SortOrder;
  transactionChannel?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
