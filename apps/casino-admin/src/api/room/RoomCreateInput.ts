import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  hash?: string | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  name: string;
  ownerId?: string | null;
  privateField: boolean;
};
