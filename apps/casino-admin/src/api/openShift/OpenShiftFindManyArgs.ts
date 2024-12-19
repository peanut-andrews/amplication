import { OpenShiftWhereInput } from "./OpenShiftWhereInput";
import { OpenShiftOrderByInput } from "./OpenShiftOrderByInput";

export type OpenShiftFindManyArgs = {
  where?: OpenShiftWhereInput;
  orderBy?: Array<OpenShiftOrderByInput>;
  skip?: number;
  take?: number;
};
