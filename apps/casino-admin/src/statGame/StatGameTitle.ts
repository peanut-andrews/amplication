import { StatGame as TStatGame } from "../api/statGame/StatGame";

export const STATGAME_TITLE_FIELD = "id";

export const StatGameTitle = (record: TStatGame): string => {
  return record.id?.toString() || String(record.id);
};
