import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Routes
import Router from 'routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
