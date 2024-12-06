import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountsTitle } from "../accounts/AccountsTitle";
import { BooksTitle } from "../books/BooksTitle";

export const AccountsBooksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Accounts"
          label="Account"
        >
          <SelectInput optionText={AccountsTitle} />
        </ReferenceInput>
        <ReferenceInput source="book.id" reference="Books" label="Book">
          <SelectInput optionText={BooksTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
