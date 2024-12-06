import { HashtagsWhereUniqueInput } from "../hashtags/HashtagsWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsHashtagsCreateInput = {
  hashtag?: HashtagsWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
};
