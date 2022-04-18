import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useHistory } from 'react-router';
// Components
import { LoginForm } from 'components/Ui/Forms';
import { LoginTitle, ErrorText } from 'components/Ui/Typography';
import { InputStyled } from 'components/Ui/Inputs';
import { LoginButton } from 'components/Ui/Buttons';
// Styles
import {
  LoginPage,
  Wrapper,
  RegisterLink,
} from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin } = useTypedSelector(({ auth }) => auth);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  }, [dispatch, isLogin]);

  return (
    <LoginPage>
      <Wrapper>
        <LoginTitle>
          Welcome to favorite character app <br />
          Please Login
        </LoginTitle>
        <LoginForm>
          {/* {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )} */}
          <InputStyled
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <InputStyled
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <LoginButton type="submit">
            Log in
          </LoginButton>
          <RegisterLink to="/register">
            Create Account
          </RegisterLink>
        </LoginForm>
      </Wrapper>
    </LoginPage>
  );
};

export default Login;
