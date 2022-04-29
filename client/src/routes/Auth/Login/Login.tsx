import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { useLoginMutation } from 'store/auth/auth.services';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const [loginData, setLoginData] = useState({
    nickname: '',
    password: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await login(loginData);
  };

  // useEffect(() => {
  //   if (isLogin) {
  //     history.push('/');
  //   }
  // }, [dispatch, isLogin]);

  return (
    <LoginPage>
      <Wrapper>
        <LoginTitle>
          Login to Heroes app
        </LoginTitle>
        <LoginForm>
          {/* {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )} */}
          <InputStyled
            type="text"
            placeholder="Nickname"
            name="nickname"
            onChange={onChange}
            required
          />
          <InputStyled
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            required
          />
          <LoginButton
            onClick={onSubmit}
            type="submit"
          >
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
