import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
// Pages
import Main from 'pages/Main';
import Login from 'pages/Auth/Login';
// Types
import { RootState } from 'store';

const Router = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  // useEffect(() => {
  //   if (!isLogin) {
  //     history.push('/login');
  //   }
  // }, [isLogin, history]);

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Router;
