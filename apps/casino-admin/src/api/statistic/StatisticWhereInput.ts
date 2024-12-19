import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StatisticWhereInput = {
  createdAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  hhMultiplier?: FloatNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  payeerId?: StringFilter;
  personId?: StringFilter;
  sum?: IntNullableFilter;
  title?: StringFilter;
  total?: IntNullableFilter;
  transactionChannel?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
};
