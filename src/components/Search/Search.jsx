import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/currentGenreOrCategory';
import { ClassNames } from '@emotion/react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './style';

const Search = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.code == 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          id='outlined-basic'
          label='Find movies, and more'
          onKeyDown={handleKeyPress}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant='outlined'
          InputProps={{
            className: classes.input,
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default Search;
