import { AccountsListRelationFilter } from "../accounts/AccountsListRelationFilter";
import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";

export type PhonesWhereInput = {
  accountsItems?: AccountsListRelationFilter;
  crew?: CrewWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  ordersItems?: OrdersListRelationFilter;
};
