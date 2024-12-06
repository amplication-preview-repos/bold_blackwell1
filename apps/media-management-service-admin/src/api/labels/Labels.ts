import { SoundsLabels } from "../soundsLabels/SoundsLabels";
import { TextsLabels } from "../textsLabels/TextsLabels";

export type Labels = {
  createdAt: Date;
  id: string;
  name: string | null;
  soundsLabelsItems?: Array<SoundsLabels>;
  textsLabelsItems?: Array<TextsLabels>;
  updatedAt: Date;
};
