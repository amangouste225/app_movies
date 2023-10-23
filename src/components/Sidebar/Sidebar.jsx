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

const cat = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demo = [
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Animation', value: 'animation' },
];

const Sidebar = ({ setmobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

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
        {cat.map(({ label, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={Logo} className={classes.catImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider light={true} style={{ backgroundColor: '#2e2e2e' }} />
      <ListSubheader className={classes.title}>Genres</ListSubheader>
      {demo.map(({ label, value }) => (
        <Link key={value} className={classes.links} to='/'>
          <ListItem onClick={() => {}}>
            {/* <ListItemIcon>
                <img src={Logo} className={classes.catImages} height={30} />
              </ListItemIcon> */}
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </>
  );
};
export default Sidebar;
