import * as Styles from "./styles";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useTranslations } from "../../../hooks/useTranslations";
import SingleCartItem from "./single-cart-item/single-cart-item.component";

const CartItemList = () => {
  const { items, totalItemsAmount, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );
  const { t } = useTranslations();

  return (
    <Styles.CartItemListWrapper>
      {items.map((singleCartItem) => {
        return (
          <SingleCartItem
            cartItem={singleCartItem}
            key={JSON.stringify(
              singleCartItem.item._id +
                JSON.stringify(singleCartItem.configuration)
            )}
          />
        );
      })}
      <Styles.Total>
        <Styles.ItemsAmount>
          {t["cart_page.totalAmount"]}&nbsp;
          <span style={{ color: "var(--color-green)" }}>
            {totalItemsAmount} {t["general_amount"]}
          </span>
        </Styles.ItemsAmount>
        <Styles.TotalPrice>
          {t["cart_page.totalPrice"]}&nbsp;
          <span style={{ color: "var(--color-green)" }}>
            {totalPrice} {t["product_page.currency"]}
          </span>
        </Styles.TotalPrice>
      </Styles.Total>
    </Styles.CartItemListWrapper>
  );
};

export default CartItemList;
