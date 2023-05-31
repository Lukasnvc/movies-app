import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/movieApi";

const apiKey = process.env.REACT_APP_MOVIE_API_KEY; // Access the environment variable directly

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (text) => {
  const response = await movieApi.get(`?apiKey=${apiKey}&s=${text}&type=movie`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (text) => {
  const response = await movieApi.get(`?apiKey=${apiKey}&s=${text}&type=series`);
  return response.data;
});

export const fetchAsyncDetail = createAsyncThunk("movies/fetchAsyncDetail", async (id) => {
  const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
  details: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelection: (state) => {
      state.getSelectedDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched succesgully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched succesgully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched succesgully!");
      return { ...state, details: payload };
    },
  },
});

export const { removeSelection } = movieSlice.actions;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedDetail = (state) => state.movies.details;
export default movieSlice.reducer;
