import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";
import { VideoMetricsListRelationFilter } from "../videoMetrics/VideoMetricsListRelationFilter";

export type OrdersWhereInput = {
  account?: AccountsWhereUniqueInput;
  id?: StringFilter;
  phone?: PhonesWhereUniqueInput;
  text?: TextsWhereUniqueInput;
  videoMetricsItems?: VideoMetricsListRelationFilter;
};
