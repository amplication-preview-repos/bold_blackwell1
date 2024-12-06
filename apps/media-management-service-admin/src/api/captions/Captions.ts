import { Texts } from "../texts/Texts";

export type Captions = {
  createdAt: Date;
  id: string;
  text?: Texts | null;
  updatedAt: Date;
};
