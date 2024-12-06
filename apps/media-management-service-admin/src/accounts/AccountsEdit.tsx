import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountsBooksTitle } from "../accountsBooks/AccountsBooksTitle";
import { OrdersTitle } from "../orders/OrdersTitle";
import { PhonesTitle } from "../phones/PhonesTitle";

export const AccountsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountsBooksItems"
          reference="AccountsBooks"
        >
          <SelectArrayInput
            optionText={AccountsBooksTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="AccountsName" source="accountsName" />
        <NumberInput step={1} label="Followers" source="followers" />
        <ReferenceArrayInput source="ordersItems" reference="Orders">
          <SelectArrayInput
            optionText={OrdersTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="phone.id" reference="Phones" label="Phone">
          <SelectInput optionText={PhonesTitle} />
        </ReferenceInput>
        <TextInput label="ProfilePicture" multiline source="profilePicture" />
        <NumberInput step={1} label="TotalLikes" source="totalLikes" />
      </SimpleForm>
    </Edit>
  );
};
