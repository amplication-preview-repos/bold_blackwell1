import { AccountsBooksUpdateManyWithoutAccountsItemsInput } from "./AccountsBooksUpdateManyWithoutAccountsItemsInput";
import { OrdersUpdateManyWithoutAccountsItemsInput } from "./OrdersUpdateManyWithoutAccountsItemsInput";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";

export type AccountsUpdateInput = {
  accountsBooksItems?: AccountsBooksUpdateManyWithoutAccountsItemsInput;
  accountsName?: string | null;
  followers?: number | null;
  ordersItems?: OrdersUpdateManyWithoutAccountsItemsInput;
  phone?: PhonesWhereUniqueInput | null;
  profilePicture?: string | null;
  totalLikes?: number | null;
};
