import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { CaptionsUpdateManyWithoutTextsItemsInput } from "./CaptionsUpdateManyWithoutTextsItemsInput";
import { OrdersUpdateManyWithoutTextsItemsInput } from "./OrdersUpdateManyWithoutTextsItemsInput";
import { TextsHashtagsUpdateManyWithoutTextsItemsInput } from "./TextsHashtagsUpdateManyWithoutTextsItemsInput";
import { TextsLabelsUpdateManyWithoutTextsItemsInput } from "./TextsLabelsUpdateManyWithoutTextsItemsInput";

export type TextsUpdateInput = {
  book?: BooksWhereUniqueInput | null;
  captionsItems?: CaptionsUpdateManyWithoutTextsItemsInput;
  name?: string | null;
  ordersItems?: OrdersUpdateManyWithoutTextsItemsInput;
  textsHashtagsItems?: TextsHashtagsUpdateManyWithoutTextsItemsInput;
  textsLabelsItems?: TextsLabelsUpdateManyWithoutTextsItemsInput;
};
