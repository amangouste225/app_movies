import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '20px',
  },
  title: {
    textOverflow: 'ellipsis',
    color: '#fff',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'bolder',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '10px',

    '&:hover': {
      color: '#e13100',
    },
  },

  links: {
    textDecoration: 'none',
    alignItems: 'start',
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
    transition: {
      duration: theme.transitions.duration.standard,
    },
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '2px 2px 2px black',
    },
  },

  group: {
    maxHeight: '340px',
    overflow: 'hidden',
    borderRadius: '20px',
  },

  icon: {
    color: 'hsla(0,0%,100%,.75);',
    fontSize: '20px',
  },
}));
