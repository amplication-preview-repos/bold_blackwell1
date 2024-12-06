/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccountsWhereUniqueInput } from "../../accounts/base/AccountsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccountsUpdateManyWithoutPhonesItemsInput {
  @Field(() => [AccountsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountsWhereUniqueInput],
  })
  connect?: Array<AccountsWhereUniqueInput>;

  @Field(() => [AccountsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountsWhereUniqueInput],
  })
  disconnect?: Array<AccountsWhereUniqueInput>;

  @Field(() => [AccountsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountsWhereUniqueInput],
  })
  set?: Array<AccountsWhereUniqueInput>;
}

export { AccountsUpdateManyWithoutPhonesItemsInput as AccountsUpdateManyWithoutPhonesItemsInput };
