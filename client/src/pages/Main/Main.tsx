import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from 'hooks/useTypeSelector';
// Styles
import {
  MainBlock,
} from './styles';
// Components
import Header from 'components/Header';
import CreateForm from 'components/CreateForm';
import Character from 'components/Character';
import Container from 'components/Ui/Container';
import Spinner from 'components/Spinner';
// Actions
import { FetchCharacters } from 'store/crud/crudActions';
// Types
import { ICharacter } from 'store/crud/crudTypes';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { characters, isLoading } = useTypeSelector(({ crud }) => crud);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(FetchCharacters());
  }, [dispatch]);

  return (
    <MainBlock>
      <Header
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <CreateForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {(characters.length !== 0 && characters !== undefined)
            && characters.map((item: ICharacter) => (
              <Character
                key={item._id}
                id={item._id}
                img={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
        </Container>
      )}
    </MainBlock>
  );
};

export default Main;
