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
import { GameBankWhereInput } from "./GameBankWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class GameBankCountArgs {
  @ApiProperty({
    required: false,
    type: () => GameBankWhereInput,
  })
  @Field(() => GameBankWhereInput, { nullable: true })
  @Type(() => GameBankWhereInput)
  where?: GameBankWhereInput;
}

export { GameBankCountArgs as GameBankCountArgs };
