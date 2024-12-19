import { FishBankWhereInput } from "./FishBankWhereInput";
import { FishBankOrderByInput } from "./FishBankOrderByInput";

export type FishBankFindManyArgs = {
  where?: FishBankWhereInput;
  orderBy?: Array<FishBankOrderByInput>;
  skip?: number;
  take?: number;
};
