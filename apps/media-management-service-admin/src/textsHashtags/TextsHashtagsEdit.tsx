import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HashtagsTitle } from "../hashtags/HashtagsTitle";
import { TextsTitle } from "../texts/TextsTitle";

export const TextsHashtagsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="hashtag.id"
          reference="Hashtags"
          label="Hashtag"
        >
          <SelectInput optionText={HashtagsTitle} />
        </ReferenceInput>
        <ReferenceInput source="text.id" reference="Texts" label="Text">
          <SelectInput optionText={TextsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
