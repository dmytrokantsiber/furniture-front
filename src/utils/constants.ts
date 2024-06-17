export const API_URL = process.env.REACT_APP_API_URL;
// "https://furniture-app-backend.onrender.com/api/";

// http://localhost:5000/api/

export const CATEGORIES = ["Beds", "Sofas", "Chairs", "Mattresses"];

export const phoneRegExp =
  /(\+(\d{3}))([ ]*(\d{2})[-]*)((\d{3})[-]*)(\d{2})([-]*)(\d{2})/g;

export const DEFAULT_DELIVERY_METHOD = "address";
export const DEFAULT_PAYMENT_METHOD = "cash";

export const BUTTON_TYPES = {
  SIGN_IN: "signin",
  SIGN_UP: "signup",
  LOGOUT: "logout",
  PROFILE: "profile",
  PURCHASE: "purchase",
  CART: "cart",
};
