import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageCreateInput = {
  person?: PersonWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
  text: string;
  typeField?: string | null;
};
