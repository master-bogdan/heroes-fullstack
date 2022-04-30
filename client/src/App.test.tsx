import React from 'react';
import { render } from 'test-utils';
import App from './App';

describe('App component', () => {
  it('Should render app', () => {
    render(
      <App />,
    );
  });
});
