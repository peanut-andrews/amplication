import { Shop as TShop } from "../api/shop/Shop";

export const SHOP_TITLE_FIELD = "name";

export const ShopTitle = (record: TShop): string => {
  return record.name?.toString() || String(record.id);
};
