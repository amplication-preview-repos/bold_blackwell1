import { AccountsBooksCreateNestedManyWithoutAccountsItemsInput } from "./AccountsBooksCreateNestedManyWithoutAccountsItemsInput";
import { OrdersCreateNestedManyWithoutAccountsItemsInput } from "./OrdersCreateNestedManyWithoutAccountsItemsInput";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";

export type AccountsCreateInput = {
  accountsBooksItems?: AccountsBooksCreateNestedManyWithoutAccountsItemsInput;
  accountsName?: string | null;
  followers?: number | null;
  ordersItems?: OrdersCreateNestedManyWithoutAccountsItemsInput;
  phone?: PhonesWhereUniqueInput | null;
  profilePicture?: string | null;
  totalLikes?: number | null;
};
