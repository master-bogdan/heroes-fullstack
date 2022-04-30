import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';
import Header from './components/Header';

import { Container } from './styles';

const MainLayout: React.FC = ({ children }) => {
  const { isLogin } = useTypedSelector(({ auth }) => auth);

  return (
    <Container>
      <Header
        isLogin={isLogin}
      />
      {children}
    </Container>
  );
};

export default MainLayout;
