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
import { IntFilter } from "../../util/IntFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { EnumBalanceTransactionChannel } from "./EnumBalanceTransactionChannel";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EnumBalanceTransactionDirection } from "./EnumBalanceTransactionDirection";
import { EnumBalanceTransactionPaymentMethod } from "./EnumBalanceTransactionPaymentMethod";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ShopWhereUniqueInput } from "../../shop/base/ShopWhereUniqueInput";
import { EnumBalanceTransactionStatus } from "./EnumBalanceTransactionStatus";
import { EnumBalanceTransactionType } from "./EnumBalanceTransactionType";
import { BooleanFilter } from "../../util/BooleanFilter";

@InputType()
class BalanceTransactionWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  amount?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  bonusIdUsed?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  cashierAccountId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  cashierAvatar?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  cashierId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  cashiername?: StringFilter;

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
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  currency?: StringFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  personAvatar?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  personId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  personname?: StringFilter;

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
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  playerAccountBalanceAfterTransaction?: IntNullableFilter;

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
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  salesCommission?: IntNullableFilter;

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
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  shopBalanceAfterTransaction?: IntNullableFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalInCents?: IntFilter;

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
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  updateLevel?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { BalanceTransactionWhereInput as BalanceTransactionWhereInput };
