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

import { AccountCreateNestedManyWithoutShopsInput } from "./AccountCreateNestedManyWithoutShopsInput";
import { Type } from "class-transformer";
import { BetCreateNestedManyWithoutShopsInput } from "./BetCreateNestedManyWithoutShopsInput";
import { FishBankWhereUniqueInput } from "../../fishBank/base/FishBankWhereUniqueInput";
import { GameBankWhereUniqueInput } from "../../gameBank/base/GameBankWhereUniqueInput";
import { StatGameCreateNestedManyWithoutShopsInput } from "./StatGameCreateNestedManyWithoutShopsInput";
import { GameCreateNestedManyWithoutShopsInput } from "./GameCreateNestedManyWithoutShopsInput";
import { ProductCreateNestedManyWithoutShopsInput } from "./ProductCreateNestedManyWithoutShopsInput";
import { BalanceTransactionCreateNestedManyWithoutShopsInput } from "./BalanceTransactionCreateNestedManyWithoutShopsInput";

@InputType()
class ShopCreateInput {
  @ApiProperty({
    required: true,
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
    type: () => AccountCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutShopsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  balance!: number;

  @ApiProperty({
    required: false,
    type: () => BetCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => BetCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => BetCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  bets?: BetCreateNestedManyWithoutShopsInput;

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
    type: () => StatGameCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => StatGameCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => StatGameCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  gameStatsAccount?: StatGameCreateNestedManyWithoutShopsInput;

  @ApiProperty({
    required: false,
    type: () => GameCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => GameCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => GameCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  games?: GameCreateNestedManyWithoutShopsInput;

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
    type: () => ProductCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  product?: ProductCreateNestedManyWithoutShopsInput;

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
    type: () => BalanceTransactionCreateNestedManyWithoutShopsInput,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionCreateNestedManyWithoutShopsInput)
  @IsOptional()
  @Field(() => BalanceTransactionCreateNestedManyWithoutShopsInput, {
    nullable: true,
  })
  transactions?: BalanceTransactionCreateNestedManyWithoutShopsInput;

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

export { ShopCreateInput as ShopCreateInput };
