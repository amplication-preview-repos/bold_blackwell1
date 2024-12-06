import { TextsHashtagsCreateNestedManyWithoutHashtagsItemsInput } from "./TextsHashtagsCreateNestedManyWithoutHashtagsItemsInput";

export type HashtagsCreateInput = {
  hashtag?: string | null;
  textsHashtagsItems?: TextsHashtagsCreateNestedManyWithoutHashtagsItemsInput;
};
