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

import {
  IsString,
  MaxLength,
  IsInt,
  Max,
  ValidateNested,
  IsOptional,
  IsDate,
  IsBoolean,
  IsNumber,
} from "class-validator";

import { Bet } from "../../bet/base/Bet";
import { Type } from "class-transformer";
import { OpenShift } from "../../openShift/base/OpenShift";
import { Person } from "../../person/base/Person";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Shop } from "../../shop/base/Shop";
import { BalanceTransaction } from "../../balanceTransaction/base/BalanceTransaction";

@ObjectType()
class Account {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  avatar!: string;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  countBalance!: number;

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
  currency!: string | null;

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
  faceVerificationTime!: string | null;

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
  isExcluded!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OpenShift,
  })
  @ValidateNested()
  @Type(() => OpenShift)
  @IsOptional()
  openShifts?: OpenShift | null;

  @ApiProperty({
    required: false,
    type: () => Person,
  })
  @ValidateNested()
  @Type(() => Person)
  @IsOptional()
  person?: Person | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  personname!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  role!: JsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  rtp!: number;

  @ApiProperty({
    required: false,
    type: () => Shop,
  })
  @ValidateNested()
  @Type(() => Shop)
  @IsOptional()
  shop?: Shop | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  totalBonusWon!: number;

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
  totalCashIn!: string | null;

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
  totalCashOut!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  totalLost!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  totalWon!: number;

  @ApiProperty({
    required: false,
    type: () => [BalanceTransaction],
  })
  @ValidateNested()
  @Type(() => BalanceTransaction)
  @IsOptional()
  transactions?: Array<BalanceTransaction>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Account as Account };
