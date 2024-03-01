import { createSlice, nanoid } from "@reduxjs/toolkit";

const playListsSlice = createSlice({
  name: "playListsSlice",
  initialState: [],
  reducers: {
    createNewPlaylist: {
      reducer(state, action) {
        state.push({ id: nanoid(), name: action.payload.name, list: [] });
      },
      prepare(name) {
        return { payload: { name } };
      },
    },
    addNewTrackInPlaylist: {
      reducer(state, action) {
        const index = state.findIndex((i) => i.id == action.payload.id);
        state[index].list.push(action.payload.trackId);
      },
      prepare(id, trackId) {
        return { payload: { id, trackId } };
      },
    },
  },
});
export const { createNewPlaylist, addNewTrackInPlaylist } =
  playListsSlice.actions;
export const playListsReducer = playListsSlice.reducer;
