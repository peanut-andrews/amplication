import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { BalanceTransactionCreateNestedManyWithoutProductsInput } from "./BalanceTransactionCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  amountToReceiveInCents: number;
  bonusCode?: string | null;
  bonusSpins?: number | null;
  bonusTotalInCents?: number | null;
  description: string;
  discountInCents: number;
  isPromo?: boolean | null;
  priceInCents: number;
  shop?: ShopWhereUniqueInput | null;
  shopTransaction?: BalanceTransactionCreateNestedManyWithoutProductsInput;
  title: string;
  totalDiscountInCents: number;
  typeField: string;
  url: string;
};
