import { ClientsBooks as TClientsBooks } from "../api/clientsBooks/ClientsBooks";

export const CLIENTSBOOKS_TITLE_FIELD = "id";

export const ClientsBooksTitle = (record: TClientsBooks): string => {
  return record.id?.toString() || String(record.id);
};
