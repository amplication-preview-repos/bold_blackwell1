import { SoundsLabelsCreateNestedManyWithoutLabelsItemsInput } from "./SoundsLabelsCreateNestedManyWithoutLabelsItemsInput";
import { TextsLabelsCreateNestedManyWithoutLabelsItemsInput } from "./TextsLabelsCreateNestedManyWithoutLabelsItemsInput";

export type LabelsCreateInput = {
  name?: string | null;
  soundsLabelsItems?: SoundsLabelsCreateNestedManyWithoutLabelsItemsInput;
  textsLabelsItems?: TextsLabelsCreateNestedManyWithoutLabelsItemsInput;
};
