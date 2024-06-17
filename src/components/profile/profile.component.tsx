import * as Styles from "./styles";
import UserInfo from "./user-info/user-info.component";
import OrderList from "./order-list/order-list.component";

const Profile = () => {
  return (
    <Styles.ProfileWrapper>
      <OrderList />
      <UserInfo />
    </Styles.ProfileWrapper>
  );
};

export default Profile;
