import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type BetCreateInput = {
  account?: AccountWhereUniqueInput | null;
  betAmount: number;
  currency: string;
  game?: GameWhereUniqueInput | null;
  multiplier: number;
  shop?: ShopWhereUniqueInput | null;
  winAmount: number;
};
