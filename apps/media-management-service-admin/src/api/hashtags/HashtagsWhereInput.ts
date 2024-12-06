import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TextsHashtagsListRelationFilter } from "../textsHashtags/TextsHashtagsListRelationFilter";

export type HashtagsWhereInput = {
  hashtag?: StringNullableFilter;
  id?: StringFilter;
  textsHashtagsItems?: TextsHashtagsListRelationFilter;
};
