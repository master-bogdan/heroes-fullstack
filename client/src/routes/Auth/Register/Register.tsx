import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// Components
import { LoginForm } from 'components/Ui/Forms';
import { ErrorText, LoginTitle, SuccessText } from 'components/Ui/Typography';
import { InputStyled } from 'components/Ui/Inputs';
import { LoginButton } from 'components/Ui/Buttons';
// Styles
import {
  LoginPage,
  Wrapper,
  RegisterLink,
} from './styles';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Register: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   if (isRegister) {
  //     setTimeout(() => {
  //       history.push('/login');
  //     }, 5000);
  //   }
  // }, [isRegister, dispatch]);

  return (
    <LoginPage>
      <Wrapper>
        <LoginTitle>
          Welcome to favorite character app <br />
          Please register your account
        </LoginTitle>
        <LoginForm>
          {/* {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )} */}
          {/* {isRegister && (
            <SuccessText>
              Register was successful, after 5 second you will be redirected to login page
            </SuccessText>
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
