import { AccountsCreateNestedManyWithoutPhonesItemsInput } from "./AccountsCreateNestedManyWithoutPhonesItemsInput";
import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { OrdersCreateNestedManyWithoutPhonesItemsInput } from "./OrdersCreateNestedManyWithoutPhonesItemsInput";

export type PhonesCreateInput = {
  accountsItems?: AccountsCreateNestedManyWithoutPhonesItemsInput;
  crew?: CrewWhereUniqueInput | null;
  name?: string | null;
  ordersItems?: OrdersCreateNestedManyWithoutPhonesItemsInput;
};
