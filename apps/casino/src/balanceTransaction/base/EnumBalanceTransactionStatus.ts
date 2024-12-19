/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumBalanceTransactionStatus {
  PendingPayment = "PENDING_PAYMENT",
  PaymentFailed = "PAYMENT_FAILED",
  Expired = "EXPIRED",
  CancelledByPlayer = "CANCELLED_BY_PLAYER",
  CancelledByShop = "CANCELLED_BY_SHOP",
  CancelledBySystem = "CANCELLED_BY_SYSTEM",
  Succeeded = "SUCCEEDED",
}

registerEnumType(EnumBalanceTransactionStatus, {
  name: "EnumBalanceTransactionStatus",
});
