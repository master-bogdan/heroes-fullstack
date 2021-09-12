import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// Components
import { LoginForm } from 'components/Ui/Forms';
import { ErrorText, LoginTitle, SuccessText } from 'components/Ui/Typography';
import { InputStyled } from 'components/Ui/Inputs';
import { LoginButton } from 'components/Ui/Buttons';
// Actions
import { registerAction, setAuthErrorAction } from 'store/auth/authActions';
// Styles
import {
  LoginPage,
  Wrapper,
  RegisterLink,
} from './styles';
import { useTypeSelector } from 'hooks/useTypeSelector';

const Register: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, isRegister } = useTypeSelector(({ auth }) => auth);

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
    dispatch(registerAction(loginData));
  };

  useEffect(() => {
    if (isRegister) {
      setTimeout(() => {
        history.push('/login');
      }, 5000);
    }
  }, [isRegister, dispatch]);

  return (
    <LoginPage>
      <Wrapper>
        <LoginTitle>
          Welcome to favorite character app <br />
          Please register your account
        </LoginTitle>
        <LoginForm onSubmit={submitHandler}>
          {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )}
          {isRegister && (
            <SuccessText>
              Register was successful, after 5 second you will be redirected to login page
            </SuccessText>
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
