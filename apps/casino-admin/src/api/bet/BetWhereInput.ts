import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type BetWhereInput = {
  account?: AccountWhereUniqueInput;
  betAmount?: IntFilter;
  createdAt?: DateTimeFilter;
  currency?: StringFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  multiplier?: FloatFilter;
  shop?: ShopWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  winAmount?: IntFilter;
};
