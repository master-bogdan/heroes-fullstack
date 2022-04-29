import React from 'react';
import DefaultImg from 'assets/images/ukraine.jpg';

import { Image } from './styles';

interface IDefaultImageProps {
  url: string;
}

const DefaultImage: React.FC<IDefaultImageProps> = ({ url }) => {
  const imageOnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    if (!event.currentTarget.classList.contains('error')) {
      event.currentTarget.classList.add('success');
    }
  };

  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = DefaultImg;
    event.currentTarget.classList.remove('success');
    event.currentTarget.classList.add('error');
  };

  return (
    <Image
      src={url || ''}
      alt=""
      onLoad={imageOnLoadHandler}
      onError={imageOnErrorHandler}
    />
  );
};

export default DefaultImage;
