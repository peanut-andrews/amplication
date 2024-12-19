import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type FishBankWhereInput = {
  createdAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  fish?: FloatFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  shop?: ShopWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
