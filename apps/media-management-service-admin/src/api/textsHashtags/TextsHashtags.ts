import { Hashtags } from "../hashtags/Hashtags";
import { Texts } from "../texts/Texts";

export type TextsHashtags = {
  createdAt: Date;
  hashtag?: Hashtags | null;
  id: string;
  text?: Texts | null;
  updatedAt: Date;
};
