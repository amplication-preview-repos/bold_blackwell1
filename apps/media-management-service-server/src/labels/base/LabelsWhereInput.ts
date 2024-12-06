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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoundsLabelsListRelationFilter } from "../../soundsLabels/base/SoundsLabelsListRelationFilter";
import { TextsLabelsListRelationFilter } from "../../textsLabels/base/TextsLabelsListRelationFilter";

@InputType()
class LabelsWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SoundsLabelsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SoundsLabelsListRelationFilter)
  @IsOptional()
  @Field(() => SoundsLabelsListRelationFilter, {
    nullable: true,
  })
  soundsLabelsItems?: SoundsLabelsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TextsLabelsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TextsLabelsListRelationFilter)
  @IsOptional()
  @Field(() => TextsLabelsListRelationFilter, {
    nullable: true,
  })
  textsLabelsItems?: TextsLabelsListRelationFilter;
}

export { LabelsWhereInput as LabelsWhereInput };
