import { Message } from "../message/Message";

export type Room = {
  createdAt: Date;
  hash: string | null;
  id: string;
  messages?: Array<Message>;
  name: string;
  ownerId: string | null;
  privateField: boolean;
};
