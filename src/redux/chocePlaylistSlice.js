import { createSlice } from "@reduxjs/toolkit";

const chocePlaylistSlice = createSlice({
  name: "chocePlaylistSlice",
  initialState: { status: false, id: "" },
  reducers: {
    openChoce: {
      reducer(state, action) {
        return { status: true, id: action.payload };
      },
      prepare(id) {
        return { payload: id };
      },
    },
    closeChoce: {
      reducer(state) {
        return { status: false };
      },
      prepare() {
        return { payload: {} };
      },
    },
  },
});
export const { openChoce, closeChoce } = chocePlaylistSlice.actions;
export const chocePlaylistReducer = chocePlaylistSlice.reducer;
