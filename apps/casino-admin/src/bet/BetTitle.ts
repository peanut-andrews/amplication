import { Bet as TBet } from "../api/bet/Bet";

export const BET_TITLE_FIELD = "currency";

export const BetTitle = (record: TBet): string => {
  return record.currency?.toString() || String(record.id);
};
