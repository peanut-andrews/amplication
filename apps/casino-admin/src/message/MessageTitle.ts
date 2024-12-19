import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "text";

export const MessageTitle = (record: TMessage): string => {
  return record.text?.toString() || String(record.id);
};
