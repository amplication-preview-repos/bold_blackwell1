import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { BOOKS_TITLE_FIELD } from "../books/BooksTitle";

export const AccountsBooksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountsBooksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
