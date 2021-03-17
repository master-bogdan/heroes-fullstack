import React, { useState } from 'react';
import {
  LoginPage,
} from './styles';

const Register = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  return (
    <LoginPage>
      Hello
    </LoginPage>
  );
};

export default Register;
