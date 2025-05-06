import { ChangeEvent, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { IFilter } from "../types/filter.types";
import { formatQueryParams } from "../utils/query/formatQueryParams";

interface IUsePriceSlider {
  filtersData: IFilter[];
  maxPrice: number;
  minPrice: number;
}

const usePriceSlider = ({
  filtersData,
  maxPrice,
  minPrice,
}: IUsePriceSlider) => {
  const [currentSliderValues, setCurrentSliderValues] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (_: Event, newValue: number | number[]): void => {
    if (Array.isArray(newValue)) {
      setCurrentSliderValues(newValue);
    }
  };

  const handleMinInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMinValue = Number(event.target.value);
    if (filtersData) {
      if (newMinValue <= currentSliderValues[1]) {
        setCurrentSliderValues((prev) => [newMinValue, prev[1]]);
      } else {
        setCurrentSliderValues((prev) => [currentSliderValues[1], prev[1]]);
      }
    }
  };

  const handleMaxInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMaxValue = Number(event.target.value);
    if (filtersData) {
      if (newMaxValue <= maxPrice) {
        setCurrentSliderValues((prev) => [prev[0], newMaxValue]);
      } else {
        setCurrentSliderValues((prev) => [prev[0], maxPrice]);
      }
    }
  };

  const handleSubmitPriceRange = (): void => {
    formatQueryParams(
      searchParams,
      setSearchParams,
      "lt",
      String(currentSliderValues[1])
    );
    formatQueryParams(
      searchParams,
      setSearchParams,
      "gt",
      String(currentSliderValues[0])
    );
  };

  useEffect(() => {
    if (Number(searchParams.get("gt")) > Number(searchParams.get("lt"))) {
      searchParams.delete("gt");
      searchParams.delete("lt");
      setSearchParams(searchParams);
    }

    if (filtersData) {
      setCurrentSliderValues([
        Number(searchParams.get("gt")) || minPrice || 0,
        Number(searchParams.get("lt")) || maxPrice || 1,
      ]);
    }
  }, [
    filtersData,
    setCurrentSliderValues,
    searchParams,
    setSearchParams,
    maxPrice,
    minPrice,
  ]);

  return {
    setCurrentSliderValues,
    currentSliderValues,
    handleChange,
    handleMaxInput,
    handleMinInput,
    handleSubmitPriceRange,
  };
};

export default usePriceSlider;
