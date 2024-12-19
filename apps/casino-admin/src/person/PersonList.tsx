import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"People"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Active Account Id" source="activeAccountId" />
        <TextField label="Active Shop Id" source="activeShopId" />
        <TextField label="Avatar" source="avatar" />
        <TextField label="Cashtag" source="cashtag" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Confirmed" source="emailConfirmed" />
        <TextField label="Embeddings" source="embeddings" />
        <TextField label="Favorites" source="favorites" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is First Deposit" source="isFirstDeposit" />
        <BooleanField label="Is Supended" source="isSupended" />
        <TextField label="Last Sign In At" source="lastSignInAt" />
        <TextField label="Password" source="password" />
        <TextField label="Person Info" source="personInfo" />
        <TextField label="Personname" source="personname" />
        <TextField label="Phone" source="phone" />
        <BooleanField label="Phone Confirmed" source="phoneConfirmed" />
        <TextField label="Reset Password Token" source="resetPasswordToken" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vip Level" source="vipLevel" />{" "}
      </Datagrid>
    </List>
  );
};
