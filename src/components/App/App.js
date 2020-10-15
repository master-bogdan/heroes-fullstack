import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FetchCharacters } from '../../store/actions/readCharacters';
import Header from '../Header';
import Character from '../Character';
import Container from '../Ui/Container';
import CreateForm from '../CreateForm';

const App = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const content = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(FetchCharacters());
      }, [dispatch]);

  return (
    <div className="App">
        <Header 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
        />
        <CreateForm 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
        /> 
        <Container>
            { content.read.data.map((item) => {
                return (
                    <Character
                        key={Math.random() * 10}
                        id={item.id} 
                        img={item.image}
                        title={item.title}
                        descr={item.description}
                    />
                )
            })}
        </Container>
    </div>
  );
}

export default App;
