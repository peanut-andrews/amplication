import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RoomList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Rooms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Owner Id" source="ownerId" />
        <BooleanField label="Private Field" source="privateField" />{" "}
      </Datagrid>
    </List>
  );
};
