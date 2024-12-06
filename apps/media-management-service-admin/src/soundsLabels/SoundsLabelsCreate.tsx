import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LabelsTitle } from "../labels/LabelsTitle";
import { SoundsTitle } from "../sounds/SoundsTitle";

export const SoundsLabelsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="label.id" reference="Labels" label="Label">
          <SelectInput optionText={LabelsTitle} />
        </ReferenceInput>
        <ReferenceInput source="sound.id" reference="Sounds" label="Sound">
          <SelectInput optionText={SoundsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
