import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardEditButton, CardDeleteButton } from '../Ui/Buttons';
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
  descr: string
}

const Character: React.FC<Props> = ({
  id, img, title, descr,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValue] = useState({
    img,
    title,
    descr,
  });

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setIsEdit(!isEdit);
    // dispatch(UpdateCharacter(id, values));
  };

  const handleChange = (event: any) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      { isEdit
        ? (
          <Form onSubmit={(event) => onSubmit(event)}>
            <CardImg src={img} />
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
              name="descr"
              value={values.descr}
              onChange={handleChange}
            />
            <CardEditButton
              type="submit"
            >
              Update
            </CardEditButton>
            <CardDeleteButton
              type="button"
            >
              Delete
            </CardDeleteButton>
          </Form>
        )
        : (
          <Card>
            <CardImg src={img} />
            <CardTitle>{title}</CardTitle>
            <CardDescr>{descr}</CardDescr>
            <CardEditButton
              onClick={() => setIsEdit(!isEdit)}
            >
              Edit
            </CardEditButton>
          </Card>
        )}
    </>
  );
};

export default Character;
