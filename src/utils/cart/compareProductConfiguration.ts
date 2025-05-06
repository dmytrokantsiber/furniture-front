import _ from "lodash";

import { IProductConfigurationItem } from "../../types/products.types";

export const compareProductConfiguration = (
  cartItem: Record<string, IProductConfigurationItem> | undefined,
  newItem: Record<string, IProductConfigurationItem> | undefined
): boolean => {
  if (_.isEqual(cartItem, newItem)) {
    return true;
  }
  return false;
};
