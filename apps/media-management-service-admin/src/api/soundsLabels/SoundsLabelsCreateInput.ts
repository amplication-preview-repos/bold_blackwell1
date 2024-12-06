import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { SoundsWhereUniqueInput } from "../sounds/SoundsWhereUniqueInput";

export type SoundsLabelsCreateInput = {
  label?: LabelsWhereUniqueInput | null;
  sound?: SoundsWhereUniqueInput | null;
};
