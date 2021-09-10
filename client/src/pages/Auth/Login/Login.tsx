import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Actions
import { loginAction } from 'store/auth/authActions';
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
        <LoginTitle>
          Welcome to favorite character app <br />
          Please Login
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
