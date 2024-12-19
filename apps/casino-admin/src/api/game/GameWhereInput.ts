import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { StatGameListRelationFilter } from "../statGame/StatGameListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type GameWhereInput = {
  advanced?: StringNullableFilter;
  bet?: FloatNullableFilter;
  bets?: BetListRelationFilter;
  bids?: IntNullableFilter;
  cask?: FloatNullableFilter;
  categoryId?: StringNullableFilter;
  categoryTemp?: FloatNullableFilter;
  chanceFirepot1?: FloatNullableFilter;
  chanceFirepot2?: FloatNullableFilter;
  chanceFirepot3?: FloatNullableFilter;
  createdAt?: FloatNullableFilter;
  currentRtp?: FloatNullableFilter;
  denomination?: FloatNullableFilter;
  developer?: StringNullableFilter;
  device?: IntFilter;
  featured?: BooleanNullableFilter;
  fireCount1?: FloatNullableFilter;
  fireCount2?: FloatNullableFilter;
  fireCount3?: FloatNullableFilter;
  gamebank?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  jackpotGroupId?: StringNullableFilter;
  jpgId?: IntFilter;
  linesPercentConfigBonus?: StringNullableFilter;
  linesPercentConfigBonusBonus?: StringNullableFilter;
  linesPercentConfigSpin?: StringNullableFilter;
  linesPercentConfigSpinBonus?: StringNullableFilter;
  name?: StringFilter;
  originalId?: IntNullableFilter;
  popularity?: FloatNullableFilter;
  providerId?: StringNullableFilter;
  rezerv?: FloatNullableFilter;
  rtpStatIn?: FloatNullableFilter;
  rtpStatOut?: FloatNullableFilter;
  scaleMode?: StringFilter;
  shop?: ShopWhereUniqueInput;
  slotViewState?: StringFilter;
  standardRtp?: FloatNullableFilter;
  statIn?: FloatNullableFilter;
  statOut?: FloatNullableFilter;
  stats?: StatGameListRelationFilter;
  title?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  view?: IntNullableFilter;
  vipLevel?: IntNullableFilter;
};