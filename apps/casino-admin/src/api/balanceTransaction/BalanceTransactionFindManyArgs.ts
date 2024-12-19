import { BalanceTransactionWhereInput } from "./BalanceTransactionWhereInput";
import { BalanceTransactionOrderByInput } from "./BalanceTransactionOrderByInput";

export type BalanceTransactionFindManyArgs = {
  where?: BalanceTransactionWhereInput;
  orderBy?: Array<BalanceTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
