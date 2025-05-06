import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import * as Styles from "./styles";
import Error from "../common/error/error.component";
import Spinner from "../common/spinner/spinner.component";
import ProductImages from "./product-images/product-images.component";
import { IProductConfigurationItem } from "../../types/products.types";
import AdditionalInfo from "./additional-info/additional-info.component";
import ProductMainInfo from "./product-main-info/product-main-info.component";
import { prepareConfigurations } from "../../utils/cart/prepareConfigurations";
import { useGetSingleProductQuery } from "../../store/api/products/products.api";
import ProductBreadcrumbs from "../common/breadcrumbs/product-breadcrumbs/product-breadcrumbs.component";

const Product = () => {
  const { productCode } = useParams();
  const { data, isLoading, isSuccess, isError } =
    useGetSingleProductQuery(productCode);
  const [price, setPrice] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, IProductConfigurationItem>
  >({});

  // set default productConfig
  useEffect(() => {
    if (data) {
      const defaultOptions = prepareConfigurations(data.options);
      setSelectedOptions(defaultOptions);
    }
  }, [data]);

  // calculate product price
  useEffect(() => {
    if (data) {
      const totalPrice = Object.values(selectedOptions).reduce(
        (acc, option) => {
          return acc + (option ? option.additionalPrice : 0);
        },
        0
      );

      setPrice(data.price + totalPrice);
    }
  }, [selectedOptions, setPrice, data]);

  if (isLoading) {
    return <Spinner text="spinner.loading" width="180" height="180" />;
  }
  if (isError) {
    return <Error status={500} />;
  }
  if (!data) {
    return <Error status={404} />;
  }

  if (isSuccess) {
    return (
      <Styles.ProductWrapper>
        <ProductBreadcrumbs
          category={data.category}
          subcategory={data.subcategory}
          productName={data.name}
        />
        <Styles.Main>
          <ProductImages images={data.images} />
          <ProductMainInfo
            data={data}
            price={price}
            configuration={selectedOptions}
          />
        </Styles.Main>
        <AdditionalInfo
          data={data}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </Styles.ProductWrapper>
    );
  }
  return null;
};
export default Product;
