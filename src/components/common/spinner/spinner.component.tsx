import { FC } from "react";

import { Grid } from "react-loader-spinner";

import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";
import { translations } from "../../../utils/internationalization/translations";

interface ISpinnerProps {
  text: keyof typeof translations.en;
  width: string;
  height: string;
}

const Spinner: FC<ISpinnerProps> = ({ text, width, height }) => {
  const { t } = useTranslations();

  return (
    <Styles.SpinnerWrapper>
      <Styles.Text>
        <p>{t[text]}</p>
      </Styles.Text>
      <br />
      <Grid
        visible={true}
        height={height}
        width={width}
        color="var(--color-green)"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </Styles.SpinnerWrapper>
  );
};

export default Spinner;
