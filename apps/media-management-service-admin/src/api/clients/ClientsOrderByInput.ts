import { SortOrder } from "../../util/SortOrder";

export type ClientsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
