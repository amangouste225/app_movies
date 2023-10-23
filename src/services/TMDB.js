import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.themoviedb.org/3/movie/550?api_key=158b701a02d1e4a48c156edec40ed343

const page = 1;
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    //   Get movies by [type]
    getMovies: builder.query({
      query: () =>
        `movie/popular?page=${page}&api_key=158b701a02d1e4a48c156edec40ed343`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
