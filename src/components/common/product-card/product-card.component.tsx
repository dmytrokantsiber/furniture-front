import { FC } from "react";

import * as Styles from "./styles";
import Button from "../button/button.component";
import { useCart } from "../../../hooks/useCart";
import { Product } from "../../../types/products.types";
import { useTranslations } from "../../../hooks/useTranslations";

interface IProductCardProps {
  element: Product;
}

const ProductCard: FC<IProductCardProps> = ({ element }) => {
  const { t, lang } = useTranslations();
  const { handlePurchaseButtonClick } = useCart();

  return (
    <Styles.ProductCardWrapper>
      <Styles.CardLink to={`/product/${element.productCode}`}>
        <Styles.Image src={element.images[0]} />
      </Styles.CardLink>
      <Styles.CardLink to={`/product/${element.productCode}`}>
        <Styles.Title>{element.name.translations[lang].value}</Styles.Title>
      </Styles.CardLink>
      <Styles.Price>
        💰 {element.price} {t["product_page.currency"]}
      </Styles.Price>
      <Button
        handleClick={() =>
          handlePurchaseButtonClick(element, element.price, undefined, 1)
        }
        type="purchase"
        styles={{ width: 140, height: 50 }}
      />
    </Styles.ProductCardWrapper>
  );
};

export default ProductCard;
