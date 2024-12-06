import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LabelsTitle } from "../labels/LabelsTitle";
import { SoundsTitle } from "../sounds/SoundsTitle";

export const SoundsLabelsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="label.id" reference="Labels" label="Label">
          <SelectInput optionText={LabelsTitle} />
        </ReferenceInput>
        <ReferenceInput source="sound.id" reference="Sounds" label="Sound">
          <SelectInput optionText={SoundsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
