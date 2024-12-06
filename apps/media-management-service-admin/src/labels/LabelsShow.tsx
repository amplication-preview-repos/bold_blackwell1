import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LABELS_TITLE_FIELD } from "./LabelsTitle";
import { SOUNDS_TITLE_FIELD } from "../sounds/SoundsTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const LabelsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SoundsLabels"
          target="labelId"
          label="SoundsLabelsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Label" source="labels.id" reference="Labels">
              <TextField source={LABELS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sound" source="sounds.id" reference="Sounds">
              <TextField source={SOUNDS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TextsLabels"
          target="labelId"
          label="TextsLabelsItems"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
