import { AccountsUpdateManyWithoutPhonesItemsInput } from "./AccountsUpdateManyWithoutPhonesItemsInput";
import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { OrdersUpdateManyWithoutPhonesItemsInput } from "./OrdersUpdateManyWithoutPhonesItemsInput";

export type PhonesUpdateInput = {
  accountsItems?: AccountsUpdateManyWithoutPhonesItemsInput;
  crew?: CrewWhereUniqueInput | null;
  name?: string | null;
  ordersItems?: OrdersUpdateManyWithoutPhonesItemsInput;
};
