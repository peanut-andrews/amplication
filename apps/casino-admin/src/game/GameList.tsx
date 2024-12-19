import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const GameList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Games"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="Vip Level" source="vipLevel" />{" "}
      </Datagrid>
    </List>
  );
};
