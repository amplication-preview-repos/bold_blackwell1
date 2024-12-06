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
import { PHONES_TITLE_FIELD } from "../phones/PhonesTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const OrdersList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"OrdersItems"}
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Phone" source="phones.id" reference="Phones">
          <TextField source={PHONES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Text" source="texts.id" reference="Texts">
          <TextField source={TEXTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
