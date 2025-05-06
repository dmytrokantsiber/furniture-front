import { Order } from "./orders.types";

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  orders: Order[];
};

// RTK Query types
export interface ISignInInputs {
  email: string;
  password: string;
}

export interface ISignUpInputs extends ISignInInputs {
  name: string;
  surname: string;
  confirmPassword: string;
  phone: string;
}

export interface ILogoutInputs {
  user: Partial<User>;
}

interface IUserResponce {
  user: User;
}

export interface ISignInResponse extends IUserResponce {
  accessToken: string;
}

export interface IRefreshResponse extends IUserResponce {
  accessToken: string;
}
export interface ISignUpResponse extends IUserResponce {}

export interface ILogoutResponse extends IUserResponce {}

export interface IUpdateUserInfo extends IUserResponce {}

export interface IUserProfileInfo {
  name: string;
  surname: string;
}

// AuthSlice types
export interface IAuthSliceState {
  user: Partial<User>;
  isAuth: boolean;
  userAuthCheck: boolean;
  isLoading: boolean;
  error: any;
}
