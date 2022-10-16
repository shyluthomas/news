import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  latestNewsfetch: false,
  latestNews:{},
  newsCollectionFetch: false,
  newsCollection: {}

};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {    
    ChangeDarkMode: (state, action) => {
      state.isDark = action.payload;
    }, 
    FetchLatestNews: (state, action) => {
      state.latestNewsfetch = action.payload;
    },
    UpdateLatestNews: (state, action) => {
      state.latestNews = action.payload;
    },
    FetchNewsCollection: (state, action) => {
      state.newsCollectionFetch = action.payload;
    },
    UpdateNewsCollection: (state, action) => {
      state.newsCollection = action.payload;
    }, 
  },
});

export const {  
  ChangeDarkMode, 
  FetchLatestNews,
  UpdateLatestNews,
  FetchNewsCollection,
  UpdateNewsCollection
} = NewsSlice.actions;

export default NewsSlice.reducer;
