import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageUpdateInput = {
  person?: PersonWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
  text?: string;
  typeField?: string | null;
};
