import { SoundsLabels } from "../soundsLabels/SoundsLabels";

export type Sounds = {
  createdAt: Date;
  id: string;
  name: string | null;
  soundsLabelsItems?: Array<SoundsLabels>;
  updatedAt: Date;
};
