import { Shop } from "../shop/Shop";
import { BalanceTransaction } from "../balanceTransaction/BalanceTransaction";

export type Product = {
  amountToReceiveInCents: number;
  bonusCode: string | null;
  bonusSpins: number | null;
  bonusTotalInCents: number | null;
  createdAt: Date | null;
  description: string;
  discountInCents: number;
  id: string;
  isPromo: boolean | null;
  priceInCents: number;
  shop?: Shop | null;
  shopTransaction?: Array<BalanceTransaction>;
  title: string;
  totalDiscountInCents: number;
  typeField: string;
  url: string;
};
