import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const OpenShiftShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Balance In" source="balanceIn" />
        <TextField label="Balance Out" source="balanceOut" />
        <ReferenceField label="Cashier" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Jpg" source="jpg" />
        <TextField label="Last Banks" source="lastBanks" />
        <TextField label="Money In" source="moneyIn" />
        <TextField label="Money Out" source="moneyOut" />
        <TextField label="Old Banks" source="oldBanks" />
        <TextField label="Old Total" source="oldTotal" />
        <TextField label="Person Id" source="personId" />
        <TextField label="Persons" source="persons" />
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Date" source="startDate" />
        <TextField label="Transfers" source="transfers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Welcome Bonuses" source="welcomeBonuses" />
      </SimpleShowLayout>
    </Show>
  );
};
