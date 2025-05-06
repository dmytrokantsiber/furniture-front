import { IOrderFormInputs, ICartItem } from "./cart.types";

export type Order = {
  _id?: string;
  orderNumber?: number;
  user?: string;
  clientInfo: IOrderFormInputs;
  date?: Date;
  items: ICartItem[];
  totalPrice: number;
  totalItemsAmount: number;
  status: number;
};
