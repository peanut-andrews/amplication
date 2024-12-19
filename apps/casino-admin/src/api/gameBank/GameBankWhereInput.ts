import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type GameBankWhereInput = {
  bonus?: FloatFilter;
  createdAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  little?: FloatFilter;
  shop?: ShopWhereUniqueInput;
  slots?: FloatFilter;
  tableBank?: FloatFilter;
  tempRtp?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
