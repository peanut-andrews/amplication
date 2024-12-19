import { StatGameWhereInput } from "./StatGameWhereInput";
import { StatGameOrderByInput } from "./StatGameOrderByInput";

export type StatGameFindManyArgs = {
  where?: StatGameWhereInput;
  orderBy?: Array<StatGameOrderByInput>;
  skip?: number;
  take?: number;
};
