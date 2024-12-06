import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";

export type AccountsBooksUpdateInput = {
  account?: AccountsWhereUniqueInput | null;
  book?: BooksWhereUniqueInput | null;
};
