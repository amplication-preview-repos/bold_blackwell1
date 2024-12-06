import { Books } from "../books/Books";
import { Captions } from "../captions/Captions";
import { Orders } from "../orders/Orders";
import { TextsHashtags } from "../textsHashtags/TextsHashtags";
import { TextsLabels } from "../textsLabels/TextsLabels";

export type Texts = {
  book?: Books | null;
  captionsItems?: Array<Captions>;
  createdAt: Date;
  id: string;
  name: string | null;
  ordersItems?: Array<Orders>;
  textsHashtagsItems?: Array<TextsHashtags>;
  textsLabelsItems?: Array<TextsLabels>;
  updatedAt: Date;
};
