import { TextsHashtags as TTextsHashtags } from "../api/textsHashtags/TextsHashtags";

export const TEXTSHASHTAGS_TITLE_FIELD = "id";

export const TextsHashtagsTitle = (record: TTextsHashtags): string => {
  return record.id?.toString() || String(record.id);
};
