import { ChangeEvent, useEffect } from "react";

import { useParams, useSearchParams } from "react-router-dom";

import * as Styles from "./styles";
import Filters from "./filters/filters.component";
import Error from "../common/error/error.component";
import Products from "./products/products.component";
import Spinner from "../common/spinner/spinner.component";
import { useTranslations } from "../../hooks/useTranslations";
import { productsApi } from "../../store/api/products/products.api";
import { formatQueryParams } from "../../utils/query/formatQueryParams";
import { prepareSearchParams } from "../../utils/query/prepareSearchParams";

const Catalog = () => {
  const { category, subcategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [triggerGoodies, { data, isFetching, isLoading, isError }] =
    productsApi.endpoints.getGoodies.useLazyQuery();
  const { t } = useTranslations();

  useEffect(() => {
    const finalSearchParams = prepareSearchParams(searchParams);
    window.scrollTo(0, 0);
    triggerGoodies(
      {
        filterParams: finalSearchParams,
        category: category || "",
        subcategory: subcategory || "",
      },
      true
    );
  }, [searchParams, triggerGoodies, category, subcategory]);

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    formatQueryParams(searchParams, setSearchParams, "sort", e.target.value);
  };

  if (isLoading || !data) {
    return <Spinner text="spinner.loading" width="180" height="180" />;
  }

  if (isError) {
    return <Error status={500} />;
  }

  return (
    <Styles.CatalogWrapper
      style={{
        opacity: isFetching ? 0.25 : 1,
        pointerEvents: isFetching ? "none" : "initial",
      }}
    >
      <Styles.TopInfo>
        <Styles.Select
          value={searchParams.get("sort") || "default"}
          onChange={(e) => handleSortByChange(e)}
        >
          <option value="default">
            {t["catalog_page.dropdown.relevancy"]}
          </option>
          <option value="price-asc">
            {t["catalog_page.dropdown.price-asc"]}
          </option>
          <option value="price-desc">
            {t["catalog_page.dropdown.price-desc"]}
          </option>
        </Styles.Select>
      </Styles.TopInfo>
      <Styles.Main>
        <Filters
          filtersData={data.filters}
          isError={isError}
          minPrice={data.minPrice}
          maxPrice={data.maxPrice}
          count={data.count}
        />
        <Products productsData={data.products} maxPage={data.maxPage} />
      </Styles.Main>
    </Styles.CatalogWrapper>
  );
};

export default Catalog;
