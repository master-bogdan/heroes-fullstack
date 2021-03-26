import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import GlobalStyle from './styles/globalStyles';
// Routes
import Router from 'routes';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

export default App;
