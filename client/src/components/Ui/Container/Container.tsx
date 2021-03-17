import React from 'react';
import styled from 'styled-components';

const Container = ({ children }: any) => (
  <Block>
    {children}
  </Block>
);

export default Container;

const Block = styled.div`
    max-width: 1024px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
        padding: 0 15px;
    }
`;
