import { Books } from "../books/Books";
import { Clients } from "../clients/Clients";

export type ClientsBooks = {
  book?: Books | null;
  client?: Clients | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
