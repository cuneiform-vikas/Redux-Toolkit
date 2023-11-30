import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./users";
import usersReducer from "./userSlice";
import storage from "redux-persist/lib/storage"; // default to local storage for web apps
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const rootpersist = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  users: usersReducer,
});

const persistConfig = {
  key: "user",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootpersist);

export const store = configureStore({
  reducer: pReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export const persist = persistStore(store);
