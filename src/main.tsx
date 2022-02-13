import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from './app';
import GlobalStyles from '@styles/global';
import ThemeStyles from '@styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeStyles />
    <ReactApp />
  </React.StrictMode>,
  document.getElementById('root')
)
