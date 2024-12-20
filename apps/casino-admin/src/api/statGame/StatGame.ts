import { Game } from "../game/Game";
import { Person } from "../person/Person";
import { Shop } from "../shop/Shop";

export type StatGame = {
  balance: number;
  bet: number;
  bonusBank: number;
  createdAt: Date;
  dateTime: Date;
  deletedAt: Date | null;
  denomination: number;
  fishBank: number;
  gameBank: number;
  gameItem?: Game;
  id: string;
  inGame: number;
  inJpg: number;
  inProfit: number;
  isDeleted: boolean;
  jackBalance: number;
  littleBank: number;
  person?: Person;
  shop?: Shop;
  slotsBank: number;
  tableBank: number;
  totalBank: number;
  updatedAt: Date;
  win: number;
};
