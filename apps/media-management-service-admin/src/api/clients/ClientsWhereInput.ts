import { ClientsBooksListRelationFilter } from "../clientsBooks/ClientsBooksListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClientsWhereInput = {
  clientsBooksItems?: ClientsBooksListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
