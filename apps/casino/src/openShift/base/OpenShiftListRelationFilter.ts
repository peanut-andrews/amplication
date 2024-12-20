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
import { OpenShiftWhereInput } from "./OpenShiftWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OpenShiftListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OpenShiftWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenShiftWhereInput)
  @IsOptional()
  @Field(() => OpenShiftWhereInput, {
    nullable: true,
  })
  every?: OpenShiftWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpenShiftWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenShiftWhereInput)
  @IsOptional()
  @Field(() => OpenShiftWhereInput, {
    nullable: true,
  })
  some?: OpenShiftWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpenShiftWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenShiftWhereInput)
  @IsOptional()
  @Field(() => OpenShiftWhereInput, {
    nullable: true,
  })
  none?: OpenShiftWhereInput;
}
export { OpenShiftListRelationFilter as OpenShiftListRelationFilter };
