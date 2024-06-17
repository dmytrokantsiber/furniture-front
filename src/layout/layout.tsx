import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import * as Styles from "./styles";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import { useCheckUserQuery } from "../store/api/auth/auth.api";
import Spinner from "../components/common/spinner/spinner.component";
import ScrollToTopComponent from "../components/common/scroll-to-top/scroll-to-top.component";

const Layout = () => {
  const { isLoading } = useCheckUserQuery();
  return !isLoading ? (
    <>
      <ScrollToTopComponent />
      <Header />
      <Styles.MainContainer>
        <Outlet />
      </Styles.MainContainer>
      <ScrollToTop smooth />
      <Footer />
    </>
  ) : (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner text="spinner.loading" width="180" height="180" />
    </div>
  );
};

export default Layout;
