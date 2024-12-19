import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const OpenShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Balance" source="balance" />
        <NumberInput step={1} label="Balance In" source="balanceIn" />
        <NumberInput step={1} label="Balance Out" source="balanceOut" />
        <ReferenceInput source="cashier.id" reference="Account" label="Cashier">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <NumberInput step={1} label="Jpg" source="jpg" />
        <NumberInput step={1} label="Last Banks" source="lastBanks" />
        <NumberInput step={1} label="Money In" source="moneyIn" />
        <NumberInput step={1} label="Money Out" source="moneyOut" />
        <NumberInput step={1} label="Old Banks" source="oldBanks" />
        <NumberInput step={1} label="Old Total" source="oldTotal" />
        <TextInput label="Person Id" source="personId" />
        <NumberInput step={1} label="Persons" source="persons" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="Transfers" source="transfers" />
        <div />
      </SimpleForm>
    </Create>
  );
};
