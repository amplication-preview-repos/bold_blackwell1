import { BooksWhereUniqueInput } from "./BooksWhereUniqueInput";
import { BooksUpdateInput } from "./BooksUpdateInput";

export type UpdateBooksArgs = {
  where: BooksWhereUniqueInput;
  data: BooksUpdateInput;
};
