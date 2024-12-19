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
import { EnumShopAcceptedPaymentMethods } from "./EnumShopAcceptedPaymentMethods";

import {
  IsEnum,
  IsOptional,
  ValidateNested,
  IsInt,
  Max,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";

import { AccountUpdateManyWithoutShopsInput } from "./AccountUpdateManyWithoutShopsInput";
import { Type } from "class-transformer";
import { BetUpdateManyWithoutShopsInput } from "./BetUpdateManyWithoutShopsInput";
import { FishBankWhereUniqueInput } from "../../fishBank/base/FishBankWhereUniqueInput";
import { GameBankWhereUniqueInput } from "../../gameBank/base/GameBankWhereUniqueInput";
import { StatGameUpdateManyWithoutShopsInput } from "./StatGameUpdateManyWithoutShopsInput";
import { GameUpdateManyWithoutShopsInput } from "./GameUpdateManyWithoutShopsInput";
import { OpenShiftUpdateManyWithoutShopsInput } from "./OpenShiftUpdateManyWithoutShopsInput";
import { ProductUpdateManyWithoutShopsInput } from "./ProductUpdateManyWithoutShopsInput";
import { BalanceTransactionUpdateManyWithoutShopsInput } from "./BalanceTransactionUpdateManyWithoutShopsInput";

@InputType()
class ShopUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumShopAcceptedPaymentMethods,
    isArray: true,
  })
  @IsEnum(EnumShopAcceptedPaymentMethods, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumShopAcceptedPaymentMethods], {
    nullable: true,
  })
  acceptedPaymentMethods?: Array<"CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO">;

  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutShopsInput;

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
  balance?: number;

  @ApiProperty({
    required: false,
    type: () => BetUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => BetUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => BetUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  bets?: BetUpdateManyWithoutShopsInput;

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
  code?: string | null;

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
  description?: string | null;

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
  facialRecognition?: number | null;

  @ApiProperty({
    required: false,
    type: () => FishBankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FishBankWhereUniqueInput)
  @IsOptional()
  @Field(() => FishBankWhereUniqueInput, {
    nullable: true,
  })
  fishBank?: FishBankWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => GameBankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameBankWhereUniqueInput)
  @IsOptional()
  @Field(() => GameBankWhereUniqueInput, {
    nullable: true,
  })
  gameBank?: GameBankWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => StatGameUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => StatGameUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => StatGameUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  gameStatsAccount?: StatGameUpdateManyWithoutShopsInput;

  @ApiProperty({
    required: false,
    type: () => GameUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => GameUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => GameUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  games?: GameUpdateManyWithoutShopsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMfaRequired?: boolean | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OpenShiftUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => OpenShiftUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => OpenShiftUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  openShifts?: OpenShiftUpdateManyWithoutShopsInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  product?: ProductUpdateManyWithoutShopsInput;

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
  shopSettingsId?: string | null;

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
  tenantId?: string | null;

  @ApiProperty({
    required: false,
    type: () => BalanceTransactionUpdateManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionUpdateManyWithoutShopsInput)
  @IsOptional()
  @Field(() => BalanceTransactionUpdateManyWithoutShopsInput, {
    nullable: true,
  })
  transactions?: BalanceTransactionUpdateManyWithoutShopsInput;

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
  url?: string | null;
}

export { ShopUpdateInput as ShopUpdateInput };
