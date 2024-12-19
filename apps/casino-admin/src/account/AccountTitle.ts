import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "personname";

export const AccountTitle = (record: TAccount): string => {
  return record.personname?.toString() || String(record.id);
};
