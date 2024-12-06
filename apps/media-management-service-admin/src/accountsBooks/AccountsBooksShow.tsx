import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { BOOKS_TITLE_FIELD } from "../books/BooksTitle";

export const AccountsBooksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Account"
          source="accounts.id"
          reference="Accounts"
        >
          <TextField source={ACCOUNTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Book" source="books.id" reference="Books">
          <TextField source={BOOKS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
