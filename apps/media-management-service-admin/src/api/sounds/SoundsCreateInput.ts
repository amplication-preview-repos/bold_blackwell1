import { SoundsLabelsCreateNestedManyWithoutSoundsItemsInput } from "./SoundsLabelsCreateNestedManyWithoutSoundsItemsInput";

export type SoundsCreateInput = {
  name?: string | null;
  soundsLabelsItems?: SoundsLabelsCreateNestedManyWithoutSoundsItemsInput;
};
