import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { mainApi } from "./api/api";
import authReducer from "./slices/auth/auth.slice";
import cartReducer from "./slices/cart/cart.slice";
import internationalizationReducer from "./slices/internationalization/internationalization.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};
// "internationalizationReducer"
const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  authReducer,
  internationalizationReducer,
  cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([mainApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
