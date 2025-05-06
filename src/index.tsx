import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { router } from "./router/router";
import { persistor, store } from "./store/store";
import { GlobalStyles } from "./utils/global-styles";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        draggable
        autoClose={3000}
        closeOnClick
        theme="light"
        limit={2}
      />
    </PersistGate>
  </Provider>
);
