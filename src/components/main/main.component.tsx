import { Link } from "react-router-dom";

import * as Styles from "./styles";
import { useTranslations } from "../../hooks/useTranslations";

const Main = () => {
  const { t } = useTranslations();

  return (
    <Styles.MainComponentWrapper>
      <Link to="/catalog/beds">
        <Styles.CategoryElement
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2021/11/08/00/30/bedroom-6778193_1280.jpg)",
          }}
        >
          <Styles.Text>{t["main_page.beds"]}</Styles.Text>
        </Styles.CategoryElement>
      </Link>
      <Link to="/catalog/sofas">
        <Styles.CategoryElement
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg)",
          }}
        >
          <Styles.Text>{t["main_page.sofas"]}</Styles.Text>
        </Styles.CategoryElement>
      </Link>
      <Link to="/catalog/chairs">
        <Styles.CategoryElement
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg)",
          }}
        >
          <Styles.Text>{t["main_page.chairs"]}</Styles.Text>
        </Styles.CategoryElement>
      </Link>
      <Link to="/catalog/mattresses">
        <Styles.CategoryElement
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1640003145136-f998284e11de?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <Styles.Text>{t["main_page.mattress"]}</Styles.Text>
        </Styles.CategoryElement>
      </Link>
    </Styles.MainComponentWrapper>
  );
};

export default Main;
