import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
  loading: false,
  error: null,
};

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    fetchChannelsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.channels = action.payload;
    },
    fetchChannelsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
    },
    fetchChannelsPending(state) {
        state.loading = true;
        state.error = null;
    },
  },
});

export const { fetchChannelsFailure, fetchChannelsSuccess, fetchChannelsPending } = channelsSlice.actions;

export default channelsSlice.reducer;

