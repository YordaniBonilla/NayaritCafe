import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, Global, css } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
      <App/>
      </ThemeProvider>
    </CacheProvider>   
  </React.StrictMode>
);

