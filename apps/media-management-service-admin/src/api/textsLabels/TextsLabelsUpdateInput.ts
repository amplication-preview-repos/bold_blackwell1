import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsLabelsUpdateInput = {
  label?: LabelsWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
};
