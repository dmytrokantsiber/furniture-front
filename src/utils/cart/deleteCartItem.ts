import { ICartItem } from "../../types/cart.types";
import { compareProductConfiguration } from "./compareProductConfiguration";

export const deleteCartItem = (
  items: ICartItem[],
  payload: ICartItem
): ICartItem[] => {
  const result = items.filter(
    (cartItem) =>
      !(
        compareProductConfiguration(
          cartItem.configuration,
          payload.configuration
        ) && cartItem.item.productCode === payload.item.productCode
      )
  );
  return result;
};
