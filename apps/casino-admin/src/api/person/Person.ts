import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { StatGame } from "../statGame/StatGame";
import { Message } from "../message/Message";

export type Person = {
  accounts?: Array<Account>;
  activeAccountId: string | null;
  activeShopId: string | null;
  avatar: string | null;
  cashtag: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  email: string | null;
  emailConfirmed: boolean | null;
  embeddings: JsonValue;
  favorites: string;
  gameStats?: Array<StatGame>;
  id: string;
  isDeleted: boolean;
  isFirstDeposit: boolean | null;
  isSupended: boolean | null;
  lastSignInAt: Date | null;
  messages?: Array<Message>;
  password: string | null;
  personInfo: JsonValue;
  personname: string | null;
  phone: string | null;
  phoneConfirmed: boolean | null;
  resetPasswordToken: string | null;
  updatedAt: Date;
  vipLevel: number | null;
};
