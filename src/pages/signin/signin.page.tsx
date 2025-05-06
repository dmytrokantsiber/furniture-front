import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux-hooks";
import SignInForm from "../../components/auth/signin-page/signin-form.component";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const SignInPage = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <SignInForm />
    </BaseContainer>
  );
};

export default SignInPage;
