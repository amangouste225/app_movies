import { styled, alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/currentGenreOrCategory';
const Search = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.code == 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #eaeaea',
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '26ch',
        '&:focus': {
          width: '35ch',
        },
      },
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onKeyDown={handleKeyPress}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='Find movies, TV shows and more'
        inputProps={{ 'aria-label': 'Search' }}
      />
    </Search>
  );
};

export default Search;
