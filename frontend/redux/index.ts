/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 15:58:59
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-22 20:35:56
 * @Description:
 */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import media from "./modules/mediaquery";

// create reducer
const reducer = combineReducers({
  media,
});

// redux 持久化配置
const persistConfig = {
  key: "redux-state",
  storage: storage,
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

// redux middleWares
const middleWares = [reduxThunk, reduxPromise];

// store
export const store = configureStore({
  reducer: persistReducerConfig,
  middleware: middleWares,
  devTools: true,
});

// create persist store
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
