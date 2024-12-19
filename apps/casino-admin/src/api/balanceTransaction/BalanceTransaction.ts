import { Account } from "../account/Account";
import { Product } from "../product/Product";
import { Shop } from "../shop/Shop";

export type BalanceTransaction = {
  amount: number;
  bonusIdUsed: string;
  cashierAccountId: string;
  cashierAvatar: string;
  cashierId: string;
  cashiername: string;
  channel?:
    | "WALLET"
    | "COINBASE"
    | "BTCPAYSERVER"
    | "CASHAPP"
    | "INSTORE"
    | "PINCODE";
  createdAt: Date;
  currency: string;
  direction?: "ADD" | "OUT";
  id: string;
  paymentMethod?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";
  personAvatar: string;
  personId: string;
  personname: string;
  playerAccount?: Account;
  playerAccountBalanceAfterTransaction: number | null;
  product?: Product;
  salesCommission: number | null;
  shop?: Shop;
  shopBalanceAfterTransaction: number | null;
  status?:
    | "PENDING_PAYMENT"
    | "PAYMENT_FAILED"
    | "EXPIRED"
    | "CANCELLED_BY_PLAYER"
    | "CANCELLED_BY_SHOP"
    | "CANCELLED_BY_SYSTEM"
    | "SUCCEEDED";
  totalInCents: number;
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
  updateLevel: boolean;
  updatedAt: Date;
};
