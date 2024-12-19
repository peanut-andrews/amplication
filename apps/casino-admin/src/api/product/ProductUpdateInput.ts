import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { BalanceTransactionUpdateManyWithoutProductsInput } from "./BalanceTransactionUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  amountToReceiveInCents?: number;
  bonusCode?: string | null;
  bonusSpins?: number | null;
  bonusTotalInCents?: number | null;
  description?: string;
  discountInCents?: number;
  isPromo?: boolean | null;
  priceInCents?: number;
  shop?: ShopWhereUniqueInput | null;
  shopTransaction?: BalanceTransactionUpdateManyWithoutProductsInput;
  title?: string;
  totalDiscountInCents?: number;
  typeField?: string;
  url?: string;
};
