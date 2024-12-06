import { HashtagsWhereUniqueInput } from "../hashtags/HashtagsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsHashtagsWhereInput = {
  hashtag?: HashtagsWhereUniqueInput;
  id?: StringFilter;
  text?: TextsWhereUniqueInput;
};
