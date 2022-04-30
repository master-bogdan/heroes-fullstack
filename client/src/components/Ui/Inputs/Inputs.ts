import styled from 'styled-components';
import { Input } from '@material-ui/core';

export const InputStyled = styled(Input)`
  width: 100%;
  height: 30px;
  margin: 10px 0;

  &::placeholder {
    padding: 0 5px;
  }
`;
