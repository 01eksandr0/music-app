import { createSlice } from "@reduxjs/toolkit";

const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState: { status: false, id: "" },
  reducers: {
    openInfo: {
      reducer(state, action) {
        return { status: true, id: action.payload.id };
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    closeInfo: {
      reducer(state) {
        return { status: false, id: "" };
      },
      prepare() {
        return {};
      },
    },
  },
});
export const { openInfo, closeInfo } = moreInfoSlice.actions;
export const moreInfoReducer = moreInfoSlice.reducer;
