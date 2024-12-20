import { AccountUpdateManyWithoutPeopleInput } from "./AccountUpdateManyWithoutPeopleInput";
import { InputJsonValue } from "../../types";
import { StatGameUpdateManyWithoutPeopleInput } from "./StatGameUpdateManyWithoutPeopleInput";
import { MessageUpdateManyWithoutPeopleInput } from "./MessageUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  accounts?: AccountUpdateManyWithoutPeopleInput;
  activeAccountId?: string | null;
  activeShopId?: string | null;
  avatar?: string | null;
  cashtag?: string | null;
  deletedAt?: Date | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  embeddings?: InputJsonValue;
  favorites?: string;
  gameStats?: StatGameUpdateManyWithoutPeopleInput;
  isDeleted?: boolean;
  isFirstDeposit?: boolean | null;
  isSupended?: boolean | null;
  lastSignInAt?: Date | null;
  messages?: MessageUpdateManyWithoutPeopleInput;
  password?: string | null;
  personInfo?: InputJsonValue;
  personname?: string | null;
  phone?: string | null;
  phoneConfirmed?: boolean | null;
  resetPasswordToken?: string | null;
  vipLevel?: number | null;
};
