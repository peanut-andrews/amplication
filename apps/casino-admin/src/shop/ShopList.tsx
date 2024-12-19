import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FISHBANK_TITLE_FIELD } from "../fishBank/FishBankTitle";
import { GAMEBANK_TITLE_FIELD } from "../gameBank/GameBankTitle";

export const ShopList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Shops"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="Accepted Payment Methods"
          source="acceptedPaymentMethods"
        />
        <TextField label="Balance" source="balance" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Facial Recognition" source="facialRecognition" />
        <ReferenceField
          label="Fish Bank"
          source="fishbank.id"
          reference="FishBank"
        >
          <TextField source={FISHBANK_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Bank"
          source="gamebank.id"
          reference="GameBank"
        >
          <TextField source={GAMEBANK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Mfa Required" source="isMfaRequired" />
        <TextField label="Name" source="name" />
        <TextField label="Shop Settings Id" source="shopSettingsId" />
        <TextField label="Tenant Id" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
