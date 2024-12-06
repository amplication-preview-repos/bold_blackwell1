import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PHONES_TITLE_FIELD } from "./PhonesTitle";
import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";
import { CREW_TITLE_FIELD } from "../crew/CrewTitle";

export const PhonesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Crew" source="crew.id" reference="Crew">
          <TextField source={CREW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Accounts"
          target="phoneId"
          label="AccountsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Orders"
          target="phoneId"
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
