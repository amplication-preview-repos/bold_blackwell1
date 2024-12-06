import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORDERS_TITLE_FIELD } from "../orders/OrdersTitle";

export const VideoMetricsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
