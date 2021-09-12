import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
// Components
import Container from '../Ui/Container';
import { HeaderButton } from '../Ui/Buttons';
// Actions
import { setLoginAction } from 'store/auth/authActions';
// Styles
import {
  Block,
  Logo,
  ButtonGroup,
} from './styles';

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ modalOpen, setModalOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    dispatch(setLoginAction(false));
    history.push('/login');
  };

  return (
    <Block>
      <Container>
        <Logo>CRUD CHARACTER APP</Logo>
        <ButtonGroup>
          <HeaderButton
            bg="black"
            onClick={() => setModalOpen(!modalOpen)}
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
      </Container>
    </Block>
  );
};

export default Header;
