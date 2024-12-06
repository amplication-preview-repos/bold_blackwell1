import { AccountsBooksUpdateManyWithoutBooksItemsInput } from "./AccountsBooksUpdateManyWithoutBooksItemsInput";
import { ClientsBooksUpdateManyWithoutBooksItemsInput } from "./ClientsBooksUpdateManyWithoutBooksItemsInput";
import { TextsUpdateManyWithoutBooksItemsInput } from "./TextsUpdateManyWithoutBooksItemsInput";

export type BooksUpdateInput = {
  accountsBooksItems?: AccountsBooksUpdateManyWithoutBooksItemsInput;
  clientsBooksItems?: ClientsBooksUpdateManyWithoutBooksItemsInput;
  name?: string | null;
  textsItems?: TextsUpdateManyWithoutBooksItemsInput;
};
