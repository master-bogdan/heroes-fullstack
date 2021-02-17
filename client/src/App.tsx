import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Character from './components/Character';
import Container from './components/Ui/Container';
import CreateForm from './components/CreateForm';

const App = () => {
  const [modalOpen, setModalOpen] = useState<any>(false);

  const content = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(FetchCharacters());
  // }, [dispatch]);

  return (
    <div className="App">
      <Header
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <CreateForm />
      {/* <Container>
        { content.read.data.map((item) => (
          <Character
            key={Math.random() * 10}
            id={item.id}
            img={item.image}
            title={item.title}
            descr={item.description}
          />
        ))}
      </Container> */}
    </div>
  );
};

export default App;
