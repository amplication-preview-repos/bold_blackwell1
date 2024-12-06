/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Labels } from "../../labels/base/Labels";
import { Sounds } from "../../sounds/base/Sounds";

@ObjectType()
class SoundsLabels {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Labels,
  })
  @ValidateNested()
  @Type(() => Labels)
  @IsOptional()
  label?: Labels | null;

  @ApiProperty({
    required: false,
    type: () => Sounds,
  })
  @ValidateNested()
  @Type(() => Sounds)
  @IsOptional()
  sound?: Sounds | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SoundsLabels as SoundsLabels };
