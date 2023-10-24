import { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { Logo } from '../../assets';
import useStyles from './styles';
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const cat = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img
          src={theme.palette.mode === 'light' ? Logo : Logo}
          alt='App Movie Logo'
          className={classes.image}
        />
      </Link>
      <Divider light={true} />
      <List style={{ padding: 0 }}>
        <ListSubheader className={classes.title}>Categories</ListSubheader>
        {cat?.map(({ label, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.catImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider light={true} style={{ backgroundColor: '#2e2e2e' }} />
      <ListSubheader className={classes.title}>Genres</ListSubheader>
      {isFetching ? (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      ) : (
        data?.genres?.map(({ name, id }) => (
          <Link key={name} className={classes.links} to='/'>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img
                  src={genreIcons[name.toLowerCase()]}
                  className={classes.catImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={name} className={classes.itemtext} />
            </ListItem>
          </Link>
        ))
      )}
    </>
  );
}
export default Sidebar;
