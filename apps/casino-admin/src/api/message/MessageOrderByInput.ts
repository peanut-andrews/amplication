import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  roomId?: SortOrder;
  text?: SortOrder;
  typeField?: SortOrder;
};
