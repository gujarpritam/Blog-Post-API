import { createSlice } from "@reduxjs/toolkit";

export const blogPostSlice = createSlice({
  name: "blogPost",

  initialState: {
    value: null,
  },

  reducers: {
    setBlogPost: (state, action) => {
      state.value = action.payload;
    },

    unSetBlogPost: (state) => {
      state.value = null;
    },
  },
});

export const { setBlogPost, unSetBlogPost } = blogPostSlice.actions;
export default blogPostSlice.reducer;
