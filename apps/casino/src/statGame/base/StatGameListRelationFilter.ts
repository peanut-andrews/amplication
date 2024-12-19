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
import { StatGameWhereInput } from "./StatGameWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatGameListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatGameWhereInput,
  })
  @ValidateNested()
  @Type(() => StatGameWhereInput)
  @IsOptional()
  @Field(() => StatGameWhereInput, {
    nullable: true,
  })
  every?: StatGameWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatGameWhereInput,
  })
  @ValidateNested()
  @Type(() => StatGameWhereInput)
  @IsOptional()
  @Field(() => StatGameWhereInput, {
    nullable: true,
  })
  some?: StatGameWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatGameWhereInput,
  })
  @ValidateNested()
  @Type(() => StatGameWhereInput)
  @IsOptional()
  @Field(() => StatGameWhereInput, {
    nullable: true,
  })
  none?: StatGameWhereInput;
}
export { StatGameListRelationFilter as StatGameListRelationFilter };
