// import { useState, useEffect } from 'react';
// import { UseSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};
export default Movies;
