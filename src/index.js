import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';

import App from './pages/home/App';
import { GlobalStyle } from './assets/styles/styles.global';

import './config/global';

import './index.css';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={null}>
        <>
          <GlobalStyle />
          <App />
        </>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
