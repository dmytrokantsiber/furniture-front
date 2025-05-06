import { ChangeEvent, FC } from "react";

import { useSearchParams } from "react-router-dom";

import { Pagination, Stack } from "@mui/material";

import * as Styles from "./styles";
import { Product } from "../../../types/products.types";
import { useTranslations } from "../../../hooks/useTranslations";
import { formatQueryParams } from "../../../utils/query/formatQueryParams";
import ProductCard from "../../common/product-card/product-card.component";

interface IProductsProps {
  productsData: Product[];
  maxPage: number;
}

const Products: FC<IProductsProps> = ({ productsData, maxPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const classes = Styles.useStyles();
  const { t } = useTranslations();

  const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
    formatQueryParams(searchParams, setSearchParams, "page", String(page));
  };

  return (
    <Styles.ProductsWrapper>
      {productsData && productsData.length > 0 ? (
        <Styles.List>
          {productsData.map((entries) => {
            return <ProductCard key={entries.productCode} element={entries} />;
          })}
        </Styles.List>
      ) : (
        <Styles.NotFound>
          <p>{t["catalog_page.products_not-found"]}</p>
        </Styles.NotFound>
      )}
      <Styles.Pagination>
        <Stack spacing={2}>
          <Pagination
            classes={{ root: classes.root }}
            count={maxPage}
            page={Number(searchParams.get("page")) || 1}
            onChange={handlePageChange}
          />
        </Stack>
      </Styles.Pagination>
    </Styles.ProductsWrapper>
  );
};

export default Products;
