import * as Styles from "./styles";
import { useCart } from "../../hooks/useCart";
import OrderForm from "./order-form/order-form.component";
import { useTranslations } from "../../hooks/useTranslations";
import CartItemList from "./cart-item-list/cart-item-list.component";

const Cart = () => {
  const { t } = useTranslations();
  const { handleClearCart } = useCart();

  return (
    <Styles.CartWrapper>
      <Styles.Header>
        <Styles.Title>🛒 {t["cart_page.header-title"]}</Styles.Title>
        <Styles.ClearCartButton onClick={handleClearCart}>
          🗑️ {t["cart_page.header-clear_button"]}
        </Styles.ClearCartButton>
      </Styles.Header>
      <hr style={{ border: "1px solid black" }} />
      <CartItemList />
      <OrderForm />
    </Styles.CartWrapper>
  );
};

export default Cart;
