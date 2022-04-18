import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Grid from '@material-ui/core/Grid';
// Components
import Header from 'layouts/MainLayout/components/Header';
import CreateForm from 'components/CreateForm';
import Hero from 'components/Hero';
import Container from 'components/Ui/Container';
import Spinner from 'components/Spinner';
// Styles
import {
  MainBlock,
  ContentWrapper,
} from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   dispatch(FetchCharacters());
  // }, []);

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
      {/* {isLoading ? (
        <Spinner />
      ) : (
        <ContentWrapper>
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
        </ContentWrapper>
      )} */}
    </MainBlock>
  );
};

export default Main;
