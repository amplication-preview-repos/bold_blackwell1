import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LABELS_TITLE_FIELD } from "../labels/LabelsTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const TextsLabelsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TextsLabelsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Label" source="labels.id" reference="Labels">
          <TextField source={LABELS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Text" source="texts.id" reference="Texts">
          <TextField source={TEXTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
