import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LabelsTitle } from "../labels/LabelsTitle";
import { TextsTitle } from "../texts/TextsTitle";

export const TextsLabelsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="label.id" reference="Labels" label="Label">
          <SelectInput optionText={LabelsTitle} />
        </ReferenceInput>
        <ReferenceInput source="text.id" reference="Texts" label="Text">
          <SelectInput optionText={TextsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
