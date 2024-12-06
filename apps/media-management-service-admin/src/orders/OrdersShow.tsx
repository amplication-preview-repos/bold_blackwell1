import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDERS_TITLE_FIELD } from "./OrdersTitle";
import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { PHONES_TITLE_FIELD } from "../phones/PhonesTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const OrdersShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Phone" source="phones.id" reference="Phones">
          <TextField source={PHONES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Text" source="texts.id" reference="Texts">
          <TextField source={TEXTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="VideoMetrics"
          target="orderId"
          label="VideoMetricsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Likes" source="likes" />
            <ReferenceField label="Order" source="orders.id" reference="Orders">
              <TextField source={ORDERS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Saves" source="saves" />
            <TextField label="Shares" source="shares" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Views" source="views" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
