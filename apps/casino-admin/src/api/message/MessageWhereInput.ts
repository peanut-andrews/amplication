import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
  room?: RoomWhereUniqueInput;
  text?: StringFilter;
  typeField?: StringNullableFilter;
};
