import { Person as TPerson } from "../api/person/Person";

export const PERSON_TITLE_FIELD = "personname";

export const PersonTitle = (record: TPerson): string => {
  return record.personname?.toString() || String(record.id);
};
