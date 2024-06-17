import { Link, useParams } from "react-router-dom";

import * as Styles from "./styles";
import Catalog from "../catalog/catalog.component";
import { useTranslations } from "../../hooks/useTranslations";
import { useGetSubcategoriesQuery } from "../../store/api/products/products.api";

const Category = () => {
  const { category } = useParams();
  const { lang } = useTranslations();
  const { data } = useGetSubcategoriesQuery(category);

  return (
    <Styles.CategoryWrapper>
      <Styles.Links>
        {data
          ? data.map((subcategory) => {
              return (
                <Styles.Text key={subcategory.value}>
                  <Link to={`/catalog/${category}/${subcategory.value}`}>
                    {subcategory.translations[lang].value}
                  </Link>
                </Styles.Text>
              );
            })
          : null}
      </Styles.Links>
      <hr style={{ border: "1px solid black" }} />
      <Catalog />
    </Styles.CategoryWrapper>
  );
};

export default Category;
