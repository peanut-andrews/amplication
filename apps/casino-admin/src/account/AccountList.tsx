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
import { OPENSHIFT_TITLE_FIELD } from "../openShift/OpenShiftTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { SHOP_TITLE_FIELD } from "../shop/ShopTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Avatar" source="avatar" />
        <TextField label="Balance" source="balance" />
        <TextField label="Count Balance" source="countBalance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField
          label="Face Verification Time"
          source="faceVerificationTime"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Excluded" source="isExcluded" />
        <ReferenceField
          label="OpenShifts"
          source="openshift.id"
          reference="OpenShift"
        >
          <TextField source={OPENSHIFT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Personname" source="personname" />
        <TextField label="Role" source="role" />
        <TextField label="Rtp" source="rtp" />
        <ReferenceField label="Shop" source="shop.id" reference="Shop">
          <TextField source={SHOP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Bonus Won" source="totalBonusWon" />
        <TextField label="Total Cash In" source="totalCashIn" />
        <TextField label="Total Cash Out" source="totalCashOut" />
        <TextField label="Total Lost" source="totalLost" />
        <TextField label="Total Won" source="totalWon" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
