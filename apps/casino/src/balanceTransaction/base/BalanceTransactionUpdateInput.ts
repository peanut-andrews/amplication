/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsInt,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
  ValidateNested,
  IsBoolean,
} from "class-validator";

import { EnumBalanceTransactionChannel } from "./EnumBalanceTransactionChannel";
import { EnumBalanceTransactionDirection } from "./EnumBalanceTransactionDirection";
import { EnumBalanceTransactionPaymentMethod } from "./EnumBalanceTransactionPaymentMethod";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ShopWhereUniqueInput } from "../../shop/base/ShopWhereUniqueInput";
import { EnumBalanceTransactionStatus } from "./EnumBalanceTransactionStatus";
import { EnumBalanceTransactionType } from "./EnumBalanceTransactionType";

@InputType()
class BalanceTransactionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bonusIdUsed?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cashierAccountId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cashierAvatar?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cashierId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cashiername?: string;

  @ApiProperty({
    required: false,
    enum: EnumBalanceTransactionChannel,
  })
  @IsEnum(EnumBalanceTransactionChannel)
  @IsOptional()
  @Field(() => EnumBalanceTransactionChannel, {
    nullable: true,
  })
  channel?:
    | "WALLET"
    | "COINBASE"
    | "BTCPAYSERVER"
    | "CASHAPP"
    | "INSTORE"
    | "PINCODE";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string;

  @ApiProperty({
    required: false,
    enum: EnumBalanceTransactionDirection,
  })
  @IsEnum(EnumBalanceTransactionDirection)
  @IsOptional()
  @Field(() => EnumBalanceTransactionDirection, {
    nullable: true,
  })
  direction?: "ADD" | "OUT";

  @ApiProperty({
    required: false,
    enum: EnumBalanceTransactionPaymentMethod,
  })
  @IsEnum(EnumBalanceTransactionPaymentMethod)
  @IsOptional()
  @Field(() => EnumBalanceTransactionPaymentMethod, {
    nullable: true,
  })
  paymentMethod?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personAvatar?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personname?: string;

  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  playerAccount?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  playerAccountBalanceAfterTransaction?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  salesCommission?: number | null;

  @ApiProperty({
    required: false,
    type: () => ShopWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShopWhereUniqueInput)
  @IsOptional()
  @Field(() => ShopWhereUniqueInput, {
    nullable: true,
  })
  shop?: ShopWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  shopBalanceAfterTransaction?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumBalanceTransactionStatus,
  })
  @IsEnum(EnumBalanceTransactionStatus)
  @IsOptional()
  @Field(() => EnumBalanceTransactionStatus, {
    nullable: true,
  })
  status?:
    | "PENDING_PAYMENT"
    | "PAYMENT_FAILED"
    | "EXPIRED"
    | "CANCELLED_BY_PLAYER"
    | "CANCELLED_BY_SHOP"
    | "CANCELLED_BY_SYSTEM"
    | "SUCCEEDED";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalInCents?: number;

  @ApiProperty({
    required: false,
    enum: EnumBalanceTransactionType,
  })
  @IsEnum(EnumBalanceTransactionType)
  @IsOptional()
  @Field(() => EnumBalanceTransactionType, {
    nullable: true,
  })
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

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  updateLevel?: boolean;
}

export { BalanceTransactionUpdateInput as BalanceTransactionUpdateInput };
