import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Url" source="url" />
        <ReferenceManyField
          reference="BalanceTransaction"
          target="productId"
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
