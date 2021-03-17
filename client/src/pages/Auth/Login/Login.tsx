import React, { useState } from 'react';
import {
  LoginPage,
  Wrapper,
  Title,
  LoginForm,
  Input,
  LoginButton,
} from './styles';

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  return (
    <LoginPage>
      <Wrapper>
        <Title>
          Welcome to favorite character app
        </Title>
        <LoginForm>
          <Input type="text" placeholder="Name" />
          <Input type="password" placeholder="Password" />
          <LoginButton type="submit">Log in</LoginButton>
        </LoginForm>
      </Wrapper>
    </LoginPage>
  );
};

export default Login;
