import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { findCartItem } from "../../../utils/cart/findCartItem";
import { deleteCartItem } from "../../../utils/cart/deleteCartItem";
import { ICartItem, ICartSliceState } from "../../../types/cart.types";
import { calculateTotalPrice } from "../../../utils/cart/calculateTotalPrice";
import { prepareConfigurations } from "../../../utils/cart/prepareConfigurations";
import { calculateTotalItemsAmount } from "../../../utils/cart/calculateTotalItemsAmount";

const initialState: ICartSliceState = {
  items: [],
  totalItemsAmount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      if (!action.payload.configuration) {
        action.payload.configuration = prepareConfigurations(
          action.payload.item.options
        );
      }

      const existingItemIndex = findCartItem(state.items, action.payload);

      if (existingItemIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[existingItemIndex].amount += action.payload.amount;
      }
    },

    incrementCartItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItemIndex = findCartItem(state.items, action.payload);
      state.items[existingItemIndex].amount++;
    },

    decrementCartItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItemIndex = findCartItem(state.items, action.payload);
      const item = state.items[existingItemIndex];
      if (item.amount > 1) {
        item.amount--;
      } else {
        state.items.splice(existingItemIndex, 1);
      }
    },

    deleteItemFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = deleteCartItem(state.items, action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.startsWith("cart/");
      },
      (state) => {
        state.totalItemsAmount = calculateTotalItemsAmount(state.items);
        state.totalPrice = calculateTotalPrice(state.items);
      }
    );
  },
});

export const {
  addItemToCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
  deleteItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
