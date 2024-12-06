import { Labels } from "../labels/Labels";
import { Texts } from "../texts/Texts";

export type TextsLabels = {
  createdAt: Date;
  id: string;
  label?: Labels | null;
  text?: Texts | null;
  updatedAt: Date;
};
