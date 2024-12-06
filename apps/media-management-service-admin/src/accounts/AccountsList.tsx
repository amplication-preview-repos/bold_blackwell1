import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PHONES_TITLE_FIELD } from "../phones/PhonesTitle";

export const AccountsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
