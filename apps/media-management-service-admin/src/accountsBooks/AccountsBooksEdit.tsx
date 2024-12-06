import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountsTitle } from "../accounts/AccountsTitle";
import { BooksTitle } from "../books/BooksTitle";

export const AccountsBooksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
