import { BooksWhereInput } from "./BooksWhereInput";
import { BooksOrderByInput } from "./BooksOrderByInput";

export type BooksFindManyArgs = {
  where?: BooksWhereInput;
  orderBy?: Array<BooksOrderByInput>;
  skip?: number;
  take?: number;
};
