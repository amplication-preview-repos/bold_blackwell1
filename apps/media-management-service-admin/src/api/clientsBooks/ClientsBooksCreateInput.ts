import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type ClientsBooksCreateInput = {
  book?: BooksWhereUniqueInput | null;
  client?: ClientsWhereUniqueInput | null;
};
