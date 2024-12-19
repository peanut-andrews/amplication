import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  amountToReceiveInCents?: SortOrder;
  bonusCode?: SortOrder;
  bonusSpins?: SortOrder;
  bonusTotalInCents?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountInCents?: SortOrder;
  id?: SortOrder;
  isPromo?: SortOrder;
  priceInCents?: SortOrder;
  shopId?: SortOrder;
  title?: SortOrder;
  totalDiscountInCents?: SortOrder;
  typeField?: SortOrder;
  url?: SortOrder;
};
