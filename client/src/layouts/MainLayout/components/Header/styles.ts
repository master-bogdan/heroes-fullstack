import styled from 'styled-components';

export const Block = styled.header`
  height: 70px;
  width: 100%;
  box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.75);
  margin-bottom: 20px;
  background-color: #fff;

  z-index: 5;

  position: sticky;
  top: 0;
  left: 0;
`;

export const Logo = styled.p`
  display: block;
  padding: 10px;
  background: black;
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;
