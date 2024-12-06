import { Accounts } from "../accounts/Accounts";
import { Crew } from "../crew/Crew";
import { Orders } from "../orders/Orders";

export type Phones = {
  accountsItems?: Array<Accounts>;
  createdAt: Date;
  crew?: Crew | null;
  id: string;
  name: string | null;
  ordersItems?: Array<Orders>;
  updatedAt: Date;
};
