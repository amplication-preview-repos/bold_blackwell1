import { TextsHashtags } from "../textsHashtags/TextsHashtags";

export type Hashtags = {
  createdAt: Date;
  hashtag: string | null;
  id: string;
  textsHashtagsItems?: Array<TextsHashtags>;
  updatedAt: Date;
};
