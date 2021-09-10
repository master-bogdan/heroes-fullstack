import React, { useState } from 'react';
import axios from 'axios';
// Components
import { LoginForm } from 'components/Ui/Forms';
import { LoginTitle } from 'components/Ui/Typography';
import { InputStyled } from 'components/Ui/Inputs';
import { LoginButton } from 'components/Ui/Buttons';
// Styles
import {
  LoginPage,
  Wrapper,
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
        <LoginTitle>
          Welcome to favorite character app <br />
          Please register your account
        </LoginTitle>
        <LoginForm onSubmit={submitHandler}>
          <InputStyled
            onChange={changeHandler}
            type="text"
            placeholder="Email"
            name="email"
          />
          <InputStyled
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            name="password"
          />
          <LoginButton type="submit">
            Create account
          </LoginButton>
          <RegisterLink to="/login">
            Return to Login
          </RegisterLink>
        </LoginForm>
      </Wrapper>
    </LoginPage>
  );
};

export default Register;
