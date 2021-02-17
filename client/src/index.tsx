import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
