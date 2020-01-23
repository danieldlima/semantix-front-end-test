import React from 'react';

import CircleIconComponents from './components/store-icons/circle-icon.component';
import LeafIconComponent from './components/store-icons/leaf-icon.component';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CircleIconComponents fillColor="white" size="80px" />
        <LeafIconComponent fillColor="white" size="100px" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  Edit
          {' '}
          <code>src/App.js</code>
          {' '}
                  and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                  Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
