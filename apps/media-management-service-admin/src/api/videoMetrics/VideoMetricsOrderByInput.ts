import { SortOrder } from "../../util/SortOrder";

export type VideoMetricsOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  orderId?: SortOrder;
  saves?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
