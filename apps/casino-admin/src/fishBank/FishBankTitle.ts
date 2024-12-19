import { FishBank as TFishBank } from "../api/fishBank/FishBank";

export const FISHBANK_TITLE_FIELD = "id";

export const FishBankTitle = (record: TFishBank): string => {
  return record.id?.toString() || String(record.id);
};
