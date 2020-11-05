import React from 'react';
import { Block, Logo } from './styles';
import Container from '../Ui/Container';
import { HeaderButton } from '../Ui/Buttons';

const Header = ({modalOpen, setModalOpen}) => {

    return (
        <Block>
            <Container>
                <Logo>CRUD STAR WARS APP</Logo>
                <HeaderButton onClick={() => setModalOpen(!modalOpen)}>Add new character</HeaderButton>
            </Container>
        </Block>
    )
}

export default Header;