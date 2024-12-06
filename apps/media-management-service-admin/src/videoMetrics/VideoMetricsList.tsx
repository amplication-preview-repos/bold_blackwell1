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
import { ORDERS_TITLE_FIELD } from "../orders/OrdersTitle";

export const VideoMetricsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"VideoMetricsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Views" source="views" />{" "}
      </Datagrid>
    </List>
  );
};
