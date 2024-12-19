import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  ReferenceArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { BetTitle } from "../bet/BetTitle";
import { FishBankTitle } from "../fishBank/FishBankTitle";
import { GameBankTitle } from "../gameBank/GameBankTitle";
import { StatGameTitle } from "../statGame/StatGameTitle";
import { GameTitle } from "../game/GameTitle";
import { OpenShiftTitle } from "../openShift/OpenShiftTitle";
import { ProductTitle } from "../product/ProductTitle";
import { BalanceTransactionTitle } from "../balanceTransaction/BalanceTransactionTitle";

export const ShopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Accepted Payment Methods"
          source="acceptedPaymentMethods"
          choices={[
            { label: "CASHAPP", value: "CASHAPP" },
            { label: "INSTORE", value: "INSTORE" },
            { label: "VENMO", value: "VENMO" },
            { label: "CRYPTO", value: "CRYPTO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="accounts" reference="Account">
          <SelectArrayInput
            optionText={AccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Balance" source="balance" />
        <ReferenceArrayInput source="bets" reference="Bet">
          <SelectArrayInput
            optionText={BetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" source="description" />
        <NumberInput
          step={1}
          label="Facial Recognition"
          source="facialRecognition"
        />
        <ReferenceInput
          source="fishBank.id"
          reference="FishBank"
          label="Fish Bank"
        >
          <SelectInput optionText={FishBankTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="gameBank.id"
          reference="GameBank"
          label="Game Bank"
        >
          <SelectInput optionText={GameBankTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="gameStatsAccount" reference="StatGame">
          <SelectArrayInput
            optionText={StatGameTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="games" reference="Game">
          <SelectArrayInput
            optionText={GameTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Mfa Required" source="isMfaRequired" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="openShifts" reference="OpenShift">
          <SelectArrayInput
            optionText={OpenShiftTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="product" reference="Product">
          <SelectArrayInput
            optionText={ProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Shop Settings Id" source="shopSettingsId" />
        <TextInput label="Tenant Id" source="tenantId" />
        <ReferenceArrayInput
          source="transactions"
          reference="BalanceTransaction"
        >
          <SelectArrayInput
            optionText={BalanceTransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
