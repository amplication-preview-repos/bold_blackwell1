import { SortOrder } from "../../util/SortOrder";

export type AccountsBooksOrderByInput = {
  accountId?: SortOrder;
  bookId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
