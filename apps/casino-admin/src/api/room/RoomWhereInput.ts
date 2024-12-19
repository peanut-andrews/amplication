import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type RoomWhereInput = {
  createdAt?: DateTimeFilter;
  hash?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringFilter;
  ownerId?: StringNullableFilter;
  privateField?: BooleanFilter;
};
