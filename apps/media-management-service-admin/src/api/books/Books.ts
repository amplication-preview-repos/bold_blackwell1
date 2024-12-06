import { AccountsBooks } from "../accountsBooks/AccountsBooks";
import { ClientsBooks } from "../clientsBooks/ClientsBooks";
import { Texts } from "../texts/Texts";

export type Books = {
  accountsBooksItems?: Array<AccountsBooks>;
  clientsBooksItems?: Array<ClientsBooks>;
  createdAt: Date;
  id: string;
  name: string | null;
  textsItems?: Array<Texts>;
  updatedAt: Date;
};
