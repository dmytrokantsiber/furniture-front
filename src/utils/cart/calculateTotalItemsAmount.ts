import { ICartItem } from "../../types/cart.types";

export const calculateTotalItemsAmount = (items: ICartItem[]): number => {
  const totalItemsAmount = items.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);
  return totalItemsAmount;
};
