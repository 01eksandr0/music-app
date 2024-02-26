import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { status: false, id: "" },
  reducers: {
    openPlayer: {
      reducer(state, action) {
        state.status = true;
        state.id = action.payload.id;
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
  },
});
export const { openPlayer } = playerSlice.actions;
export const playerReduser = playerSlice.reducer;
