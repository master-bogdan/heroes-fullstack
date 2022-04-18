import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
// Pages
import Main from 'pages/Main';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';

const Router: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Router;
