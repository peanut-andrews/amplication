import { BetWhereInput } from "./BetWhereInput";
import { BetOrderByInput } from "./BetOrderByInput";

export type BetFindManyArgs = {
  where?: BetWhereInput;
  orderBy?: Array<BetOrderByInput>;
  skip?: number;
  take?: number;
};
