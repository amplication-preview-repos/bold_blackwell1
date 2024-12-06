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
import { HashtagsWhereInput } from "./HashtagsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HashtagsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HashtagsWhereInput,
  })
  @ValidateNested()
  @Type(() => HashtagsWhereInput)
  @IsOptional()
  @Field(() => HashtagsWhereInput, {
    nullable: true,
  })
  every?: HashtagsWhereInput;

  @ApiProperty({
    required: false,
    type: () => HashtagsWhereInput,
  })
  @ValidateNested()
  @Type(() => HashtagsWhereInput)
  @IsOptional()
  @Field(() => HashtagsWhereInput, {
    nullable: true,
  })
  some?: HashtagsWhereInput;

  @ApiProperty({
    required: false,
    type: () => HashtagsWhereInput,
  })
  @ValidateNested()
  @Type(() => HashtagsWhereInput)
  @IsOptional()
  @Field(() => HashtagsWhereInput, {
    nullable: true,
  })
  none?: HashtagsWhereInput;
}
export { HashtagsListRelationFilter as HashtagsListRelationFilter };
