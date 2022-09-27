import { createSlice } from "@reduxjs/toolkit";

export const typesSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
    typeDetail: {},
  },
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setOneType: (state, action) => {
      state.typeDetail = action.payload;
    },
  },
});

export const { setTypes, setOneType } = typesSlice.actions;
export default typesSlice.reducer;
