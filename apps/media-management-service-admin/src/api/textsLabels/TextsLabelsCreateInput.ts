import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsLabelsCreateInput = {
  label?: LabelsWhereUniqueInput | null;
  text?: TextsWhereUniqueInput | null;
};
