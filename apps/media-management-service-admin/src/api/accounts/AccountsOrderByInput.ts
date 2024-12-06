import { SortOrder } from "../../util/SortOrder";

export type AccountsOrderByInput = {
  accountsName?: SortOrder;
  createdAt?: SortOrder;
  followers?: SortOrder;
  id?: SortOrder;
  phoneId?: SortOrder;
  profilePicture?: SortOrder;
  totalLikes?: SortOrder;
  updatedAt?: SortOrder;
};
