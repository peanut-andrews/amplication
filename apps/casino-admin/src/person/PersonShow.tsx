import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OPENSHIFT_TITLE_FIELD } from "../openShift/OpenShiftTitle";
import { PERSON_TITLE_FIELD } from "./PersonTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Vip Level" source="vipLevel" />
        <ReferenceManyField
          reference="Account"
          target="personId"
          label="Accounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StatGame"
          target="personId"
          label="StatGames"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Balance" source="balance" />
            <TextField label="Bet" source="bet" />
            <TextField label="Bonus Bank" source="bonusBank" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date Time" source="dateTime" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Denomination" source="denomination" />
            <TextField label="Fish Bank" source="fishBank" />
            <TextField label="Game Bank" source="gameBank" />
            <ReferenceField label="Game Item" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="In Game" source="inGame" />
            <TextField label="In Jpg" source="inJpg" />
            <TextField label="In Profit" source="inProfit" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <TextField label="Jack Balance" source="jackBalance" />
            <TextField label="Little Bank" source="littleBank" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Slots Bank" source="slotsBank" />
            <TextField label="Table Bank" source="tableBank" />
            <TextField label="Total Bank" source="totalBank" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Win" source="win" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="personId"
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
