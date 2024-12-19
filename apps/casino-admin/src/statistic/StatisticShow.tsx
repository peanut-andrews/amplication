import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const StatisticShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Hh Multiplier" source="hhMultiplier" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Payeer Id" source="payeerId" />
        <TextField label="Person Id" source="personId" />
        <TextField label="Sum" source="sum" />
        <TextField label="Title" source="title" />
        <TextField label="Total" source="total" />
        <TextField label="Transaction Channel" source="transactionChannel" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
