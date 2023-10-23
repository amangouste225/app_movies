import { makeStyles } from '@mui/styles';
const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    marginLeft: '240px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  avatar: {
    height: '20px',
    width: '20px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#191919 !important',
  },
  linkButton: {
    '&:hover': {
      color: 'white ! important',
      textDecoration: 'none',
    },
  },
}));
