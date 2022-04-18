import React from 'react';
import Header from './components/Header';

import { Container } from './styles';

const MainLayout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default MainLayout;
