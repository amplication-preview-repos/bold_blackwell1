import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LABELS_TITLE_FIELD } from "../labels/LabelsTitle";
import { SOUNDS_TITLE_FIELD } from "../sounds/SoundsTitle";

export const SoundsLabelsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Label" source="labels.id" reference="Labels">
          <TextField source={LABELS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Sound" source="sounds.id" reference="Sounds">
          <TextField source={SOUNDS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
