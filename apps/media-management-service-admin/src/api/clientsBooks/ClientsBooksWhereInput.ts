import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ClientsBooksWhereInput = {
  book?: BooksWhereUniqueInput;
  client?: ClientsWhereUniqueInput;
  id?: StringFilter;
};
