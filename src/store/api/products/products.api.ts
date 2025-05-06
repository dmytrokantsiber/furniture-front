import { mainApi } from "../api";
import { IFilter } from "../../../types/filter.types";
import { ISubcategory, Product } from "../../../types/products.types";

export const productsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProduct: builder.query<Product, string | undefined>({
      query: (data) => {
        return {
          url: `getSingleProduct?productCode=${data}`,
          method: "GET",
        };
      },
    }),
    getSubcategories: builder.query<ISubcategory[], string | undefined>({
      query: (data) => {
        return {
          url: `getSubcategories?category=${data}`,
          method: "GET",
        };
      },
    }),
    getGoodies: builder.query<
      {
        products: Product[];
        filters: IFilter[];
        maxPage: number;
        minPrice: number;
        maxPrice: number;
        count: number;
      },
      {
        filterParams: string;
        category: string;
        subcategory: string;
      }
    >({
      query: (data) => {
        return {
          url: `getGoodies`,
          method: "GET",
          params: data,
        };
      },
    }),
    getSearchByNameProducts: builder.query<
      { maxPage: number; count: number; data: Product[] },
      { page: string; search: string; sort: string }
    >({
      query: (data) => {
        return {
          url: `getSearchByNameProducts`,
          method: "GET",
          params: data,
        };
      },
    }),
  }),
});

export const {
  useGetSingleProductQuery,
  useGetGoodiesQuery,
  useGetSubcategoriesQuery,
  useGetSearchByNameProductsQuery,
} = productsApi;
