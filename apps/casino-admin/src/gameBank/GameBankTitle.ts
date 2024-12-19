import { GameBank as TGameBank } from "../api/gameBank/GameBank";

export const GAMEBANK_TITLE_FIELD = "id";

export const GameBankTitle = (record: TGameBank): string => {
  return record.id?.toString() || String(record.id);
};
