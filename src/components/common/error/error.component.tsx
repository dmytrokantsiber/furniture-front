import { FC } from "react";

import * as Styles from "./styles";
import errorImage from "../../../assets/images/error.png";
import { useTranslations } from "../../../hooks/useTranslations";

interface IErrorProps {
  status: number;
}

const Error: FC<IErrorProps> = ({ status }) => {
  const { t } = useTranslations();
  switch (status) {
    case 404:
      return (
        <Styles.ErrorWrapper>
          <Styles.Text>{t["error.unexistingProduct"]}</Styles.Text>
          <Styles.Image src={errorImage} alt="Неіснуючий товар" />
        </Styles.ErrorWrapper>
      );

    default:
      return (
        <Styles.ErrorWrapper>
          <Styles.Text> {t["error.unexpectedError"]}</Styles.Text>
          <Styles.Image src={errorImage} alt="Unexisting product" />
        </Styles.ErrorWrapper>
      );
  }
};

export default Error;
