import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout";
import MainPage from "../pages/main/main.page";
import CartPage from "../pages/cart/cart.page";
import SignInPage from "../pages/signin/signin.page";
import SignUpPage from "../pages/signup/signup.page";
import SearchPage from "../pages/search/search.page";
import ProductPage from "../pages/product/product.page";
import ProfilePage from "../pages/profile/profile.page";
import CategoryPage from "../pages/category/category.page";
import NotFoundPage from "../pages/not-found/not-found.page";
import SubcategoryPage from "../pages/subcategory/subcategory.page";

import "../index.css";

export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/registration",
        element: <SignUpPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/product/:productCode",
        element: <ProductPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/catalog/:category",
        element: <CategoryPage />,
      },
      {
        path: "/catalog/:category/:subcategory",
        element: <SubcategoryPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
