import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { StatGameTitle } from "../statGame/StatGameTitle";
import { MessageTitle } from "../message/MessageTitle";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="accounts" reference="Account">
          <SelectArrayInput
            optionText={AccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Active Account Id" source="activeAccountId" />
        <TextInput label="Active Shop Id" source="activeShopId" />
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Cashtag" source="cashtag" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Confirmed" source="emailConfirmed" />
        <div />
        <TextInput label="Favorites" source="favorites" />
        <ReferenceArrayInput source="gameStats" reference="StatGame">
          <SelectArrayInput
            optionText={StatGameTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is First Deposit" source="isFirstDeposit" />
        <BooleanInput label="Is Supended" source="isSupended" />
        <DateTimeInput label="Last Sign In At" source="lastSignInAt" />
        <ReferenceArrayInput source="messages" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Password" source="password" />
        <div />
        <TextInput label="Personname" source="personname" />
        <TextInput label="Phone" source="phone" />
        <BooleanInput label="Phone Confirmed" source="phoneConfirmed" />
        <TextInput label="Reset Password Token" source="resetPasswordToken" />
        <NumberInput step={1} label="Vip Level" source="vipLevel" />
      </SimpleForm>
    </Edit>
  );
};
