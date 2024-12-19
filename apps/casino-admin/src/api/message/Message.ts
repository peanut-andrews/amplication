import { Person } from "../person/Person";
import { Room } from "../room/Room";

export type Message = {
  createdAt: Date;
  id: string;
  person?: Person | null;
  room?: Room | null;
  text: string;
  typeField: string | null;
};
