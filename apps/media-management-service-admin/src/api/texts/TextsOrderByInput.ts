import { SortOrder } from "../../util/SortOrder";

export type TextsOrderByInput = {
  bookId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
