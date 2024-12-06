import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LabelsTitle } from "../labels/LabelsTitle";
import { TextsTitle } from "../texts/TextsTitle";

export const TextsLabelsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="label.id" reference="Labels" label="Label">
          <SelectInput optionText={LabelsTitle} />
        </ReferenceInput>
        <ReferenceInput source="text.id" reference="Texts" label="Text">
          <SelectInput optionText={TextsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
