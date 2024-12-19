/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
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
  IsDate,
  IsBoolean,
} from "class-validator";

import { Account } from "../../account/base/Account";
import { Type } from "class-transformer";
import { Bet } from "../../bet/base/Bet";
import { FishBank } from "../../fishBank/base/FishBank";
import { GameBank } from "../../gameBank/base/GameBank";
import { StatGame } from "../../statGame/base/StatGame";
import { Game } from "../../game/base/Game";
import { Product } from "../../product/base/Product";
import { BalanceTransaction } from "../../balanceTransaction/base/BalanceTransaction";

@ObjectType()
class Shop {
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
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accounts?: Array<Account>;

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
    type: () => [Bet],
  })
  @ValidateNested()
  @Type(() => Bet)
  @IsOptional()
  bets?: Array<Bet>;

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
  code!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  description!: string | null;

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
  facialRecognition!: number | null;

  @ApiProperty({
    required: false,
    type: () => FishBank,
  })
  @ValidateNested()
  @Type(() => FishBank)
  @IsOptional()
  fishBank?: FishBank | null;

  @ApiProperty({
    required: false,
    type: () => GameBank,
  })
  @ValidateNested()
  @Type(() => GameBank)
  @IsOptional()
  gameBank?: GameBank | null;

  @ApiProperty({
    required: false,
    type: () => [StatGame],
  })
  @ValidateNested()
  @Type(() => StatGame)
  @IsOptional()
  gameStatsAccount?: Array<StatGame>;

  @ApiProperty({
    required: false,
    type: () => [Game],
  })
  @ValidateNested()
  @Type(() => Game)
  @IsOptional()
  games?: Array<Game>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMfaRequired!: boolean | null;

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
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Product],
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  product?: Array<Product>;

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
  shopSettingsId!: string | null;

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
  tenantId!: string | null;

  @ApiProperty({
    required: false,
    type: () => [BalanceTransaction],
  })
  @ValidateNested()
  @Type(() => BalanceTransaction)
  @IsOptional()
  transactions?: Array<BalanceTransaction>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

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
  url!: string | null;
}

export { Shop as Shop };
