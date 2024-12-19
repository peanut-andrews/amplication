import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const StatGameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StatGames"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slots Bank" source="slotsBank" />
        <TextField label="Table Bank" source="tableBank" />
        <TextField label="Total Bank" source="totalBank" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Win" source="win" />{" "}
      </Datagrid>
    </List>
  );
};
