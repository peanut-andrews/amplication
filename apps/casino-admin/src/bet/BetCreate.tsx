import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { GameTitle } from "../game/GameTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const BetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Bet Amount" source="betAmount" />
        <TextInput label="Currency" source="currency" />
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <NumberInput label="Multiplier" source="multiplier" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Win Amount" source="winAmount" />
      </SimpleForm>
    </Create>
  );
};
