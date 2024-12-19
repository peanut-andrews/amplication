import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  hash?: string | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  name?: string;
  ownerId?: string | null;
  privateField?: boolean;
};
