import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=158b701a02d1e4a48c156edec40ed343`,
    }),

    getMovies: builder.query({
      query: () =>
        `movie/popular?page=${page}&api_key=158b701a02d1e4a48c156edec40ed343`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
