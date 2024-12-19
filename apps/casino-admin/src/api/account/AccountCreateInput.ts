import { BetCreateNestedManyWithoutAccountsInput } from "./BetCreateNestedManyWithoutAccountsInput";
import { OpenShiftWhereUniqueInput } from "../openShift/OpenShiftWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { BalanceTransactionCreateNestedManyWithoutAccountsInput } from "./BalanceTransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  avatar: string;
  balance: number;
  bets?: BetCreateNestedManyWithoutAccountsInput;
  countBalance: number;
  currency?: string | null;
  faceVerificationTime?: string | null;
  isActive?: boolean | null;
  isExcluded?: boolean | null;
  openShifts?: OpenShiftWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
  personname: string;
  role: InputJsonValue;
  rtp: number;
  shop?: ShopWhereUniqueInput | null;
  totalBonusWon: number;
  totalCashIn?: string | null;
  totalCashOut?: string | null;
  totalLost: number;
  totalWon: number;
  transactions?: BalanceTransactionCreateNestedManyWithoutAccountsInput;
};
