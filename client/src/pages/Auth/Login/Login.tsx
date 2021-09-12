import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { useHistory } from 'react-router';
// Actions
import { loginAction, setAuthErrorAction } from 'store/auth/authActions';
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
  const { error, isLogin } = useTypeSelector(({ auth }) => auth);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthErrorAction(''));
    setLoginData({
      ...loginData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginAction(loginData));
  };

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
        <LoginForm onSubmit={submitHandler}>
          {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )}
          <InputStyled
            onChange={changeHandler}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <InputStyled
            onChange={changeHandler}
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
