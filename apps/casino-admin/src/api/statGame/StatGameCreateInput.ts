import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type StatGameCreateInput = {
  balance: number;
  bet: number;
  bonusBank: number;
  dateTime: Date;
  deletedAt?: Date | null;
  denomination: number;
  fishBank: number;
  gameBank: number;
  gameItem: GameWhereUniqueInput;
  inGame: number;
  inJpg: number;
  inProfit: number;
  isDeleted: boolean;
  jackBalance: number;
  littleBank: number;
  person: PersonWhereUniqueInput;
  shop: ShopWhereUniqueInput;
  slotsBank: number;
  tableBank: number;
  totalBank: number;
  win: number;
};
