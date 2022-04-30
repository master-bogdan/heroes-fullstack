import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
// Components
import Container from '../../../../components/Ui/Container';
import { HeaderButton } from '../../../../components/Ui/Buttons';
// Styles
import {
  Block,
  Logo,
  ButtonGroup,
} from './styles';

interface IHeaderProps {
  isLogin: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isLogin }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    history.push('/login');
  };

  return (
    <Block>
      <Container>
        <Logo>HEROES APP</Logo>
        {isLogin && (
          <ButtonGroup>
            <HeaderButton
              bg="black"
            >
              Add new character
            </HeaderButton>
            <HeaderButton
              bg="brown"
              onClick={logoutHandler}
            >
              Logout
            </HeaderButton>
          </ButtonGroup>
        )}
      </Container>
    </Block>
  );
};

export default Header;
