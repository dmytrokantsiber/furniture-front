import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

type SingleProductTranslation = {
  value: string;
  label?: string;
};

export interface IProductTranslations {
  en: SingleProductTranslation;
  ua: SingleProductTranslation;
}

export interface IProductInfoItem {
  value: string;
  translations: IProductTranslations;
}

export type IProductAdditionalInfoItems = Record<string, IProductInfoItem>;

export interface IProductConfigurationItem extends IProductInfoItem {
  _id: string;
  label: IProductTranslations;
  additionalPrice: number;
}

export type IProductConfiguration = Record<
  string,
  {
    label: IProductTranslations;
    items: IProductConfigurationItem[];
  }
>;

export type Product = {
  _id: string;
  price: number;
  productCode: string;
  images: string[];
  name: IProductInfoItem;
  category: IProductInfoItem;
  subcategory: IProductInfoItem;
  filterParams: IProductAdditionalInfoItems;
  additionalInfo: IProductAdditionalInfoItems;
  options: IProductConfiguration;
};

//////////////////////////////////////////////////////////////////////////

export interface IProductSliceInitialState {
  minPrice: number;
  maxPrice: number;
}

export interface ISubcategory extends IProductInfoItem {}

//////////////////////////////////////////

export interface ITriggerProduct
  extends LazyQueryTrigger<
    QueryDefinition<
      {
        filterParams: string;
        category: string;
        subcategory: string;
      },
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      Product[],
      "productsApi"
    >
  > {}
