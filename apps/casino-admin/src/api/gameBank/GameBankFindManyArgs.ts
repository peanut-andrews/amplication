import { GameBankWhereInput } from "./GameBankWhereInput";
import { GameBankOrderByInput } from "./GameBankOrderByInput";

export type GameBankFindManyArgs = {
  where?: GameBankWhereInput;
  orderBy?: Array<GameBankOrderByInput>;
  skip?: number;
  take?: number;
};
