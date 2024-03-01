import { createSlice } from "@reduxjs/toolkit";

const favoriteArtistsSlice = createSlice({
  name: "favoriteArtistsSlice",
  initialState: [],
  reducers: {
    addNewArtist: {
      reducer(state, action) {
        state.push(action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    deleteArtist: {
      reducer(state, action) {
        return state.filter((i) => i !== action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
  },
});

export const { addNewArtist, deleteArtist } = favoriteArtistsSlice.actions;
export const favoriteArtistsReduser = favoriteArtistsSlice.reducer;
