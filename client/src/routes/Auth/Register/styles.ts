import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginPage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  padding: 20px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 10px 0;

  &::placeholder {
    padding: 0 5px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  height: 30px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;

  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

export const RegisterLink = styled(Link)`
  font-size: 12px;
  width: fit-content;
  margin-right: auto;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
