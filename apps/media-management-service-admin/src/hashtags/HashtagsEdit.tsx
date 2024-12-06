import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TextsHashtagsTitle } from "../textsHashtags/TextsHashtagsTitle";

export const HashtagsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hashtag" source="hashtag" />
        <ReferenceArrayInput
          source="textsHashtagsItems"
          reference="TextsHashtags"
        >
          <SelectArrayInput
            optionText={TextsHashtagsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
