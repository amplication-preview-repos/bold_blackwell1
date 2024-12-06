import { ClientsBooks } from "../clientsBooks/ClientsBooks";

export type Clients = {
  clientsBooksItems?: Array<ClientsBooks>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
