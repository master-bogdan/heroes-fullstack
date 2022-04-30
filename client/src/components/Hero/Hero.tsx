import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardEditButton, CardDeleteButton } from '../Ui/Buttons';
import DefaultImage from 'components/Ui/DefaultImage';
// Styles
import {
  Card,
  CardImg,
  CardDescr,
  CardTitle,
  Form,
  ImageFormField,
  TitleFormField,
  DescrFormField,
} from './styles';

interface Props {
  id: string
  img: string
  title: string
  description: string
}

const Hero: React.FC<Props> = ({
  id,
  img,
  title,
  description,
}) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState <boolean>(false);
  const [values, setValue] = useState({
    img,
    title,
    description,
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEdit(!isEdit);
    // dispatch(UpdateCharacter(id, values));
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const deleteChar = () => {
    // dispatch(DeleteCharacter(id));
  };

  if (isEdit) {
    return (
      <Form onSubmit={onSubmit}>
        <ImageFormField
          name="image"
          value={values.img}
          onChange={handleChange}
        />
        <TitleFormField
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <DescrFormField
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <CardEditButton
          type="submit"
        >
          Update
        </CardEditButton>
        <CardDeleteButton
          type="button"
          onClick={deleteChar}
        >
          Delete
        </CardDeleteButton>
      </Form>
    );
  }

  return (
    <Card>
      <CardImg>
        <DefaultImage url={img} />
      </CardImg>
      <CardTitle>{title}</CardTitle>
      <CardDescr>{description}</CardDescr>
      <CardEditButton
        onClick={() => setIsEdit(!isEdit)}
      >
        Edit
      </CardEditButton>
    </Card>
  );
};

export default Hero;
