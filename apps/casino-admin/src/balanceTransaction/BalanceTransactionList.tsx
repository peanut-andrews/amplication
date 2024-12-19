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
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const BalanceTransactionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BalanceTransactions"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Product" source="product.id" reference="Product">
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
