import { OrdersWhereUniqueInput } from "../orders/OrdersWhereUniqueInput";

export type VideoMetricsCreateInput = {
  comments?: number | null;
  likes?: number | null;
  order?: OrdersWhereUniqueInput | null;
  saves?: number | null;
  shares?: number | null;
  views?: number | null;
};
