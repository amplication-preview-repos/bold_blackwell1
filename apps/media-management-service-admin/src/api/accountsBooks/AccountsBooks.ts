import { Accounts } from "../accounts/Accounts";
import { Books } from "../books/Books";

export type AccountsBooks = {
  account?: Accounts | null;
  book?: Books | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
