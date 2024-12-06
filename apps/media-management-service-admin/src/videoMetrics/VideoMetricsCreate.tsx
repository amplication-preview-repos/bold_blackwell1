import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrdersTitle } from "../orders/OrdersTitle";

export const VideoMetricsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Comments" source="comments" />
        <NumberInput step={1} label="Likes" source="likes" />
        <ReferenceInput source="order.id" reference="Orders" label="Order">
          <SelectInput optionText={OrdersTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Saves" source="saves" />
        <NumberInput step={1} label="Shares" source="shares" />
        <NumberInput step={1} label="Views" source="views" />
      </SimpleForm>
    </Create>
  );
};
