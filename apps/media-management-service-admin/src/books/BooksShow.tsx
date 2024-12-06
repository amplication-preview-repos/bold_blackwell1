import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { BOOKS_TITLE_FIELD } from "./BooksTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";

export const BooksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountsBooks"
          target="bookId"
          label="AccountsBooksItems"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ClientsBooks"
          target="bookId"
          label="ClientsBooksItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Book" source="books.id" reference="Books">
              <TextField source={BOOKS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="clients.id"
              reference="Clients"
            >
              <TextField source={CLIENTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Texts"
          target="bookId"
          label="TextsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Book" source="books.id" reference="Books">
              <TextField source={BOOKS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
