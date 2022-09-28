import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    msgConfirm: {},
    msgError: {},
  },
  reducers: {
    setMsgConfirm: (state, action) => {
      state.msgConfirm = action.payload;
    },
    setMsgError: (state, action) => {
      state.msgError = action.payload;
    },
    setClean: (state, action) => {
      state.msgConfirm = action.payload;
      state.msgError = action.payload;
    },
  },
});

export const { setMsgConfirm, setMsgError, setClean } = messagesSlice.actions;
export default messagesSlice.reducer;

export const cleanMsg = () => (dispatch) => {
  dispatch(setClean({}));
};
