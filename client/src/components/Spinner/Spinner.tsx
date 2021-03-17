import React from 'react';
import {
  Wrapper,
} from './styles';

const Spinner: React.FC = () => (
  <Wrapper>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </Wrapper>
);

export default Spinner;
