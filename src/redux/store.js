import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playerReduser } from "./playerSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { favoritesTracksReducer } from "./favoriteTracksSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favoritesTracks"],
};

const rootReducer = combineReducers({
  player: playerReduser,
  favoritesTracks: favoritesTracksReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
