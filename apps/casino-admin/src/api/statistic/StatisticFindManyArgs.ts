import { StatisticWhereInput } from "./StatisticWhereInput";
import { StatisticOrderByInput } from "./StatisticOrderByInput";

export type StatisticFindManyArgs = {
  where?: StatisticWhereInput;
  orderBy?: Array<StatisticOrderByInput>;
  skip?: number;
  take?: number;
};
