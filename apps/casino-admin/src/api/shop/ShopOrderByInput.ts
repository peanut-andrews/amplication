import { SortOrder } from "../../util/SortOrder";

export type ShopOrderByInput = {
  acceptedPaymentMethods?: SortOrder;
  balance?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  facialRecognition?: SortOrder;
  fishBankId?: SortOrder;
  gameBankId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isMfaRequired?: SortOrder;
  name?: SortOrder;
  shopSettingsId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
