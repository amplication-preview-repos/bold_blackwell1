import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";
import { VideoMetricsUpdateManyWithoutOrdersItemsInput } from "./VideoMetricsUpdateManyWithoutOrdersItemsInput";

export type OrdersUpdateInput = {
  account?: AccountsWhereUniqueInput | null;
  phone?: PhonesWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
  videoMetricsItems?: VideoMetricsUpdateManyWithoutOrdersItemsInput;
};
