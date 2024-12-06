import { StringFilter } from "../../util/StringFilter";
import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { SoundsWhereUniqueInput } from "../sounds/SoundsWhereUniqueInput";

export type SoundsLabelsWhereInput = {
  id?: StringFilter;
  label?: LabelsWhereUniqueInput;
  sound?: SoundsWhereUniqueInput;
};
