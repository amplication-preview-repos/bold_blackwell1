import { LabelsWhereUniqueInput } from "../labels/LabelsWhereUniqueInput";
import { SoundsWhereUniqueInput } from "../sounds/SoundsWhereUniqueInput";

export type SoundsLabelsUpdateInput = {
  label?: LabelsWhereUniqueInput | null;
  sound?: SoundsWhereUniqueInput | null;
};
