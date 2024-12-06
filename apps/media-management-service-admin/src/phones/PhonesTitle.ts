import { Phones as TPhones } from "../api/phones/Phones";

export const PHONES_TITLE_FIELD = "name";

export const PhonesTitle = (record: TPhones): string => {
  return record.name?.toString() || String(record.id);
};
