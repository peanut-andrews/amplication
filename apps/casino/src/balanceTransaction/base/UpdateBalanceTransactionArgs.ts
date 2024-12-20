/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BalanceTransactionWhereUniqueInput } from "./BalanceTransactionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BalanceTransactionUpdateInput } from "./BalanceTransactionUpdateInput";

@ArgsType()
class UpdateBalanceTransactionArgs {
  @ApiProperty({
    required: true,
    type: () => BalanceTransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionWhereUniqueInput)
  @Field(() => BalanceTransactionWhereUniqueInput, { nullable: false })
  where!: BalanceTransactionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BalanceTransactionUpdateInput,
  })
  @ValidateNested()
  @Type(() => BalanceTransactionUpdateInput)
  @Field(() => BalanceTransactionUpdateInput, { nullable: false })
  data!: BalanceTransactionUpdateInput;
}

export { UpdateBalanceTransactionArgs as UpdateBalanceTransactionArgs };
