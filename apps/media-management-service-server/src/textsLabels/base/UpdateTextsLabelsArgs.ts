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
import { TextsLabelsWhereUniqueInput } from "./TextsLabelsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TextsLabelsUpdateInput } from "./TextsLabelsUpdateInput";

@ArgsType()
class UpdateTextsLabelsArgs {
  @ApiProperty({
    required: true,
    type: () => TextsLabelsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TextsLabelsWhereUniqueInput)
  @Field(() => TextsLabelsWhereUniqueInput, { nullable: false })
  where!: TextsLabelsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TextsLabelsUpdateInput,
  })
  @ValidateNested()
  @Type(() => TextsLabelsUpdateInput)
  @Field(() => TextsLabelsUpdateInput, { nullable: false })
  data!: TextsLabelsUpdateInput;
}

export { UpdateTextsLabelsArgs as UpdateTextsLabelsArgs };
