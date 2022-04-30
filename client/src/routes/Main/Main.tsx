import React, { useEffect, useState } from 'react';
import { useGetHeroesQuery } from 'store/heroes/heroes.services';
// Components
import CreateForm from 'components/CreateForm';
import Hero from 'components/Hero';
import Spinner from 'components/Spinner';
// Styles
import {
  ContentWrapper,
} from './styles';
import MainLayout from 'layouts/MainLayout';

const Main: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { data = [], isLoading } = useGetHeroesQuery('');

  return (
    <MainLayout>
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
              img={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </ContentWrapper>
      )}
    </MainLayout>
  );
};

export default Main;
