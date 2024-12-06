import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTS_TITLE_FIELD } from "./AccountsTitle";
import { BOOKS_TITLE_FIELD } from "../books/BooksTitle";
import { PHONES_TITLE_FIELD } from "../phones/PhonesTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const AccountsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AccountsName" source="accountsName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Followers" source="followers" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Phone" source="phones.id" reference="Phones">
          <TextField source={PHONES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ProfilePicture" source="profilePicture" />
        <TextField label="TotalLikes" source="totalLikes" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountsBooks"
          target="accountId"
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
          reference="Orders"
          target="accountId"
          label="OrdersItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="accounts.id"
              reference="Accounts"
            >
              <TextField source={ACCOUNTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Phone" source="phones.id" reference="Phones">
              <TextField source={PHONES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Text" source="texts.id" reference="Texts">
              <TextField source={TEXTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
