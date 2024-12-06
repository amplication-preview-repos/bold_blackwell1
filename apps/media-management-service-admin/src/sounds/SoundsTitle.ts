import { Sounds as TSounds } from "../api/sounds/Sounds";

export const SOUNDS_TITLE_FIELD = "name";

export const SoundsTitle = (record: TSounds): string => {
  return record.name?.toString() || String(record.id);
};
