import { configureStore } from "@reduxjs/toolkit";
import blogPostReducer from "./slices/blogPostSlice";

const store = configureStore({
  reducer: {
    blogPost: blogPostReducer,
  },
});

export default store;
