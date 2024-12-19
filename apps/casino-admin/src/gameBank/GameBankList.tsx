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

export const GameBankList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameBanks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Bonus" source="bonus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Little" source="little" />
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slots" source="slots" />
        <TextField label="Table Bank" source="tableBank" />
        <TextField label="Temp Rtp" source="tempRtp" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
