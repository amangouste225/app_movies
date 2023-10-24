import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '20px !important',
  },
  title: {
    textAlign: 'center',
    textOverflow: 'ellipsis',
    color: '#fff',
    fontSize: '16px !important',
    fontWeight: '800 !important',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '20px !important',
    marginBottom: '10px',
    '&:hover': {
      color: '#e13100',
    },
  },

  links: {
    textDecoration: 'none',
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },

  image: {
    borderRadius: '5px',
    marginBottom: '10px',
    height: '350px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  group: {
    maxHeight: '340px',
    overflow: 'hidden',
    borderRadius: '20px',
  },

  icon: {
    color: 'hsla(0,0%,100%,.75)',
    fontSize: '15px !important',
  },
}));
