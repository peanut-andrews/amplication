import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type GameBankCreateInput = {
  bonus: number;
  deletedAt?: Date | null;
  isDeleted: boolean;
  little: number;
  shop: ShopWhereUniqueInput;
  slots: number;
  tableBank: number;
  tempRtp: number;
};
