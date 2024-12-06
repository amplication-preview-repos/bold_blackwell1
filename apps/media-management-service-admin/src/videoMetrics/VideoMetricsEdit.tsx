import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrdersTitle } from "../orders/OrdersTitle";

export const VideoMetricsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
