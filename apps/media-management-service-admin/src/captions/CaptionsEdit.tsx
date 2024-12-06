import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TextsTitle } from "../texts/TextsTitle";

export const CaptionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="text.id" reference="Texts" label="Text">
          <SelectInput optionText={TextsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
