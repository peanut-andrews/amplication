import { Statistic as TStatistic } from "../api/statistic/Statistic";

export const STATISTIC_TITLE_FIELD = "title";

export const StatisticTitle = (record: TStatistic): string => {
  return record.title?.toString() || String(record.id);
};
