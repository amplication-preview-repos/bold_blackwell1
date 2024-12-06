import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { CaptionsCreateNestedManyWithoutTextsItemsInput } from "./CaptionsCreateNestedManyWithoutTextsItemsInput";
import { OrdersCreateNestedManyWithoutTextsItemsInput } from "./OrdersCreateNestedManyWithoutTextsItemsInput";
import { TextsHashtagsCreateNestedManyWithoutTextsItemsInput } from "./TextsHashtagsCreateNestedManyWithoutTextsItemsInput";
import { TextsLabelsCreateNestedManyWithoutTextsItemsInput } from "./TextsLabelsCreateNestedManyWithoutTextsItemsInput";

export type TextsCreateInput = {
  book?: BooksWhereUniqueInput | null;
  captionsItems?: CaptionsCreateNestedManyWithoutTextsItemsInput;
  name?: string | null;
  ordersItems?: OrdersCreateNestedManyWithoutTextsItemsInput;
  textsHashtagsItems?: TextsHashtagsCreateNestedManyWithoutTextsItemsInput;
  textsLabelsItems?: TextsLabelsCreateNestedManyWithoutTextsItemsInput;
};
