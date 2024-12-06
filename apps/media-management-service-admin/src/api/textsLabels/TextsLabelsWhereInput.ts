import { StringFilter } from "../../util/StringFilter";
import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type TextsLabelsWhereInput = {
  id?: StringFilter;
  label?: LabelsWhereUniqueInput;
  text?: TextsWhereUniqueInput;
};
