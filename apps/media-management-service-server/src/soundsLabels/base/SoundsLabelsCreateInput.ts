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
import { LabelsWhereUniqueInput } from "../../labels/base/LabelsWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SoundsWhereUniqueInput } from "../../sounds/base/SoundsWhereUniqueInput";

@InputType()
class SoundsLabelsCreateInput {
  @ApiProperty({
    required: false,
    type: () => LabelsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LabelsWhereUniqueInput)
  @IsOptional()
  @Field(() => LabelsWhereUniqueInput, {
    nullable: true,
  })
  label?: LabelsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SoundsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SoundsWhereUniqueInput)
  @IsOptional()
  @Field(() => SoundsWhereUniqueInput, {
    nullable: true,
  })
  sound?: SoundsWhereUniqueInput | null;
}

export { SoundsLabelsCreateInput as SoundsLabelsCreateInput };