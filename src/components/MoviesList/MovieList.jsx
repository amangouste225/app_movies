/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '../index';

function MovieList({ movies }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}
export default MovieList;
