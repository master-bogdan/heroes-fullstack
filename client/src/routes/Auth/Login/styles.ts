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
