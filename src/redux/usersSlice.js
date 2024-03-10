import { createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { token: "", list: [] },
  reducers: {
    addNewUser: {
      reducer(state, action) {
        state.list.push(action.payload);
        state.token = action.payload.id;
      },
      prepare({ email, name, password }) {
        return { payload: { email, name, password, id: nanoid() } };
      },
    },
    logout: {
      reducer(state) {
        state.token = "";
      },
      prepare() {
        return {};
      },
    },
    login: {
      reducer(state, action) {
        state.token = action.payload;
      },
      prepare(token) {
        return { payload: token };
      },
    },
  },
});

export const { addNewUser, logout, login } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
