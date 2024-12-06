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
import { TextsLabelsWhereInput } from "./TextsLabelsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TextsLabelsOrderByInput } from "./TextsLabelsOrderByInput";

@ArgsType()
class TextsLabelsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TextsLabelsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TextsLabelsWhereInput, { nullable: true })
  @Type(() => TextsLabelsWhereInput)
  where?: TextsLabelsWhereInput;

  @ApiProperty({
    required: false,
    type: [TextsLabelsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TextsLabelsOrderByInput], { nullable: true })
  @Type(() => TextsLabelsOrderByInput)
  orderBy?: Array<TextsLabelsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TextsLabelsFindManyArgs as TextsLabelsFindManyArgs };
