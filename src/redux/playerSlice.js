import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { status: false, id: "" },
  reducers: {
    openPlayer: {
      reducer(state, action) {
        return { status: true, id: action.payload.id };
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    closePlayer: {
      reducer(state) {
        return { status: false, id: "" };
      },
      prepare() {
        return {};
      },
    },
  },
});

export const { openPlayer, closePlayer } = playerSlice.actions;
export const playerReduser = playerSlice.reducer;
