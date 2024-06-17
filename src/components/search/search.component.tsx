import { ChangeEvent } from "react";

import { useSearchParams } from "react-router-dom";

import { Pagination, Stack } from "@mui/material";

import * as Styles from "./styles";
import Error from "../common/error/error.component";
import Spinner from "../common/spinner/spinner.component";
import { useTranslations } from "../../hooks/useTranslations";
import ProductCard from "../common/product-card/product-card.component";
import { formatQueryParams } from "../../utils/query/formatQueryParams";
import { useGetSearchByNameProductsQuery } from "../../store/api/products/products.api";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const classes = Styles.useStyles();
  const { t } = useTranslations();

  const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams.toString());
  };
  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    formatQueryParams(searchParams, setSearchParams, "sort", e.target.value);
  };
  const {
    data: searchResults,
    isFetching,
    isLoading,
    isError,
  } = useGetSearchByNameProductsQuery({
    search: searchParams.get("search") || "",
    page: searchParams.get("page") || "1",
    sort: searchParams.get("sort") || "",
  });

  if (isLoading) {
    return <Spinner text="spinner.loading" width="180" height="180" />;
  }
  if (isError) {
    return <Error status={500} />;
  }

  return (
    <Styles.SearchComponentWrapper
      style={{
        opacity: isFetching ? 0.25 : 1,
        pointerEvents: isFetching ? "none" : "initial",
      }}
    >
      <Styles.TopInfo>
        <Styles.Title>
          {t["search_page.search"]} - {searchParams.get("search")}
        </Styles.Title>
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
      {searchResults?.count === 0 ? (
        <Error status={404} />
      ) : (
        <>
          <Styles.ProductCardsList>
            {searchResults?.data.map((element) => {
              return (
                <ProductCard key={element.productCode} element={element} />
              );
            })}
          </Styles.ProductCardsList>
          <Styles.Pagination>
            <Stack spacing={2}>
              <Pagination
                count={searchResults?.maxPage}
                page={Number(searchParams.get("page")) || 1}
                onChange={handlePageChange}
                classes={{ root: classes.root }}
              />
            </Stack>
          </Styles.Pagination>
        </>
      )}
    </Styles.SearchComponentWrapper>
  );
};

export default Search;
