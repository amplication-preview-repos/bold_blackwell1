import { Labels } from "../labels/Labels";
import { Sounds } from "../sounds/Sounds";

export type SoundsLabels = {
  createdAt: Date;
  id: string;
  label?: Labels | null;
  sound?: Sounds | null;
  updatedAt: Date;
};
