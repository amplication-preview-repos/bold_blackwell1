import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AccountsTitle } from "../accounts/AccountsTitle";
import { CrewTitle } from "../crew/CrewTitle";
import { OrdersTitle } from "../orders/OrdersTitle";

export const PhonesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="accountsItems" reference="Accounts">
          <SelectArrayInput
            optionText={AccountsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="crew.id" reference="Crew" label="Crew">
          <SelectInput optionText={CrewTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="ordersItems" reference="Orders">
          <SelectArrayInput
            optionText={OrdersTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
