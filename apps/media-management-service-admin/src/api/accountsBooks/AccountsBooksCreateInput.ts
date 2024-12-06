import { AccountsWhereUniqueInput } from "../accounts/AccountsWhereUniqueInput";
import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";

export type AccountsBooksCreateInput = {
  account?: AccountsWhereUniqueInput | null;
  book?: BooksWhereUniqueInput | null;
};
