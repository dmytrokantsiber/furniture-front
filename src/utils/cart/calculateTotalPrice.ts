import { ICartItem } from "../../types/cart.types";

export const calculateTotalPrice = (items: ICartItem[]): number => {
  const newTotalPrice = items.reduce((acc, current) => {
    return acc + current.item.price * current.amount;
  }, 0);
  return newTotalPrice;
};
