import React from 'react';
import { render } from 'test-utils';
import Character from './Character';

const character = {
  id: '1',
  img: '',
  title: '',
  description: '',
};

describe('Character Components', () => {
  it('Should render component', () => {
    render(
      <Character
        id={character.id}
        img={character.img}
        title={character.title}
        description={character.description}
      />,
    );
  });
});
