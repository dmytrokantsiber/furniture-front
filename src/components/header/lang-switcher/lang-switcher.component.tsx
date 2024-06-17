import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";

const LangSwitcher = () => {
  const { lang, setCurrentLang } = useTranslations();

  return (
    <Styles.LangSwitcher>
      <Styles.Option
        onClick={() => setCurrentLang("ua")}
        $isActive={lang === "ua" ? true : false}
      >
        УКР
      </Styles.Option>
      <p style={{ fontSize: "20px", margin: 0, cursor: "default" }}>|</p>
      <Styles.Option
        onClick={() => setCurrentLang("en")}
        $isActive={lang === "en" ? true : false}
      >
        ENG
      </Styles.Option>
    </Styles.LangSwitcher>
  );
};

export default LangSwitcher;
