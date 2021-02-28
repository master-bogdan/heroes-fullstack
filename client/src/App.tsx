import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import {
  AppPage,
} from './styles';
// Components
import Header from './components/Header';
import Character from './components/Character';
import Container from './components/Ui/Container';
import CreateForm from './components/CreateForm';
// Actions
import { FetchCharacters } from 'store/crud/crudActions';
// Types
import { RootState } from 'store';
import { ICharacter } from 'store/crud/crudTypes';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { data } = useSelector((state: RootState) => state.crud);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCharacters());
  }, [dispatch]);

  return (
    <AppPage>
      <Header
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <CreateForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
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
    </AppPage>
  );
};

export default App;
