import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'start',
    padding: '9%',
    backgroundColor: '#000',
  },

  image: {
    width: '54%',
  },

  links: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
  },
  catImages: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(0)',
  },

  title: {
    backgroundColor: 'transparent !important',
    color: '#eaeaea !important',
  },
}));
