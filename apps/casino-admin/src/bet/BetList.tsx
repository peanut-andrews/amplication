import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const BetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Bets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Account" source="account.id" reference="Account">
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
        <TextField label="Win Amount" source="winAmount" />{" "}
      </Datagrid>
    </List>
  );
};
