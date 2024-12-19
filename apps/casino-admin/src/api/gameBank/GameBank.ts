import { Shop } from "../shop/Shop";

export type GameBank = {
  bonus: number;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  isDeleted: boolean;
  little: number;
  shop?: Shop;
  slots: number;
  tableBank: number;
  tempRtp: number;
  updatedAt: Date;
};
