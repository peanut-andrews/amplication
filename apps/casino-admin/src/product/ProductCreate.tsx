import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";
import { BalanceTransactionTitle } from "../balanceTransaction/BalanceTransactionTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Amount To Receive In Cents"
          source="amountToReceiveInCents"
        />
        <TextInput label="Bonus Code" source="bonusCode" />
        <NumberInput step={1} label="Bonus Spins" source="bonusSpins" />
        <NumberInput
          step={1}
          label="Bonus Total In Cents"
          source="bonusTotalInCents"
        />
        <TextInput label="Description" source="description" />
        <NumberInput
          step={1}
          label="Discount In Cents"
          source="discountInCents"
        />
        <BooleanInput label="Is Promo" source="isPromo" />
        <NumberInput step={1} label="Price In Cents" source="priceInCents" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="shopTransaction"
          reference="BalanceTransaction"
        >
          <SelectArrayInput
            optionText={BalanceTransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
        <NumberInput
          step={1}
          label="Total Discount In Cents"
          source="totalDiscountInCents"
        />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
