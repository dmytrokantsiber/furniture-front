import { FC, memo } from "react";

import * as Styles from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { ICartItem } from "../../../../types/cart.types";
import { useTranslations } from "../../../../hooks/useTranslations";
import ProductMiniCard from "../../../common/product-mini-card/product-mini-card.component";

interface ISingleCartItemProps {
  cartItem: ICartItem;
}

const SingleCartItem: FC<ISingleCartItemProps> = ({ cartItem }) => {
  const { t } = useTranslations();

  const {
    handleDecrementCartItem,
    handleIncrementCartItem,
    handleDeleteItemFromCart,
  } = useCart();

  return (
    <Styles.SingleCartItemWrapper>
      <ProductMiniCard cartItem={cartItem} />
      <Styles.Info>
        <Styles.Amount>
          <Styles.AmountButton
            onClick={() => handleDecrementCartItem(cartItem)}
          >
            -
          </Styles.AmountButton>
          <Styles.AmountText>{cartItem.amount}</Styles.AmountText>
          <Styles.AmountButton
            onClick={() => handleIncrementCartItem(cartItem)}
          >
            +
          </Styles.AmountButton>
        </Styles.Amount>
        <Styles.Price>
          {cartItem.item.price * cartItem.amount} {t["product_page.currency"]}
        </Styles.Price>
        <Styles.RemoveButton onClick={() => handleDeleteItemFromCart(cartItem)}>
          X
        </Styles.RemoveButton>
      </Styles.Info>
    </Styles.SingleCartItemWrapper>
  );
};

export default memo(SingleCartItem);
