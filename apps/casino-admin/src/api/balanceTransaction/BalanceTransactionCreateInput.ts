import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type BalanceTransactionCreateInput = {
  amount: number;
  bonusIdUsed: string;
  cashierAccountId: string;
  cashierAvatar: string;
  cashierId: string;
  cashiername: string;
  channel:
    | "WALLET"
    | "COINBASE"
    | "BTCPAYSERVER"
    | "CASHAPP"
    | "INSTORE"
    | "PINCODE";
  currency: string;
  direction: "ADD" | "OUT";
  paymentMethod: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  personAvatar: string;
  personId: string;
  personname: string;
  playerAccount: AccountWhereUniqueInput;
  playerAccountBalanceAfterTransaction?: number | null;
  product: ProductWhereUniqueInput;
  salesCommission?: number | null;
  shop: ShopWhereUniqueInput;
  shopBalanceAfterTransaction?: number | null;
  status:
    | "PENDING_PAYMENT"
    | "PAYMENT_FAILED"
    | "EXPIRED"
    | "CANCELLED_BY_PLAYER"
    | "CANCELLED_BY_SHOP"
    | "CANCELLED_BY_SYSTEM"
    | "SUCCEEDED";
  totalInCents: number;
  type:
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
  updateLevel: boolean;
};
