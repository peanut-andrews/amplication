import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  activeAccountId?: SortOrder;
  activeShopId?: SortOrder;
  avatar?: SortOrder;
  cashtag?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  email?: SortOrder;
  emailConfirmed?: SortOrder;
  embeddings?: SortOrder;
  favorites?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  isFirstDeposit?: SortOrder;
  isSupended?: SortOrder;
  lastSignInAt?: SortOrder;
  password?: SortOrder;
  personInfo?: SortOrder;
  personname?: SortOrder;
  phone?: SortOrder;
  phoneConfirmed?: SortOrder;
  resetPasswordToken?: SortOrder;
  updatedAt?: SortOrder;
  vipLevel?: SortOrder;
};
