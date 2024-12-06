import { TextsHashtagsWhereInput } from "./TextsHashtagsWhereInput";
import { TextsHashtagsOrderByInput } from "./TextsHashtagsOrderByInput";

export type TextsHashtagsFindManyArgs = {
  where?: TextsHashtagsWhereInput;
  orderBy?: Array<TextsHashtagsOrderByInput>;
  skip?: number;
  take?: number;
};
