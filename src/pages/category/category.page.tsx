import { useParams } from "react-router-dom";

import { CATEGORIES } from "../../utils/constants";
import Category from "../../components/category/category.component";
import NotFound from "../../components/not-found/not-found.component";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const FilterPage = () => {
  const { category } = useParams();

  let formattedCategory = category;

  if (formattedCategory) {
    formattedCategory =
      formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);
  }

  if (formattedCategory) {
    if (CATEGORIES.includes(formattedCategory)) {
      return (
        <BaseContainer>
          <Category />
        </BaseContainer>
      );
    } else {
      return <NotFound />;
    }
  }

  return null;
};

export default FilterPage;
