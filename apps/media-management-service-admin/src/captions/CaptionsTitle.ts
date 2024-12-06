import { Captions as TCaptions } from "../api/captions/Captions";

export const CAPTIONS_TITLE_FIELD = "id";

export const CaptionsTitle = (record: TCaptions): string => {
  return record.id?.toString() || String(record.id);
};
