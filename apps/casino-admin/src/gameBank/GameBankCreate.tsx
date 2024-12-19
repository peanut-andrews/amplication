import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";

export const GameBankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Bonus" source="bonus" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <NumberInput label="Little" source="little" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <NumberInput label="Slots" source="slots" />
        <NumberInput label="Table Bank" source="tableBank" />
        <NumberInput label="Temp Rtp" source="tempRtp" />
      </SimpleForm>
    </Create>
  );
};
