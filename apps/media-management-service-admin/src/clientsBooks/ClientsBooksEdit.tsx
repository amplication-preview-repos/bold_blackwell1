import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BooksTitle } from "../books/BooksTitle";
import { ClientsTitle } from "../clients/ClientsTitle";

export const ClientsBooksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Books" label="Book">
          <SelectInput optionText={BooksTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
