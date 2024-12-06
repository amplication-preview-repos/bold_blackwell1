/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClientsBooksWhereUniqueInput } from "../../clientsBooks/base/ClientsBooksWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClientsBooksUpdateManyWithoutClientsItemsInput {
  @Field(() => [ClientsBooksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsBooksWhereUniqueInput],
  })
  connect?: Array<ClientsBooksWhereUniqueInput>;

  @Field(() => [ClientsBooksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsBooksWhereUniqueInput],
  })
  disconnect?: Array<ClientsBooksWhereUniqueInput>;

  @Field(() => [ClientsBooksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsBooksWhereUniqueInput],
  })
  set?: Array<ClientsBooksWhereUniqueInput>;
}

export { ClientsBooksUpdateManyWithoutClientsItemsInput as ClientsBooksUpdateManyWithoutClientsItemsInput };
