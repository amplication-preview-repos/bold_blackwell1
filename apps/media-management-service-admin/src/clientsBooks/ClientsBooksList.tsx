import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKS_TITLE_FIELD } from "../books/BooksTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";

export const ClientsBooksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClientsBooksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Book" source="books.id" reference="Books">
          <TextField source={BOOKS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Client" source="clients.id" reference="Clients">
          <TextField source={CLIENTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
