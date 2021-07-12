import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Component } from 'react'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);







ReactDOM.render(
  // this refers to the greeting component
  <App />,
  document.getElementById('root')
);