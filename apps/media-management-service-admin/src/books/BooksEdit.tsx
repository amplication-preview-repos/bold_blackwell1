import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AccountsBooksTitle } from "../accountsBooks/AccountsBooksTitle";
import { ClientsBooksTitle } from "../clientsBooks/ClientsBooksTitle";
import { TextsTitle } from "../texts/TextsTitle";

export const BooksEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="clientsBooksItems"
          reference="ClientsBooks"
        >
          <SelectArrayInput
            optionText={ClientsBooksTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="textsItems" reference="Texts">
          <SelectArrayInput
            optionText={TextsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
