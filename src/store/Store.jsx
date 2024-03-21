
import { configureStore } from "@reduxjs/toolkit";
import importedData from '../reducers/Slice'
const store = configureStore({
  reducer: {
    myReducer: importedData,
  },
});
export default store;