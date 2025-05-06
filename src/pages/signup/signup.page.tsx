import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux-hooks";
import { BaseContainer } from "../../components/common/base-container/styles";
import SignUpForm from "../../components/auth/signup-page/signup-form.component";

const SignUpPage = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <SignUpForm />
    </BaseContainer>
  );
};

export default SignUpPage;
