import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BooksTitle } from "../books/BooksTitle";
import { ClientsTitle } from "../clients/ClientsTitle";

export const ClientsBooksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Books" label="Book">
          <SelectInput optionText={BooksTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
