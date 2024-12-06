import { SortOrder } from "../../util/SortOrder";

export type BooksOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
