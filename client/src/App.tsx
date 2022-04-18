import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
// Routes
import Router from 'routes';
// Styles
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </BrowserRouter>
);

export default App;
