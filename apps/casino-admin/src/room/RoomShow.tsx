import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { ROOM_TITLE_FIELD } from "./RoomTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Owner Id" source="ownerId" />
        <BooleanField label="Private Field" source="privateField" />
        <ReferenceManyField
          reference="Message"
          target="roomId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
