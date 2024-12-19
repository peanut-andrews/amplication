import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { OPENSHIFT_TITLE_FIELD } from "../openShift/OpenShiftTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Avatar" source="avatar" />
        <TextField label="Balance" source="balance" />
        <TextField label="Count Balance" source="countBalance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField
          label="Face Verification Time"
          source="faceVerificationTime"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Excluded" source="isExcluded" />
        <ReferenceField
          label="OpenShifts"
          source="openshift.id"
          reference="OpenShift"
        >
          <TextField source={OPENSHIFT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Personname" source="personname" />
        <TextField label="Role" source="role" />
        <TextField label="Rtp" source="rtp" />
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Bonus Won" source="totalBonusWon" />
        <TextField label="Total Cash In" source="totalCashIn" />
        <TextField label="Total Cash Out" source="totalCashOut" />
        <TextField label="Total Lost" source="totalLost" />
        <TextField label="Total Won" source="totalWon" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bet" target="accountId" label="Bets">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Bet Amount" source="betAmount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Multiplier" source="multiplier" />
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Win Amount" source="winAmount" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BalanceTransaction"
          target="playerAccountId"
          label="BalanceTransactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <TextField label="Bonus Id Used" source="bonusIdUsed" />
            <TextField label="Cashier Account Id" source="cashierAccountId" />
            <TextField label="Cashier Avatar" source="cashierAvatar" />
            <TextField label="Cashier Id" source="cashierId" />
            <TextField label="Cashiername" source="cashiername" />
            <TextField label="Channel" source="channel" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Direction" source="direction" />
            <TextField label="ID" source="id" />
            <TextField label="Payment Method" source="paymentMethod" />
            <TextField label="Person Avatar" source="personAvatar" />
            <TextField label="Person Id" source="personId" />
            <TextField label="Personname" source="personname" />
            <ReferenceField
              label="Player Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Player Account Balance After Transaction"
              source="playerAccountBalanceAfterTransaction"
            />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sales Commission" source="salesCommission" />
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Shop Balance After Transaction"
              source="shopBalanceAfterTransaction"
            />
            <TextField label="Status" source="status" />
            <TextField label="Total In Cents" source="totalInCents" />
            <TextField label="Type" source="type" />
            <BooleanField label="Update Level" source="updateLevel" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
