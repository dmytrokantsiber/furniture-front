import * as Styles from "./styles";
import { useTranslations } from "../../hooks/useTranslations";
import BaseContainer from "../common/base-container/base-container.wrapper";
import { ReactComponent as FacebookSVG } from "../../assets/icons/facebook-logo.svg";
import { ReactComponent as WhatsappSVG } from "../../assets/icons/whatsapp-logo.svg";
import { ReactComponent as InstagramSVG } from "../../assets/icons/instagram-logo.svg";

const Footer = () => {
  const { t } = useTranslations();
  return (
    <Styles.Footer>
      <BaseContainer>
        <Styles.FooterWrapper>
          <Styles.Icons>
            <Styles.Logo>Furniture React App 🛋️</Styles.Logo>
            <Styles.Socials>
              <Styles.Link href="https://www.facebook.com/" target="_blank">
                <FacebookSVG width="50px" />
              </Styles.Link>
              <Styles.Link href="https://www.instagram.com/" target="_blank">
                <InstagramSVG width="50px" />
              </Styles.Link>
              <Styles.Link href="https://web.whatsapp.com/#" target="_blank">
                <WhatsappSVG width="50px" />
              </Styles.Link>
            </Styles.Socials>
          </Styles.Icons>
          <Styles.Info>
            <p>{t["footer.info.about"]}</p>
            <p>{t["footer.info.payment"]}</p>
            <p>{t["footer.info.delivery"]}</p>
            <p>{t["footer.info.response"]}</p>
            <p>{t["footer.info.sales"]}</p>
            <p>{t["footer.info.warranty"]}</p>
          </Styles.Info>
          <Styles.Contacts>
            <a href="mailto:dmytro.kantsiber7@gmail.com">
              📧 dmytro.kantsiber7@gmail.com
            </a>
            <a href="tel:+123123123">📞 +38(067)123-45-67</a>
            <p>🌍 {t["footer.info.address"]}</p>
            <p>🕓 {t["footer.info.workTime"]}</p>
          </Styles.Contacts>
        </Styles.FooterWrapper>
      </BaseContainer>
    </Styles.Footer>
  );
};

export default Footer;
