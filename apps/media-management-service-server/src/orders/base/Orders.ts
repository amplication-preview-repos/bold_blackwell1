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
import { Accounts } from "../../accounts/base/Accounts";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Phones } from "../../phones/base/Phones";
import { Texts } from "../../texts/base/Texts";
import { VideoMetrics } from "../../videoMetrics/base/VideoMetrics";

@ObjectType()
class Orders {
  @ApiProperty({
    required: false,
    type: () => Accounts,
  })
  @ValidateNested()
  @Type(() => Accounts)
  @IsOptional()
  account?: Accounts | null;

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
    type: () => Phones,
  })
  @ValidateNested()
  @Type(() => Phones)
  @IsOptional()
  phone?: Phones | null;

  @ApiProperty({
    required: false,
    type: () => Texts,
  })
  @ValidateNested()
  @Type(() => Texts)
  @IsOptional()
  text?: Texts | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [VideoMetrics],
  })
  @ValidateNested()
  @Type(() => VideoMetrics)
  @IsOptional()
  videoMetricsItems?: Array<VideoMetrics>;
}

export { Orders as Orders };
