import { TextsWhereInput } from "./TextsWhereInput";
import { TextsOrderByInput } from "./TextsOrderByInput";

export type TextsFindManyArgs = {
  where?: TextsWhereInput;
  orderBy?: Array<TextsOrderByInput>;
  skip?: number;
  take?: number;
};
