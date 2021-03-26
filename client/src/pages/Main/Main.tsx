import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { RootState } from 'store';
import { ICharacter } from 'store/crud/crudTypes';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state: RootState) => state.crud);

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
          {(data.length !== 0 && data !== undefined)
            && data.map((item: ICharacter) => (
              <Character
                key={item._id}
                id={item._id}
                img={item.image}
                title={item.title}
                descr={item.description}
              />
            ))}
        </Container>
      )}
    </MainBlock>
  );
};

export default Main;
