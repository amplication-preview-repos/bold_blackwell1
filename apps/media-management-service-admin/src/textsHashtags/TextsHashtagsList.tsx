import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HASHTAGS_TITLE_FIELD } from "../hashtags/HashtagsTitle";
import { TEXTS_TITLE_FIELD } from "../texts/TextsTitle";

export const TextsHashtagsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TextsHashtagsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
