type FilterTranslation = { value: string; label: string };

export interface IFilterValue {
  filterKey: string;
  count: number;
  translations: {
    en: FilterTranslation;
    ua: FilterTranslation;
  };
  isActive: boolean;
}
export interface IFilter {
  key: string;
  values: IFilterValue[];
}
export interface IGetFiltersResponse extends IFilter {}

export interface IGetFiltersInputs {
  key: string;
  values: string[];
}

////////////////////////////////////////////////////////////////

export interface IFilterSliceState {
  currentFilters: IGetFiltersResponse[] | [];
}
