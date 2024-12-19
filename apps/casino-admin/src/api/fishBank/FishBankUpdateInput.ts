import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type FishBankUpdateInput = {
  deletedAt?: Date | null;
  fish?: number;
  isDeleted?: boolean;
  shop?: ShopWhereUniqueInput;
};
