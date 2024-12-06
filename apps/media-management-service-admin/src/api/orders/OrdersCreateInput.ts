import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";
import { VideoMetricsCreateNestedManyWithoutOrdersItemsInput } from "./VideoMetricsCreateNestedManyWithoutOrdersItemsInput";

export type OrdersCreateInput = {
  account?: AccountsWhereUniqueInput | null;
  phone?: PhonesWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
  videoMetricsItems?: VideoMetricsCreateNestedManyWithoutOrdersItemsInput;
};
