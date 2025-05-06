import { Link } from "react-router-dom";

import * as Styles from "./styles";
import Button from "../../common/button/button.component";
import { useTranslations } from "../../../hooks/useTranslations";
import { ReactComponent as EmptyCartSVG } from "../../../assets/icons/empty-cart.svg";

const EmptyCart = () => {
  const { t } = useTranslations();
  return (
    <Styles.EmptyCartWrapper>
      <Styles.Title>{t["cart_page.empty.title"]}</Styles.Title>
      <Styles.Text>{t["cart_page.empty.text-one"]}</Styles.Text>
      <Styles.Text>{t["cart_page.empty.text-two"]}</Styles.Text>
      <Styles.Image>
        <EmptyCartSVG />
      </Styles.Image>
      <Styles.Buttons>
        <Link to={"/"}>
          <Button type="backToMain" styles={{ width: 280, height: 50 }} />
        </Link>
        <Link to={"/profile"}>
          <Button type="orders" styles={{ width: 280, height: 50 }} />
        </Link>
      </Styles.Buttons>
    </Styles.EmptyCartWrapper>
  );
};

export default EmptyCart;
