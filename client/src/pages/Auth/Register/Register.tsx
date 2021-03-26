import React, { useState } from 'react';
import axios from 'axios';
import {
  LoginPage,
  Wrapper,
  Title,
  LoginForm,
  Input,
  LoginButton,
  RegisterLink,
} from './styles';

const Register: React.FC = () => {
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
      const { data } = await axios.post(`${process.env.REACT_APP_REGISTER}`, loginData);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <LoginPage>
      <Wrapper>
        <Title>
          Welcome to favorite character app
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
          <LoginButton type="submit">Create account</LoginButton>
          <RegisterLink to="/login">
            Log in
          </RegisterLink>
        </LoginForm>
      </Wrapper>
    </LoginPage>
  );
};

export default Register;
