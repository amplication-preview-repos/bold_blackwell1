import { HashtagsWhereUniqueInput } from "../hashtags/HashtagsWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsHashtagsUpdateInput = {
  hashtag?: HashtagsWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
};
