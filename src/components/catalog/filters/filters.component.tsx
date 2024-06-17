import { FC, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { Slider } from "@mui/material";

import * as Styles from "./styles";
import FiltersList from "./filters-list.component";
import { IFilter } from "../../../types/filter.types";
import usePriceSlider from "../../../hooks/usePriceSlider";
import { useTranslations } from "../../../hooks/useTranslations";
import { countQueryParams } from "../../../utils/query/countQueryParams";

interface IFiltersProps {
  filtersData: IFilter[];
  isError: boolean;
  minPrice: number;
  maxPrice: number;
  count: number;
}

const Filters: FC<IFiltersProps> = ({
  filtersData,
  isError,
  maxPrice,
  minPrice,
  count,
}) => {
  const { t } = useTranslations();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    setCurrentSliderValues,
    currentSliderValues,
    handleChange,
    handleMinInput,
    handleMaxInput,
    handleSubmitPriceRange,
  } = usePriceSlider({ filtersData, minPrice, maxPrice });

  const handleReset = () => {
    setSearchParams([]);
    if (filtersData) {
      setCurrentSliderValues([minPrice, maxPrice]);
    }
  };

  useEffect(() => {
    if (isError) {
      setSearchParams([]);
    }
  }, [isError, setSearchParams]);

  return (
    <Styles.FilterWrapper>
      <Styles.Test>
        <Styles.TopInfo>
          <Styles.ProductsCount>
            <p>
              {t["catalog_page.products_count"]}
              <b>{count}</b>
            </p>
          </Styles.ProductsCount>
          {countQueryParams(searchParams) > 0 ? (
            <Styles.ResetButton onClick={handleReset}>
              <p>X</p>
            </Styles.ResetButton>
          ) : null}
        </Styles.TopInfo>
        {filtersData ? (
          <>
            <Styles.InputsWrapper>
              <Styles.Input
                value={currentSliderValues[0] || 0}
                type="number"
                onChange={(e) => handleMinInput(e)}
                min={minPrice}
                max={maxPrice}
              />{" "}
              —{" "}
              <Styles.Input
                value={currentSliderValues[1] || 1}
                type="number"
                onChange={(e) => handleMaxInput(e)}
                min={currentSliderValues[0]}
                max={maxPrice}
              />
              <Styles.FilterButton onClick={handleSubmitPriceRange}>
                Ok
              </Styles.FilterButton>
            </Styles.InputsWrapper>
            <Styles.SliderWrapper>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={currentSliderValues}
                min={minPrice}
                max={maxPrice}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                disableSwap
                sx={{
                  "& .MuiSlider-thumb": {
                    color: "var(--color-green)",
                    boxShadow: "#ebebeb 0 2px 2px",
                    "&:focus, &:hover, &$active": {
                      boxShadow: "#ccc 0 2px 3px 1px",
                    },
                  },
                  "& .MuiSlider-track": {
                    color: "var(--color-green)",
                  },
                  "& .MuiSlider-rail": {
                    color: "#acc4e4",
                  },
                  "& .MuiSlider-active": {
                    color: "var(--color-green)",
                  },
                }}
              />
            </Styles.SliderWrapper>
          </>
        ) : null}
      </Styles.Test>
      <FiltersList filtersData={filtersData} />
    </Styles.FilterWrapper>
  );
};

export default Filters;
