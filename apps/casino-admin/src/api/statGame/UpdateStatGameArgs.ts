import { StatGameWhereUniqueInput } from "./StatGameWhereUniqueInput";
import { StatGameUpdateInput } from "./StatGameUpdateInput";

export type UpdateStatGameArgs = {
  where: StatGameWhereUniqueInput;
  data: StatGameUpdateInput;
};
