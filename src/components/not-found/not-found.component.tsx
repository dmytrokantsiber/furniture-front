import * as Styles from "./styles";
import { useTranslations } from "../../hooks/useTranslations";

const NotFound = () => {
  const { t } = useTranslations();

  return (
    <Styles.NotFoundWrapper>
      <Styles.Text>{t["not_found_page.text"]}</Styles.Text>
      <Styles.StyledLink to="/">
        {t["not_found_page.returnLink"]}
      </Styles.StyledLink>
    </Styles.NotFoundWrapper>
  );
};

export default NotFound;
