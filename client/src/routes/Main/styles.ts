import styled from 'styled-components';

export const ContentWrapper = styled.main`
  padding: 50px 0px;
  height: calc(100% - 90px);  
  overflow-y: auto;

  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: auto;
  place-items: center;
`;
