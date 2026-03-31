import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactApp from './app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
)
