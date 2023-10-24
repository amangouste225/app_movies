import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './app/store';
import { Provider } from 'react-redux';

// Fonts styles
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
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
