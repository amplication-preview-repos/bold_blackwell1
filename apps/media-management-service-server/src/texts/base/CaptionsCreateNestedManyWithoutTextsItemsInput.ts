/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CaptionsWhereUniqueInput } from "../../captions/base/CaptionsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CaptionsCreateNestedManyWithoutTextsItemsInput {
  @Field(() => [CaptionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CaptionsWhereUniqueInput],
  })
  connect?: Array<CaptionsWhereUniqueInput>;
}

export { CaptionsCreateNestedManyWithoutTextsItemsInput as CaptionsCreateNestedManyWithoutTextsItemsInput };
