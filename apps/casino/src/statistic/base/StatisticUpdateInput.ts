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
  IsDate,
  IsOptional,
  IsNumber,
  Max,
  IsBoolean,
  IsString,
  MaxLength,
  IsInt,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumStatisticTransactionChannel } from "./EnumStatisticTransactionChannel";

@InputType()
class StatisticUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  hhMultiplier?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDeleted?: boolean;

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
  payeerId?: string;

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
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sum?: number | null;

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
  title?: string;

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
  total?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumStatisticTransactionChannel,
  })
  @IsEnum(EnumStatisticTransactionChannel)
  @IsOptional()
  @Field(() => EnumStatisticTransactionChannel, {
    nullable: true,
  })
  transactionChannel?: "CASHAPP" | "INSTORE" | "VENMO" | "CRYPTO";

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
  typeField?: string;
}

export { StatisticUpdateInput as StatisticUpdateInput };
