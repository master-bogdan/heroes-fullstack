import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isExpired } from 'react-jwt';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
// Pages
import Main from 'pages/Main';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
// Actions
import { setLoginAction } from 'store/auth/authActions';

const Router: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const checkAuth = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      dispatch(setLoginAction(false));
      history.push('/login');
      return;
    }

    const isTokenExpired = isExpired(token);

    if (!isTokenExpired) {
      dispatch(setLoginAction(true));
    } else {
      dispatch(setLoginAction(false));
      localStorage.removeItem('authToken');
      history.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Router;
