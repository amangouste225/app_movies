import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'start',
    padding: '8%',
    backgroundColor: '#000',
    position: 'sticky',
    top: '0',
    zIndex: '99',
  },

  image: {
    width: '40%',
  },

  links: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    '&:hover': {
      color: 'red !important',
    },
  },
  catImages: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'brightness(0) invert(1);',
  },

  title: {
    backgroundColor: 'transparent !important',
    color: '#eaeaea !important',
  },
}));
