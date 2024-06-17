import { Product, IProductConfigurationItem } from "./products.types";

export interface ICartSliceState {
  items: ICartItem[];
  totalItemsAmount: number;
  totalPrice: number;
}

export interface ICartItem {
  item: Product;
  amount: number;
  configuration?: Record<string, IProductConfigurationItem>;
}

export interface IOrderFormInputs {
  name: string;
  surname: string;
  phone: string;
  email: string;
  deliveryMethod: string;
  deliveryAddressStreet: string;
  deliveryAddressHouse: string;
  deliveryAddressEntrance?: string | null;
  deliveryAddressAppartments?: string | null;
  paymentMethod: string;
}
