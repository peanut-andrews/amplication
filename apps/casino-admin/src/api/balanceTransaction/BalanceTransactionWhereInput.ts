import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";

export type BalanceTransactionWhereInput = {
  amount?: IntFilter;
  bonusIdUsed?: StringFilter;
  cashierAccountId?: StringFilter;
  cashierAvatar?: StringFilter;
  cashierId?: StringFilter;
  cashiername?: StringFilter;
  channel?:
    | "WALLET"
    | "COINBASE"
    | "BTCPAYSERVER"
    | "CASHAPP"
    | "INSTORE"
    | "PINCODE";
  createdAt?: DateTimeFilter;
  currency?: StringFilter;
  direction?: "ADD" | "OUT";
  id?: StringFilter;
  paymentMethod?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  personAvatar?: StringFilter;
  personId?: StringFilter;
  personname?: StringFilter;
  playerAccount?: AccountWhereUniqueInput;
  playerAccountBalanceAfterTransaction?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
  salesCommission?: IntNullableFilter;
  shop?: ShopWhereUniqueInput;
  shopBalanceAfterTransaction?: IntNullableFilter;
  status?:
    | "PENDING_PAYMENT"
    | "PAYMENT_FAILED"
    | "EXPIRED"
    | "CANCELLED_BY_PLAYER"
    | "CANCELLED_BY_SHOP"
    | "CANCELLED_BY_SYSTEM"
    | "SUCCEEDED";
  totalInCents?: IntFilter;
  type?:
    | "INVITE"
    | "PROGRESS"
    | "TOURNAMENT"
    | "DAILY_ENTRY"
    | "REFUND"
    | "WELCOME_BONUS"
    | "SMS_BONUS"
    | "WHEEL_FORTUNE"
    | "CASH_OUT"
    | "RETAIL_PAYMENT"
    | "DEPOSIT";
  updateLevel?: BooleanFilter;
  updatedAt?: DateTimeFilter;
};
