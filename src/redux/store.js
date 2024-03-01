import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playerReduser } from "./playerSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { favoritesTracksReducer } from "./favoriteTracksSlice";
import { moreInfoReducer } from "./moreInfoSlice";
import { favoriteArtistsReduser } from "./favoriteArtistsSlice";
import { createPlayerReducer } from "./createPlayerSlice";
import { playListsReducer } from "./playListsSlice";
import { chocePlaylistReducer } from "./chocePlaylistSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favoritesTracks", "favoriteArtists", "playlists"],
};

const rootReducer = combineReducers({
  player: playerReduser,
  favoritesTracks: favoritesTracksReducer,
  moreInfo: moreInfoReducer,
  favoriteArtists: favoriteArtistsReduser,
  playlists: playListsReducer,
  createPlaylist: createPlayerReducer,
  chocePlaylist: chocePlaylistReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
