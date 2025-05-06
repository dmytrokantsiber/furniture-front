import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import * as Styles from "./styles";
import Catalog from "../catalog/catalog.component";
import NotFound from "../not-found/not-found.component";
import { ISubcategory } from "../../types/products.types";
import { useTranslations } from "../../hooks/useTranslations";
import { useGetSubcategoriesQuery } from "../../store/api/products/products.api";
import Spinner from "../common/spinner/spinner.component";

const Subcategory = () => {
  const { category, subcategory } = useParams();
  const { lang } = useTranslations();
  const { data, isLoading } = useGetSubcategoriesQuery(category);
  const [subcategoryInfo, setSubcategoryInfo] = useState<ISubcategory>();

  useEffect(() => {
    data?.forEach((el) => {
      if (el.value === subcategory) {
        setSubcategoryInfo(el);
      }
    });
  }, [setSubcategoryInfo, subcategory, data]);

  if (isLoading) {
    return <Spinner text="spinner.loading" width="180" height="180" />;
  }

  if (subcategoryInfo) {
    return (
      <>
        <Styles.Text>{subcategoryInfo.translations[lang].value}</Styles.Text>
        <Catalog />
      </>
    );
  }
  if (!subcategoryInfo) {
    return <NotFound />;
  }
  return null;
};

export default Subcategory;
