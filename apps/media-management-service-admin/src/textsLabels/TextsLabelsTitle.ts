import { TextsLabels as TTextsLabels } from "../api/textsLabels/TextsLabels";

export const TEXTSLABELS_TITLE_FIELD = "id";

export const TextsLabelsTitle = (record: TTextsLabels): string => {
  return record.id?.toString() || String(record.id);
};
