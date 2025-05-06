import { mainApi } from "../api";
import { Order } from "../../../types/orders.types";

export const ordersApi = mainApi
  .enhanceEndpoints({ addTagTypes: ["Order"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      addOrder: builder.mutation<Order, Order>({
        query: (data) => {
          return {
            url: "addOrder",
            method: "POST",
            credentials: "include",
            body: data,
          };
        },
        invalidatesTags: ["Order"],
      }),
      getOrdersByUser: builder.query<Order[], null>({
        providesTags: ["Order"],
        query: () => {
          return {
            url: "getOrdersByUser",
            method: "GET",
            credentials: "include",
          };
        },
      }),
    }),
  });

export const { useAddOrderMutation, useGetOrdersByUserQuery } = ordersApi;
