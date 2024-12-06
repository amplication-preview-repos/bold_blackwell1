import { AccountsBooksCreateNestedManyWithoutBooksItemsInput } from "./AccountsBooksCreateNestedManyWithoutBooksItemsInput";
import { ClientsBooksCreateNestedManyWithoutBooksItemsInput } from "./ClientsBooksCreateNestedManyWithoutBooksItemsInput";
import { TextsCreateNestedManyWithoutBooksItemsInput } from "./TextsCreateNestedManyWithoutBooksItemsInput";

export type BooksCreateInput = {
  accountsBooksItems?: AccountsBooksCreateNestedManyWithoutBooksItemsInput;
  clientsBooksItems?: ClientsBooksCreateNestedManyWithoutBooksItemsInput;
  name?: string | null;
  textsItems?: TextsCreateNestedManyWithoutBooksItemsInput;
};
