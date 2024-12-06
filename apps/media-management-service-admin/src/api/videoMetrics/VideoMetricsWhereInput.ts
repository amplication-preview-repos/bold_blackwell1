import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrdersWhereUniqueInput } from "../orders/OrdersWhereUniqueInput";

export type VideoMetricsWhereInput = {
  comments?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  order?: OrdersWhereUniqueInput;
  saves?: IntNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
};
