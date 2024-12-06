import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type ClientsBooksUpdateInput = {
  book?: BooksWhereUniqueInput | null;
  client?: ClientsWhereUniqueInput | null;
};
