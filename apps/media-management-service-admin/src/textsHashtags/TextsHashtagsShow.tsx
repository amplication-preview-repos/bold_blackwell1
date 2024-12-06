import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { HASHTAGS_TITLE_FIELD } from "../hashtags/HashtagsTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const TextsHashtagsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Hashtag"
          source="hashtags.id"
          reference="Hashtags"
        >
          <TextField source={HASHTAGS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Text" source="texts.id" reference="Texts">
          <TextField source={TEXTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
