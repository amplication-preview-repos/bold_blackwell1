import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AccountsBooksWhereInput = {
  account?: AccountsWhereUniqueInput;
  book?: BooksWhereUniqueInput;
  id?: StringFilter;
};
