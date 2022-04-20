import React, { useEffect, useState } from 'react';
import { useGetHeroesQuery } from 'store/heroes/heroes.services';
// Components
import Header from 'layouts/MainLayout/components/Header';
import CreateForm from 'components/CreateForm';
import Hero from 'components/Hero';
import Spinner from 'components/Spinner';
// Styles
import {
  MainBlock,
  ContentWrapper,
} from './styles';

const Main: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetHeroesQuery('');

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
        <ContentWrapper>
          {data.heroes.map((item: any) => (
            <Hero
              key={item._id}
              id={item._id}
              img={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ContentWrapper>
      )}
    </MainBlock>
  );
};

export default Main;
