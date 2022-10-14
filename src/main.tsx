import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactApp from './app';
import GlobalStyles from '@styles/global';
import PrintStyles from '@styles/print';
import ThemeStyles from '@styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <PrintStyles />
    <ThemeStyles />
    <ReactApp />
  </React.StrictMode>
)
