import '../App.css';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './styles.js';

import {
  Actors,
  Movies,
  NavBar,
  MovieInformation,
  Profile,
} from '../components';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/movie/:id' element={<MovieInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
