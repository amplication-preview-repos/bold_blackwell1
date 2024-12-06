import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HashtagsTitle } from "../hashtags/HashtagsTitle";
import { TextsTitle } from "../texts/TextsTitle";

export const TextsHashtagsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
