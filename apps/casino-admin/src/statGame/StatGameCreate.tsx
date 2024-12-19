import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";
import { PersonTitle } from "../person/PersonTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const StatGameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <NumberInput label="Bet" source="bet" />
        <NumberInput label="Bonus Bank" source="bonusBank" />
        <DateTimeInput label="Date Time" source="dateTime" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <NumberInput label="Denomination" source="denomination" />
        <NumberInput label="Fish Bank" source="fishBank" />
        <NumberInput label="Game Bank" source="gameBank" />
        <ReferenceInput source="gameItem.id" reference="Game" label="Game Item">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <NumberInput label="In Game" source="inGame" />
        <NumberInput label="In Jpg" source="inJpg" />
        <NumberInput label="In Profit" source="inProfit" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <NumberInput label="Jack Balance" source="jackBalance" />
        <NumberInput label="Little Bank" source="littleBank" />
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <NumberInput label="Slots Bank" source="slotsBank" />
        <NumberInput label="Table Bank" source="tableBank" />
        <NumberInput label="Total Bank" source="totalBank" />
        <NumberInput label="Win" source="win" />
      </SimpleForm>
    </Create>
  );
};
