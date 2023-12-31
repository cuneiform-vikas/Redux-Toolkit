import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import usersReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import formReducer from "./formSlice";

const rootpersist = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  users: usersReducer,
  form: formReducer,
});

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["form"],
};

const pReducer = persistReducer(persistConfig, rootpersist);

export const store = configureStore({
  reducer: pReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});

export const persist = persistStore(store);
