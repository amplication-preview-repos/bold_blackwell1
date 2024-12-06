import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TextsHashtagsTitle } from "../textsHashtags/TextsHashtagsTitle";

export const HashtagsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
