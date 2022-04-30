import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { ROUTE } from 'utils/constants/routes';
// Pages
import Main from './Main';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Router: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Switch>
      <Route path={ROUTE.HOME} exact component={Main} />
      <Route path={ROUTE.LOGIN} exact component={Login} />
      <Route path={ROUTE.REGISTER} exact component={Register} />
    </Switch>
  );
};

export default Router;
