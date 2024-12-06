import { SortOrder } from "../../util/SortOrder";

export type ClientsBooksOrderByInput = {
  bookId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
