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
import { CaptionsWhereInput } from "./CaptionsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CaptionsCountArgs {
  @ApiProperty({
    required: false,
    type: () => CaptionsWhereInput,
  })
  @Field(() => CaptionsWhereInput, { nullable: true })
  @Type(() => CaptionsWhereInput)
  where?: CaptionsWhereInput;
}

export { CaptionsCountArgs as CaptionsCountArgs };
