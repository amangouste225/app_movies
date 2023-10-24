import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './app/store';
import App from './components/App';

import VaudThinWoff2 from './assets/fonts/Vaud_300.woff2';
import VaudWoff2 from './assets/fonts/Vaud_400.woff2';
import VaudSemiWoff2 from './assets/fonts/Vaud_600.woff2';
import VaudBoldWoff2 from './assets/fonts/Vaud_700.woff2';

const theme = createTheme({
  typography: {
    fontFamily: 'Vaud',
    body1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vaud';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Vaud'), local('Vaud-Thin'), url(${VaudThinWoff2}) format('woff2');
        },
        @font-face {
          font-family: 'Vaud';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Vaud'), local('Vaud-Regular'), url(${VaudWoff2}) format('woff2');
         
        },
        @font-face {
          font-family: 'Vaud';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Vaud'), local('Vaud-Semibold'), url(${VaudSemiWoff2}) format('woff2');
         
        @font-face {
          font-family: 'Vaud';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Vaud'), local('Vaud-Bold'), url(${VaudBoldWoff2}) format('woff2');
          
        }
      `,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
