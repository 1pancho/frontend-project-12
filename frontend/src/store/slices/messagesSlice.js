import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
}

const messagesSlice  = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    fetchMessagessFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMessagesPending(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.messages = action.payload;
    },
  }
});


export const { fetchMessagesPending, fetchMessagesSuccess, fetchMessagessFailure } = messagesSlice.actions;
export default messagesSlice.reducer;



