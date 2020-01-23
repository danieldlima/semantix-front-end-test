import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './pages/home/App';
import { GlobalStyle } from './assets/styles/styles.global';
import { store, persistor } from './store/store';

import './index.css';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <>
        <GlobalStyle />
        <App />
      </>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
