import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyle } from './assets/styles/styles.global';

import './index.css';

const Root = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
