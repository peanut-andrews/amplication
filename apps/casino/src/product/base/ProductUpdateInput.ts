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
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { ShopWhereUniqueInput } from "../../shop/base/ShopWhereUniqueInput";
import { Type } from "class-transformer";
import { BalanceTransactionUpdateManyWithoutProductsInput } from "./BalanceTransactionUpdateManyWithoutProductsInput";

@InputType()
class ProductUpdateInput {
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
  amountToReceiveInCents?: number;

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
  bonusCode?: string | null;

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
  bonusSpins?: number | null;

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
  bonusTotalInCents?: number | null;

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
  description?: string;

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
  discountInCents?: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPromo?: boolean | null;

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
  priceInCents?: number;

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
  shop?: ShopWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BalanceTransactionUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => BalanceTransactionUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  shopTransaction?: BalanceTransactionUpdateManyWithoutProductsInput;

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
  totalDiscountInCents?: number;

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
  url?: string;
}

export { ProductUpdateInput as ProductUpdateInput };