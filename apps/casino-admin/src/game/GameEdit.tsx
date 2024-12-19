import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";
import { ShopTitle } from "../shop/ShopTitle";
import { StatGameTitle } from "../statGame/StatGameTitle";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Advanced" source="advanced" />
        <NumberInput label="Bet" source="bet" />
        <ReferenceArrayInput source="bets" reference="Bet">
          <SelectArrayInput
            optionText={BetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Bids" source="bids" />
        <NumberInput label="Cask" source="cask" />
        <TextInput label="Category Id" source="categoryId" />
        <NumberInput label="Category Temp" source="categoryTemp" />
        <NumberInput label="Chance Firepot1" source="chanceFirepot1" />
        <NumberInput label="Chance Firepot2" source="chanceFirepot2" />
        <NumberInput label="Chance Firepot3" source="chanceFirepot3" />
        <NumberInput label="Created At" source="createdAt" />
        <NumberInput label="Current Rtp" source="currentRtp" />
        <NumberInput label="Denomination" source="denomination" />
        <TextInput label="Developer" source="developer" />
        <NumberInput step={1} label="Device" source="device" />
        <BooleanInput label="Featured" source="featured" />
        <NumberInput label="Fire Count1" source="fireCount1" />
        <NumberInput label="Fire Count2" source="fireCount2" />
        <NumberInput label="Fire Count3" source="fireCount3" />
        <TextInput label="Gamebank" source="gamebank" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Jackpot Group Id" source="jackpotGroupId" />
        <NumberInput step={1} label="Jpg Id" source="jpgId" />
        <TextInput
          label="Lines Percent Config Bonus"
          source="linesPercentConfigBonus"
        />
        <TextInput
          label="Lines Percent Config Bonus Bonus"
          source="linesPercentConfigBonusBonus"
        />
        <TextInput
          label="Lines Percent Config Spin"
          source="linesPercentConfigSpin"
        />
        <TextInput
          label="Lines Percent Config Spin Bonus"
          source="linesPercentConfigSpinBonus"
        />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Original Id" source="originalId" />
        <NumberInput label="Popularity" source="popularity" />
        <TextInput label="Provider Id" source="providerId" />
        <NumberInput label="Rezerv" source="rezerv" />
        <NumberInput label="Rtp Stat In" source="rtpStatIn" />
        <NumberInput label="Rtp Stat Out" source="rtpStatOut" />
        <TextInput label="Scale Mode" source="scaleMode" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <TextInput label="Slot View State" source="slotViewState" />
        <NumberInput label="Standard Rtp" source="standardRtp" />
        <NumberInput label="Stat In" source="statIn" />
        <NumberInput label="Stat Out" source="statOut" />
        <ReferenceArrayInput source="stats" reference="StatGame">
          <SelectArrayInput
            optionText={StatGameTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="View" source="view" />
        <NumberInput step={1} label="Vip Level" source="vipLevel" />
      </SimpleForm>
    </Edit>
  );
};
