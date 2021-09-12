import styled from 'styled-components';

export const HeaderButton = styled.button`
  display: block;
  padding: 5px;
  background: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
      opacity: 0.8;
  }
`;

export const CardEditButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  &:hover {
      opacity: 0.7;
  }
`;

export const CardDeleteButton = styled(CardEditButton)`
    background: brown;
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
  background: rgba(0, 0, 0, 1);
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
