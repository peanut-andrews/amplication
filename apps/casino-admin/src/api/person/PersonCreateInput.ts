import { AccountCreateNestedManyWithoutPeopleInput } from "./AccountCreateNestedManyWithoutPeopleInput";
import { InputJsonValue } from "../../types";
import { StatGameCreateNestedManyWithoutPeopleInput } from "./StatGameCreateNestedManyWithoutPeopleInput";
import { MessageCreateNestedManyWithoutPeopleInput } from "./MessageCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  accounts?: AccountCreateNestedManyWithoutPeopleInput;
  activeAccountId?: string | null;
  activeShopId?: string | null;
  avatar?: string | null;
  cashtag?: string | null;
  deletedAt?: Date | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  embeddings: InputJsonValue;
  favorites: string;
  gameStats?: StatGameCreateNestedManyWithoutPeopleInput;
  isDeleted: boolean;
  isFirstDeposit?: boolean | null;
  isSupended?: boolean | null;
  lastSignInAt?: Date | null;
  messages?: MessageCreateNestedManyWithoutPeopleInput;
  password?: string | null;
  personInfo: InputJsonValue;
  personname?: string | null;
  phone?: string | null;
  phoneConfirmed?: boolean | null;
  resetPasswordToken?: string | null;
  vipLevel?: number | null;
};
