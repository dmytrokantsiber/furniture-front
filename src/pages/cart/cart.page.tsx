import Cart from "../../components/cart/cart.component";
import { useAppSelector } from "../../hooks/redux-hooks";
import EmptyCart from "../../components/cart/empty-cart/empty-cart.component";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cartReducer);

  return (
    <BaseContainer>{items.length > 0 ? <Cart /> : <EmptyCart />}</BaseContainer>
  );
};

export default CartPage;
