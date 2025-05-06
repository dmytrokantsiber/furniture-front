import { FC } from "react";

import { useParams } from "react-router-dom";

import * as Styles from "./styles";
import { IProductInfoItem } from "../../../../types/products.types";
import { useTranslations } from "../../../../hooks/useTranslations";

interface IProductBreadcrumbsProps {
  category?: IProductInfoItem;
  subcategory?: IProductInfoItem;
  productName?: IProductInfoItem;
}

const ProductBreadcrumbs: FC<IProductBreadcrumbsProps> = ({
  category,
  subcategory,
  productName,
}) => {
  const { productCode } = useParams();
  const { lang } = useTranslations();
  return (
    <Styles.BreadcrumbsWrapper>
      <Styles.Item to="/">🏠 {" > "}</Styles.Item>
      {category ? (
        <Styles.Item to={`/catalog/${category.translations.en.value}`}>
          {category.translations[lang].value.charAt(0).toUpperCase() +
            category.translations[lang].value.slice(1)}
          {" > "}
        </Styles.Item>
      ) : null}
      {category && subcategory ? (
        <Styles.Item
          to={`/catalog/${category.translations.en.value}/${subcategory.translations.en.value}`}
        >
          {subcategory.translations[lang].value} {" > "}
        </Styles.Item>
      ) : null}
      {productName ? (
        <Styles.Item to={`/product/${productCode}`}>
          {productName.translations[lang].value}
        </Styles.Item>
      ) : null}
    </Styles.BreadcrumbsWrapper>
  );
};

export default ProductBreadcrumbs;
