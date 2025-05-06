import { FC } from "react";
import { useTranslations } from "../../../hooks/useTranslations";
import { ICartItem } from "../../../types/cart.types";
import * as Styles from "./styles";

interface IProductMiniCardProps {
  cartItem: ICartItem;
}

const ProductMiniCard: FC<IProductMiniCardProps> = ({ cartItem }) => {
  const { lang } = useTranslations();

  return (
    <Styles.ProductMiniCardWrapper to={`/product/${cartItem.item.productCode}`}>
      <Styles.Image src={cartItem.item.images[0]} />
      <Styles.Info>
        <Styles.Title>
          {cartItem.item.name.translations[lang].value}
        </Styles.Title>
        <Styles.Configuration>
          {cartItem.configuration
            ? Object.entries(cartItem.configuration).map(([key, option]) => {
                return (
                  <div key={key}>
                    <Styles.ConfigurationTitle>
                      {option.label[lang].value}:
                    </Styles.ConfigurationTitle>
                    <Styles.ConfigurationText>
                      {option.translations[lang].value}
                    </Styles.ConfigurationText>
                  </div>
                );
              })
            : null}
        </Styles.Configuration>
      </Styles.Info>
    </Styles.ProductMiniCardWrapper>
  );
};

export default ProductMiniCard;
