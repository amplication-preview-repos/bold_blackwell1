import { AccountsBooksListRelationFilter } from "../accountsBooks/AccountsBooksListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";
import { PhonesWhereUniqueInput } from "../phones/PhonesWhereUniqueInput";

export type AccountsWhereInput = {
  accountsBooksItems?: AccountsBooksListRelationFilter;
  accountsName?: StringNullableFilter;
  followers?: IntNullableFilter;
  id?: StringFilter;
  ordersItems?: OrdersListRelationFilter;
  phone?: PhonesWhereUniqueInput;
  profilePicture?: StringNullableFilter;
  totalLikes?: IntNullableFilter;
};
