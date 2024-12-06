import { SoundsLabelsUpdateManyWithoutLabelsItemsInput } from "./SoundsLabelsUpdateManyWithoutLabelsItemsInput";
import { TextsLabelsUpdateManyWithoutLabelsItemsInput } from "./TextsLabelsUpdateManyWithoutLabelsItemsInput";

export type LabelsUpdateInput = {
  name?: string | null;
  soundsLabelsItems?: SoundsLabelsUpdateManyWithoutLabelsItemsInput;
  textsLabelsItems?: TextsLabelsUpdateManyWithoutLabelsItemsInput;
};
