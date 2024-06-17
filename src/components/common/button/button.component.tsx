import { FC } from "react";

import * as Styles from "./styles";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useTranslations } from "../../../hooks/useTranslations";

type ButtonTypes =
  | "signin"
  | "signup"
  | "logout"
  | "profile"
  | "purchase"
  | "cart"
  | "orders"
  | "backToMain"
  | "dropdown";

export type StylesProps = {
  width: number;
  height: number;
};

interface IButtonProps {
  type: ButtonTypes;
  handleClick?: () => void;
  styles: StylesProps;
}

const Button: FC<IButtonProps> = ({ type, handleClick, styles }) => {
  const { t } = useTranslations();
  const { totalItemsAmount } = useAppSelector((state) => state.cartReducer);

  return (
    <Styles.ButtonWrapper>
      <Styles.Button $type={type} onClick={handleClick} $styles={styles}>
        <p>{t[`button.${type}`]}</p>
      </Styles.Button>
      {type === "cart" ? (
        <Styles.Count>
          {totalItemsAmount > 99 ? ">99" : totalItemsAmount}
        </Styles.Count>
      ) : null}
    </Styles.ButtonWrapper>
  );
};
export default Button;
