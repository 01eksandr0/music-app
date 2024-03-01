import { createSlice } from "@reduxjs/toolkit";

const createPlayerSlice = createSlice({
  name: "createPlayerSlice",
  initialState: false,
  reducers: {
    openCreatePlayer: {
      reducer(state) {
        return true;
      },
      prepare() {
        return {};
      },
    },
    closeCreatePlayer: {
      reducer(state) {
        return false;
      },
      prepare() {
        return {};
      },
    },
  },
});
export const { openCreatePlayer, closeCreatePlayer } =
  createPlayerSlice.actions;
export const createPlayerReducer = createPlayerSlice.reducer;
