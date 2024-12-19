import { BetWhereUniqueInput } from "./BetWhereUniqueInput";
import { BetUpdateInput } from "./BetUpdateInput";

export type UpdateBetArgs = {
  where: BetWhereUniqueInput;
  data: BetUpdateInput;
};
