import { Crew as TCrew } from "../api/crew/Crew";

export const CREW_TITLE_FIELD = "name";

export const CrewTitle = (record: TCrew): string => {
  return record.name?.toString() || String(record.id);
};
