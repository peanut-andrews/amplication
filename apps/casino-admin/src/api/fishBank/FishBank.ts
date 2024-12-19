import { Shop } from "../shop/Shop";

export type FishBank = {
  createdAt: Date;
  deletedAt: Date | null;
  fish: number;
  id: string;
  isDeleted: boolean;
  shop?: Shop;
  updatedAt: Date;
};
