import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const reducerFunction = createSlice({
  name: "learningToolkit",
  initialState,
  reducers: {
    counter: (state, action) => {
      return { ...state, count:action.payload };
    },
    reader: (state, action) => {
      return state;
    },
  },
});
console.log("reducerFunction", reducerFunction);
export const { counter, reader } = reducerFunction.actions;
export default reducerFunction.reducer;
