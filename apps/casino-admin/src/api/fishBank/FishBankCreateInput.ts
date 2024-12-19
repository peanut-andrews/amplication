import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type FishBankCreateInput = {
  deletedAt?: Date | null;
  fish: number;
  isDeleted: boolean;
  shop: ShopWhereUniqueInput;
};
