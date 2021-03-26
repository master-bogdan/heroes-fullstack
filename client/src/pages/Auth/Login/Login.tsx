import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  LoginPage,
  Wrapper,
  Title,
  LoginForm,
  Input,
  LoginButton,
  RegisterLink,
} from './styles';
import { loginAction } from 'store/auth/authActions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { token, response }: any = await dispatch(loginAction(loginData));

      if (response === 'success') {
        localStorage.setItem('authToken', token);
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPage>
      <Wrapper>
        <Title>
          Welcome to favorite character app
          Please Login
        </Title>
        <LoginForm onSubmit={submitHandler}>
          <Input
            onChange={changeHandler}
            type="text"
            placeholder="Email"
            name="email"
          />
          <Input
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            name="password"
          />
          <LoginButton type="submit">Log in</LoginButton>
          <RegisterLink to="/register">
            Create Account
          </RegisterLink>
        </LoginForm>
      </Wrapper>
    </LoginPage>
  );
};

export default Login;
