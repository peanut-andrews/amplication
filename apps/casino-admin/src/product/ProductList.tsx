import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="Amount To Receive In Cents"
          source="amountToReceiveInCents"
        />
        <TextField label="Bonus Code" source="bonusCode" />
        <TextField label="Bonus Spins" source="bonusSpins" />
        <TextField label="Bonus Total In Cents" source="bonusTotalInCents" />
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
        <TextField label="Url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
