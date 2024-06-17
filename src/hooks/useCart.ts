import { useCallback } from "react";

import { toast } from "react-toastify";

import { useAppDispatch } from "./redux-hooks";
import { ICartItem } from "../types/cart.types";
import { useTranslations } from "./useTranslations";
import { IProductConfigurationItem, Product } from "../types/products.types";
import {
  addItemToCart,
  clearCart,
  decrementCartItem,
  deleteItemFromCart,
  incrementCartItem,
} from "../store/slices/cart/cart.slice";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslations();

  const handlePurchaseButtonClick = useCallback(
    (
      data: Product,
      price: number | undefined,
      configuration: Record<string, IProductConfigurationItem> | undefined,
      amount: number
    ): void => {
      const itemData = { ...data };

      if (price) {
        itemData.price = price;
      }

      dispatch(
        addItemToCart({
          item: itemData,
          amount,
          configuration: configuration || undefined,
        })
      );
      toast.success(t["cart.toast.successAdded"], { position: "bottom-right" });
    },
    [dispatch, t]
  );

  const handleDeleteItemFromCart = useCallback(
    (cartItem: ICartItem) => {
      dispatch(deleteItemFromCart(cartItem));
      toast.success(t["cart.toast.successRemove"], {
        position: "bottom-right",
      });
    },
    [dispatch, t]
  );

  const handleDecrementCartItem = useCallback(
    (cartItem: ICartItem) => {
      dispatch(decrementCartItem(cartItem));
      toast.success(t["cart.toast.successRemove"], {
        position: "bottom-right",
      });
    },
    [dispatch, t]
  );

  const handleIncrementCartItem = useCallback(
    (cartItem: ICartItem) => {
      dispatch(incrementCartItem(cartItem));
      toast.success(t["cart.toast.successAdded"], { position: "bottom-right" });
    },
    [dispatch, t]
  );

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
    toast.success(t["cart.toast.cartCleared"], { position: "bottom-right" });
  }, [dispatch, t]);

  return {
    handlePurchaseButtonClick,
    handleDeleteItemFromCart,
    handleClearCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
  };
};
