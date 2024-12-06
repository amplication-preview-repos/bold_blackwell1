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
import { BooksWhereUniqueInput } from "../../books/base/BooksWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { CaptionsCreateNestedManyWithoutTextsItemsInput } from "./CaptionsCreateNestedManyWithoutTextsItemsInput";
import { OrdersCreateNestedManyWithoutTextsItemsInput } from "./OrdersCreateNestedManyWithoutTextsItemsInput";
import { TextsHashtagsCreateNestedManyWithoutTextsItemsInput } from "./TextsHashtagsCreateNestedManyWithoutTextsItemsInput";
import { TextsLabelsCreateNestedManyWithoutTextsItemsInput } from "./TextsLabelsCreateNestedManyWithoutTextsItemsInput";

@InputType()
class TextsCreateInput {
  @ApiProperty({
    required: false,
    type: () => BooksWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BooksWhereUniqueInput)
  @IsOptional()
  @Field(() => BooksWhereUniqueInput, {
    nullable: true,
  })
  book?: BooksWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CaptionsCreateNestedManyWithoutTextsItemsInput,
  })
  @ValidateNested()
  @Type(() => CaptionsCreateNestedManyWithoutTextsItemsInput)
  @IsOptional()
  @Field(() => CaptionsCreateNestedManyWithoutTextsItemsInput, {
    nullable: true,
  })
  captionsItems?: CaptionsCreateNestedManyWithoutTextsItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrdersCreateNestedManyWithoutTextsItemsInput,
  })
  @ValidateNested()
  @Type(() => OrdersCreateNestedManyWithoutTextsItemsInput)
  @IsOptional()
  @Field(() => OrdersCreateNestedManyWithoutTextsItemsInput, {
    nullable: true,
  })
  ordersItems?: OrdersCreateNestedManyWithoutTextsItemsInput;

  @ApiProperty({
    required: false,
    type: () => TextsHashtagsCreateNestedManyWithoutTextsItemsInput,
  })
  @ValidateNested()
  @Type(() => TextsHashtagsCreateNestedManyWithoutTextsItemsInput)
  @IsOptional()
  @Field(() => TextsHashtagsCreateNestedManyWithoutTextsItemsInput, {
    nullable: true,
  })
  textsHashtagsItems?: TextsHashtagsCreateNestedManyWithoutTextsItemsInput;

  @ApiProperty({
    required: false,
    type: () => TextsLabelsCreateNestedManyWithoutTextsItemsInput,
  })
  @ValidateNested()
  @Type(() => TextsLabelsCreateNestedManyWithoutTextsItemsInput)
  @IsOptional()
  @Field(() => TextsLabelsCreateNestedManyWithoutTextsItemsInput, {
    nullable: true,
  })
  textsLabelsItems?: TextsLabelsCreateNestedManyWithoutTextsItemsInput;
}

export { TextsCreateInput as TextsCreateInput };
