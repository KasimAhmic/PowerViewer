import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './app/theme';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// TODO: Figure out how to use this
serviceWorker.unregister();
