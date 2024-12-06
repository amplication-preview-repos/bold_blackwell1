import { BooksWhereUniqueInput } from "../books/BooksWhereUniqueInput";
import { CaptionsListRelationFilter } from "../captions/CaptionsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";
import { TextsHashtagsListRelationFilter } from "../textsHashtags/TextsHashtagsListRelationFilter";
import { TextsLabelsListRelationFilter } from "../textsLabels/TextsLabelsListRelationFilter";

export type TextsWhereInput = {
  book?: BooksWhereUniqueInput;
  captionsItems?: CaptionsListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  ordersItems?: OrdersListRelationFilter;
  textsHashtagsItems?: TextsHashtagsListRelationFilter;
  textsLabelsItems?: TextsLabelsListRelationFilter;
};
