import { AccountsBooksListRelationFilter } from "../accountsBooks/AccountsBooksListRelationFilter";
import { ClientsBooksListRelationFilter } from "../clientsBooks/ClientsBooksListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TextsListRelationFilter } from "../texts/TextsListRelationFilter";

export type BooksWhereInput = {
  accountsBooksItems?: AccountsBooksListRelationFilter;
  clientsBooksItems?: ClientsBooksListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  textsItems?: TextsListRelationFilter;
};
