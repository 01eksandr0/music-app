import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { status: false, list: [] },
  reducers: {
    openPlayer: {
      reducer(state, action) {
        return { status: true, list: [...action.payload.list] };
      },
      prepare(list) {
        return { payload: { list: [...list] } };
      },
    },
    closePlayer: {
      reducer(state) {
        return { status: false, list: [] };
      },
      prepare() {
        return {};
      },
    },
  },
});

export const { openPlayer, closePlayer } = playerSlice.actions;
export const playerReduser = playerSlice.reducer;
