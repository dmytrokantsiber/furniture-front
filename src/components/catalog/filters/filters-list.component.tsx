import { FC, memo } from "react";

import { useSearchParams } from "react-router-dom";

import * as Styles from "./styles";
import Checkbox from "../../common/checkbox/checkbox.component";
import { useTranslations } from "../../../hooks/useTranslations";
import { IFilter, IFilterValue } from "../../../types/filter.types";
import { formatQueryParams } from "../../../utils/query/formatQueryParams";

interface IFiltersListProps {
  filtersData: IFilter[];
}

const FiltersList: FC<IFiltersListProps> = ({ filtersData }) => {
  const { lang } = useTranslations();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (filter: IFilter, element: IFilterValue) => {
    formatQueryParams(
      searchParams,
      setSearchParams,
      filter.key,
      element.translations.en.value
    );
  };

  return (
    <>
      {filtersData &&
        filtersData.map((filter, index) => {
          if (filter.values.length > 0) {
            return (
              <div key={filter.key}>
                <Styles.Title>
                  {filter.values[0].translations[lang].label}
                </Styles.Title>
                <div>
                  {filter.values.map((element) => {
                    if (typeof element === "object") {
                      return (
                        <Styles.SingleInputWrapper
                          key={element.filterKey}
                          onClick={() => handleClick(filter, element)}
                        >
                          {<Checkbox isChecked={element.isActive} />}
                          <Styles.Label>
                            {element.translations[lang].value}
                            {element.count ? (
                              <Styles.InputCount>
                                ({element.count})
                              </Styles.InputCount>
                            ) : null}
                          </Styles.Label>
                        </Styles.SingleInputWrapper>
                      );
                    }
                    return null;
                  })}
                </div>
                <br />
                {index !== filtersData.length - 1 && <hr />}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};

export default memo(FiltersList);
