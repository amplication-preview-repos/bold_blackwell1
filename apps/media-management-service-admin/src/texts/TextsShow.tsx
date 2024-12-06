import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEXTS_TITLE_FIELD } from "./TextsTitle";
import { ACCOUNTS_TITLE_FIELD } from "../accounts/AccountsTitle";
import { PHONES_TITLE_FIELD } from "../phones/PhonesTitle";
import { HASHTAGS_TITLE_FIELD } from "../hashtags/HashtagsTitle";
import { LABELS_TITLE_FIELD } from "../labels/LabelsTitle";
import { BOOKS_TITLE_FIELD } from "../books/BooksTitle";

export const TextsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Book" source="books.id" reference="Books">
          <TextField source={BOOKS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Captions"
          target="textId"
          label="CaptionsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Text" source="texts.id" reference="Texts">
              <TextField source={TEXTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Orders"
          target="textId"
          label="OrdersItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="accounts.id"
              reference="Accounts"
            >
              <TextField source={ACCOUNTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Phone" source="phones.id" reference="Phones">
              <TextField source={PHONES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Text" source="texts.id" reference="Texts">
              <TextField source={TEXTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TextsHashtags"
          target="textId"
          label="TextsHashtagsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TextsLabels"
          target="textId"
          label="TextsLabelsItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Label" source="labels.id" reference="Labels">
              <TextField source={LABELS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Text" source="texts.id" reference="Texts">
              <TextField source={TEXTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
