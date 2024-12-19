import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { BalanceTransactionListRelationFilter } from "../balanceTransaction/BalanceTransactionListRelationFilter";

export type ProductWhereInput = {
  amountToReceiveInCents?: IntFilter;
  bonusCode?: StringNullableFilter;
  bonusSpins?: IntNullableFilter;
  bonusTotalInCents?: IntNullableFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringFilter;
  discountInCents?: IntFilter;
  id?: StringFilter;
  isPromo?: BooleanNullableFilter;
  priceInCents?: IntFilter;
  shop?: ShopWhereUniqueInput;
  shopTransaction?: BalanceTransactionListRelationFilter;
  title?: StringFilter;
  totalDiscountInCents?: IntFilter;
  typeField?: StringFilter;
  url?: StringFilter;
};
