import { Account } from "../account/Account";
import { Game } from "../game/Game";
import { Shop } from "../shop/Shop";

export type Bet = {
  account?: Account | null;
  betAmount: number;
  createdAt: Date;
  currency: string;
  game?: Game | null;
  id: string;
  multiplier: number;
  shop?: Shop | null;
  updatedAt: Date;
  winAmount: number;
};
