// Import React.
import React from 'react';
import ReactDOM from 'react-dom';

// Import our custom React components and any other files.
import Header from './components/Header/Header';
import Graph from './components/Graph/Graph';
import './index.css';

// Render the app components.
ReactDOM.render(
  <>
    <Header />
    <Graph />
  </>,
  document.querySelector("#root")
)