import { SoundsLabels as TSoundsLabels } from "../api/soundsLabels/SoundsLabels";

export const SOUNDSLABELS_TITLE_FIELD = "id";

export const SoundsLabelsTitle = (record: TSoundsLabels): string => {
  return record.id?.toString() || String(record.id);
};
