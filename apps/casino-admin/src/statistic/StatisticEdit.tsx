import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const StatisticEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <NumberInput label="Hh Multiplier" source="hhMultiplier" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Payeer Id" source="payeerId" />
        <TextInput label="Person Id" source="personId" />
        <NumberInput step={1} label="Sum" source="sum" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Total" source="total" />
        <SelectInput
          source="transactionChannel"
          label="Transaction Channel"
          choices={[
            { label: "CASHAPP", value: "CASHAPP" },
            { label: "INSTORE", value: "INSTORE" },
            { label: "VENMO", value: "VENMO" },
            { label: "CRYPTO", value: "CRYPTO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
