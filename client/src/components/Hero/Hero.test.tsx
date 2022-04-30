import React from 'react';
import { render } from 'test-utils';
import Hero from './Hero';

const character = {
  id: '1',
  img: '',
  title: '',
  description: '',
};

describe('Character Components', () => {
  it('Should render component', () => {
    render(
      <Hero
        id={character.id}
        img={character.img}
        title={character.title}
        description={character.description}
      />,
    );
  });
});
