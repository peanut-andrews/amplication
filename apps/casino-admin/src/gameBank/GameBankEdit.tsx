import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";

export const GameBankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
