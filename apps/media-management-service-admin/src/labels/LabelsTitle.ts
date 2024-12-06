import { Labels as TLabels } from "../api/labels/Labels";

export const LABELS_TITLE_FIELD = "name";

export const LabelsTitle = (record: TLabels): string => {
  return record.name?.toString() || String(record.id);
};
