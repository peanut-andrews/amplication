import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";
import { OpenShiftTitle } from "../openShift/OpenShiftTitle";
import { PersonTitle } from "../person/PersonTitle";
import { ShopTitle } from "../shop/ShopTitle";
import { BalanceTransactionTitle } from "../balanceTransaction/BalanceTransactionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Avatar" source="avatar" />
        <NumberInput step={1} label="Balance" source="balance" />
        <ReferenceArrayInput source="bets" reference="Bet">
          <SelectArrayInput
            optionText={BetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Count Balance" source="countBalance" />
        <TextInput label="Currency" source="currency" />
        <TextInput
          label="Face Verification Time"
          source="faceVerificationTime"
        />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Excluded" source="isExcluded" />
        <ReferenceInput
          source="openShifts.id"
          reference="OpenShift"
          label="OpenShifts"
        >
          <SelectInput optionText={OpenShiftTitle} />
        </ReferenceInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <TextInput label="Personname" source="personname" />
        <SelectArrayInput
          source="role"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Rtp" source="rtp" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Total Bonus Won" source="totalBonusWon" />
        <TextInput label="Total Cash In" source="totalCashIn" />
        <TextInput label="Total Cash Out" source="totalCashOut" />
        <NumberInput step={1} label="Total Lost" source="totalLost" />
        <NumberInput step={1} label="Total Won" source="totalWon" />
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
      </SimpleForm>
    </Edit>
  );
};
