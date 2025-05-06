import { FC } from "react";

import * as Styles from "./styles";
import { ReactComponent as CheckMarkSVG } from "../../../assets/icons/checkmark.svg";

interface IChecboxProps {
  isChecked: boolean;
}

const Checkbox: FC<IChecboxProps> = ({ isChecked }) => {
  return (
    <Styles.CheckboxWrapper $isChecked={isChecked}>
      {isChecked ? <CheckMarkSVG /> : null}
    </Styles.CheckboxWrapper>
  );
};

export default Checkbox;
