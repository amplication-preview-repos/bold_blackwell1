import { AccountsBooks } from "../accountsBooks/AccountsBooks";
import { Orders } from "../orders/Orders";
import { Phones } from "../phones/Phones";

export type Accounts = {
  accountsBooksItems?: Array<AccountsBooks>;
  accountsName: string | null;
  createdAt: Date;
  followers: number | null;
  id: string;
  ordersItems?: Array<Orders>;
  phone?: Phones | null;
  profilePicture: string | null;
  totalLikes: number | null;
  updatedAt: Date;
};
