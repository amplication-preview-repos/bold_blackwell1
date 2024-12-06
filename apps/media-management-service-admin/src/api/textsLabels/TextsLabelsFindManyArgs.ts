import { TextsLabelsWhereInput } from "./TextsLabelsWhereInput";
import { TextsLabelsOrderByInput } from "./TextsLabelsOrderByInput";

export type TextsLabelsFindManyArgs = {
  where?: TextsLabelsWhereInput;
  orderBy?: Array<TextsLabelsOrderByInput>;
  skip?: number;
  take?: number;
};
