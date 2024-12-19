import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OPENSHIFT_TITLE_FIELD } from "../openShift/OpenShiftTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { SHOP_TITLE_FIELD } from "./ShopTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { FISHBANK_TITLE_FIELD } from "../fishBank/FishBankTitle";
import { GAMEBANK_TITLE_FIELD } from "../gameBank/GameBankTitle";

export const ShopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Accepted Payment Methods"
          source="acceptedPaymentMethods"
        />
        <TextField label="Balance" source="balance" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Facial Recognition" source="facialRecognition" />
        <ReferenceField
          label="Fish Bank"
          source="fishbank.id"
          reference="FishBank"
        >
          <TextField source={FISHBANK_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Bank"
          source="gamebank.id"
          reference="GameBank"
        >
          <TextField source={GAMEBANK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Mfa Required" source="isMfaRequired" />
        <TextField label="Name" source="name" />
        <TextField label="Shop Settings Id" source="shopSettingsId" />
        <TextField label="Tenant Id" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <ReferenceManyField
          reference="Account"
          target="shopId"
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
        <ReferenceManyField reference="Bet" target="shopId" label="Bets">
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
          target="shopId"
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
        <ReferenceManyField reference="Game" target="shopId" label="Games">
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OpenShift"
          target="shopId"
          label="OpenShifts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Balance" source="balance" />
            <TextField label="Balance In" source="balanceIn" />
            <TextField label="Balance Out" source="balanceOut" />
            <ReferenceField
              label="Cashier"
              source="account.id"
              reference="Account"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="shopId"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Amount To Receive In Cents"
              source="amountToReceiveInCents"
            />
            <TextField label="Bonus Code" source="bonusCode" />
            <TextField label="Bonus Spins" source="bonusSpins" />
            <TextField
              label="Bonus Total In Cents"
              source="bonusTotalInCents"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Discount In Cents" source="discountInCents" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Promo" source="isPromo" />
            <TextField label="Price In Cents" source="priceInCents" />
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField
              label="Total Discount In Cents"
              source="totalDiscountInCents"
            />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BalanceTransaction"
          target="shopId"
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
