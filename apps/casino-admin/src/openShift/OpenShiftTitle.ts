import { OpenShift as TOpenShift } from "../api/openShift/OpenShift";

export const OPENSHIFT_TITLE_FIELD = "personId";

export const OpenShiftTitle = (record: TOpenShift): string => {
  return record.personId?.toString() || String(record.id);
};
