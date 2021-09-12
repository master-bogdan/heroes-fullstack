import styled from 'styled-components';

const BaseButton = styled.button`
  display: block;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const HeaderButton = styled(BaseButton)<{ bg?: string }>`
  background-color: ${({ bg }) => bg};
  text-transform: uppercase;

  &:first-child {
    margin-right: 15px;
  }
`;

export const CardEditButton = styled(BaseButton)`
  margin: 0 auto;
  width: 95%;
  padding: 10px 15px;
  text-align: center;
  background-color: black;
  text-transform: uppercase;
`;

export const CardDeleteButton = styled(CardEditButton)`
  background-color: brown;
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
