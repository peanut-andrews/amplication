import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ShopTitle } from "../shop/ShopTitle";

export const BalanceTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <TextInput label="Bonus Id Used" source="bonusIdUsed" />
        <TextInput label="Cashier Account Id" source="cashierAccountId" />
        <TextInput label="Cashier Avatar" source="cashierAvatar" />
        <TextInput label="Cashier Id" source="cashierId" />
        <TextInput label="Cashiername" source="cashiername" />
        <SelectInput
          source="channel"
          label="Channel"
          choices={[
            { label: "WALLET", value: "WALLET" },
            { label: "COINBASE", value: "COINBASE" },
            { label: "BTCPAYSERVER", value: "BTCPAYSERVER" },
            { label: "CASHAPP", value: "CASHAPP" },
            { label: "INSTORE", value: "INSTORE" },
            { label: "PINCODE", value: "PINCODE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Currency" source="currency" />
        <SelectInput
          source="direction"
          label="Direction"
          choices={[
            { label: "ADD", value: "ADD" },
            { label: "OUT", value: "OUT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="paymentMethod"
          label="Payment Method"
          choices={[
            { label: "CASHAPP", value: "CASHAPP" },
            { label: "INSTORE", value: "INSTORE" },
            { label: "VENMO", value: "VENMO" },
            { label: "CRYPTO", value: "CRYPTO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Person Avatar" source="personAvatar" />
        <TextInput label="Person Id" source="personId" />
        <TextInput label="Personname" source="personname" />
        <ReferenceInput
          source="playerAccount.id"
          reference="Account"
          label="Player Account"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Player Account Balance After Transaction"
          source="playerAccountBalanceAfterTransaction"
        />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Sales Commission"
          source="salesCommission"
        />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Shop Balance After Transaction"
          source="shopBalanceAfterTransaction"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING_PAYMENT", value: "PENDING_PAYMENT" },
            { label: "PAYMENT_FAILED", value: "PAYMENT_FAILED" },
            { label: "EXPIRED", value: "EXPIRED" },
            { label: "CANCELLED_BY_PLAYER", value: "CANCELLED_BY_PLAYER" },
            { label: "CANCELLED_BY_SHOP", value: "CANCELLED_BY_SHOP" },
            { label: "CANCELLED_BY_SYSTEM", value: "CANCELLED_BY_SYSTEM" },
            { label: "SUCCEEDED", value: "SUCCEEDED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Total In Cents" source="totalInCents" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "INVITE", value: "INVITE" },
            { label: "PROGRESS", value: "PROGRESS" },
            { label: "TOURNAMENT", value: "TOURNAMENT" },
            { label: "DAILY_ENTRY", value: "DAILY_ENTRY" },
            { label: "REFUND", value: "REFUND" },
            { label: "WELCOME_BONUS", value: "WELCOME_BONUS" },
            { label: "SMS_BONUS", value: "SMS_BONUS" },
            { label: "WHEEL_FORTUNE", value: "WHEEL_FORTUNE" },
            { label: "CASH_OUT", value: "CASH_OUT" },
            { label: "RETAIL_PAYMENT", value: "RETAIL_PAYMENT" },
            { label: "DEPOSIT", value: "DEPOSIT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Update Level" source="updateLevel" />
      </SimpleForm>
    </Create>
  );
};
