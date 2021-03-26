import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { checkAuthAction } from 'store/auth/authActions';
// Types
import { RootState } from 'store';

const Router: React.FC = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  const checkAuth = async () => {
    try {
      const token = await localStorage.getItem('authToken');

      if (token) {
        const isTokenExpired = isExpired(token);

        if (!isTokenExpired) {
          dispatch(checkAuthAction({
            isLogin: true,
            token,
          }));
        } else {
          dispatch(checkAuthAction({
            isLogin: false,
            token: null,
          }));
          localStorage.removeItem('authToken');
          history.push('/login');
        }
      } else {
        dispatch(checkAuthAction({
          isLogin: false,
          token: null,
        }));
        history.push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [dispatch]);

  return (
    <Switch>
      {isLogin ? (
        <Route path="/" exact component={Main} />
      ) : (
        <>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </>
      )}
    </Switch>
  );
};

export default Router;
