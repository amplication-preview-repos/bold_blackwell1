import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BooksTitle } from "../books/BooksTitle";
import { CaptionsTitle } from "../captions/CaptionsTitle";
import { OrdersTitle } from "../orders/OrdersTitle";
import { TextsHashtagsTitle } from "../textsHashtags/TextsHashtagsTitle";
import { TextsLabelsTitle } from "../textsLabels/TextsLabelsTitle";

export const TextsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Books" label="Book">
          <SelectInput optionText={BooksTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="captionsItems" reference="Captions">
          <SelectArrayInput
            optionText={CaptionsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" multiline source="name" />
        <ReferenceArrayInput source="ordersItems" reference="Orders">
          <SelectArrayInput
            optionText={OrdersTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <ReferenceArrayInput source="textsLabelsItems" reference="TextsLabels">
          <SelectArrayInput
            optionText={TextsLabelsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
