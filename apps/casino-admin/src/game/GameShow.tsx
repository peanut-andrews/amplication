import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { GAME_TITLE_FIELD } from "./GameTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Advanced" source="advanced" />
        <TextField label="Bet" source="bet" />
        <TextField label="Bids" source="bids" />
        <TextField label="Cask" source="cask" />
        <TextField label="Category Id" source="categoryId" />
        <TextField label="Category Temp" source="categoryTemp" />
        <TextField label="Chance Firepot1" source="chanceFirepot1" />
        <TextField label="Chance Firepot2" source="chanceFirepot2" />
        <TextField label="Chance Firepot3" source="chanceFirepot3" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Current Rtp" source="currentRtp" />
        <TextField label="Denomination" source="denomination" />
        <TextField label="Developer" source="developer" />
        <TextField label="Device" source="device" />
        <BooleanField label="Featured" source="featured" />
        <TextField label="Fire Count1" source="fireCount1" />
        <TextField label="Fire Count2" source="fireCount2" />
        <TextField label="Fire Count3" source="fireCount3" />
        <TextField label="Gamebank" source="gamebank" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Jackpot Group Id" source="jackpotGroupId" />
        <TextField label="Jpg Id" source="jpgId" />
        <TextField
          label="Lines Percent Config Bonus"
          source="linesPercentConfigBonus"
        />
        <TextField
          label="Lines Percent Config Bonus Bonus"
          source="linesPercentConfigBonusBonus"
        />
        <TextField
          label="Lines Percent Config Spin"
          source="linesPercentConfigSpin"
        />
        <TextField
          label="Lines Percent Config Spin Bonus"
          source="linesPercentConfigSpinBonus"
        />
        <TextField label="Name" source="name" />
        <TextField label="Original Id" source="originalId" />
        <TextField label="Popularity" source="popularity" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Rezerv" source="rezerv" />
        <TextField label="Rtp Stat In" source="rtpStatIn" />
        <TextField label="Rtp Stat Out" source="rtpStatOut" />
        <TextField label="Scale Mode" source="scaleMode" />
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slot View State" source="slotViewState" />
        <TextField label="Standard Rtp" source="standardRtp" />
        <TextField label="Stat In" source="statIn" />
        <TextField label="Stat Out" source="statOut" />
        <TextField label="Title" source="title" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="View" source="view" />
        <TextField label="Vip Level" source="vipLevel" />
        <ReferenceManyField reference="Bet" target="gameId" label="Bets">
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
          reference="StatGame"
          target="gameId"
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
      </SimpleShowLayout>
    </Show>
  );
};
