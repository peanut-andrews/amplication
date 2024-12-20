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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { BetListRelationFilter } from "../../bet/base/BetListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OpenShiftWhereUniqueInput } from "../../openShift/base/OpenShiftWhereUniqueInput";
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ShopWhereUniqueInput } from "../../shop/base/ShopWhereUniqueInput";
import { BalanceTransactionListRelationFilter } from "../../balanceTransaction/base/BalanceTransactionListRelationFilter";

@InputType()
class AccountWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  avatar?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  balance?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => BetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BetListRelationFilter)
  @IsOptional()
  @Field(() => BetListRelationFilter, {
    nullable: true,
  })
  bets?: BetListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  countBalance?: IntFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currency?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  faceVerificationTime?: StringNullableFilter;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isActive?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isExcluded?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OpenShiftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpenShiftWhereUniqueInput)
  @IsOptional()
  @Field(() => OpenShiftWhereUniqueInput, {
    nullable: true,
  })
  openShifts?: OpenShiftWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonWhereUniqueInput)
  @IsOptional()
  @Field(() => PersonWhereUniqueInput, {
    nullable: true,
  })
  person?: PersonWhereUniqueInput;

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
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  rtp?: FloatFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalBonusWon?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  totalCashIn?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  totalCashOut?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalLost?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalWon?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => BalanceTransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionListRelationFilter)
  @IsOptional()
  @Field(() => BalanceTransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: BalanceTransactionListRelationFilter;

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

export { AccountWhereInput as AccountWhereInput };
