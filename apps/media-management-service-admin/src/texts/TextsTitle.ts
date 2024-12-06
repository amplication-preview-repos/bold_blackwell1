import { Texts as TTexts } from "../api/texts/Texts";

export const TEXTS_TITLE_FIELD = "name";

export const TextsTitle = (record: TTexts): string => {
  return record.name?.toString() || String(record.id);
};
