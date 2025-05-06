import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux-hooks";
import Profile from "../../components/profile/profile.component";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <Profile />
    </BaseContainer>
  );
};

export default ProfilePage;
